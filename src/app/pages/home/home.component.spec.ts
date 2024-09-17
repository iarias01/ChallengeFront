import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlertService } from '../../services/alert/alert.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { AppModule } from 'src/app/app.module';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let alertService: AlertService;
  let loadingService: LoadingService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppModule,
        ModalModule,
        FormsModule,
        ButtonModule,
      ],
      providers: [AlertService, LoadingService],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    alertService = TestBed.inject(AlertService);
    loadingService = TestBed.inject(LoadingService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
