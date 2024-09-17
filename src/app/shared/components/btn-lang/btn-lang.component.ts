import { Component } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';

interface Language {
  code: string;
  name: string;
}

@Component({
  selector: 'app-btn-lang',
  templateUrl: './btn-lang.component.html',
  styleUrls: ['./btn-lang.component.scss'],
})
export class BtnLangComponent {
  languages: Language[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ];
  selectedLanguage: Language = this.languages[0];
  dropdownOpen = false;

  constructor(private utilsService: UtilsService) {
    const savedLang = this.utilsService.lang;
    this.selectedLanguage =
      this.languages.find((lang) => lang.code === savedLang) || this.languages[0];
  }

  setLanguage(event: Event, lang: Language) {
    event.stopPropagation();
    this.utilsService.setLanguage(lang.code);
    this.selectedLanguage = lang;
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
