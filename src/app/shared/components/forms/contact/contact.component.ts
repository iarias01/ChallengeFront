import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/services/alert/alert.service';
import { FormService } from 'src/app/services/form/form.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { EAlertType } from 'src/app/shared/utils/alert-type.enum';
import { ETypesButton } from 'src/app/shared/utils/type-button.enum';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public typeButton = ETypesButton;
  contactForm: FormGroup;
  submitted = false;
  attachment: File | null = null;
  @Output() finished = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private alertService: AlertService,
    private loadingService: LoadingService,
  ) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      comment: ['', Validators.required],
      attachment: [null, this.fileValidator],
    });
  }

  fileValidator(control: FormControl) {
    const file = control.value;
    if (file) {
      const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        return { invalidFileType: true };
      }
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;
    this.markAllAsTouched(this.contactForm);

    if (this.contactForm.valid) {
      this.loadingService.loading$.next(true);
      const formData = new FormData();
      formData.append('email', this.contactForm.get('email')?.value);
      formData.append('firstName', this.contactForm.get('firstName')?.value);
      formData.append('lastName', this.contactForm.get('lastName')?.value);
      formData.append('comment', this.contactForm.get('comment')?.value);
      if (this.attachment) {
        formData.append('attachment', this.attachment);
      }
      this.formService.sendForm(formData).subscribe({
        next: () => {
          this.alertService.message$.next({
            description: 'commentSent',
            type: EAlertType.SUCCESS,
          });
        },
        error: (err: Error) => {
          this.loadingService.loading$.next(false);
          console.error(err.message);
          this.alertService.message$.next({
            description: 'anErrorOccurredWithTheShipment',
            type: EAlertType.ERROR,
          });
        },
        complete: () => {
          this.finished.emit(true);
          this.loadingService.loading$.next(false);
          this.contactForm.reset();
        },
      });
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.contactForm.patchValue({
        attachment: file,
      });
      this.attachment = file;
      this.contactForm.get('attachment')!.setValue(file);
      this.contactForm.get('attachment')?.updateValueAndValidity();
    }
  }

  get formControls() {
    return this.contactForm.controls;
  }

  markAllAsTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    });
  }
}
