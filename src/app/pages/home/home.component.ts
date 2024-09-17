import { Component, OnInit } from '@angular/core';
import { ETypesButton } from 'src/app/shared/utils/type-button.enum';
import { ESizeModal } from 'src/app/shared/utils/modal-size.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public typeButton = ETypesButton;
  public sizeModal = ESizeModal;
  public showContactForm = false;

  constructor(public router: Router) {}

  ngOnInit() {}
}
