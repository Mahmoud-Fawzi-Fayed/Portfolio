import { Injectable } from '@angular/core';
import { LanguageTool } from './language-tool.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageToolService {
  private tools: LanguageTool[] = [
    { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
    { name: 'SASS', url: 'https://sass-lang.com/' },
    { name: 'PHP', url: 'https://www.php.net/' },
    { name: 'Node JS', url: 'https://nodejs.org/' },
    { name: 'Laravel', url: 'https://laravel.com/' },
    { name: 'Angular', url: 'https://angular.io/' },
    { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
    { name: 'Git', url: 'https://git-scm.com/' },
    { name: 'MySQL', url: 'https://www.mysql.com/' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/' },
    { name: 'Android Studio', url: 'https://developer.android.com/studio' },
    { name: 'Firebase', url: 'https://firebase.google.com/' },
    { name: 'BurpSuite', url: 'https://portswigger.net/burp' },
    { name: 'Dart', url: 'https://dart.dev/' },
    { name: 'Flutter', url: 'https://flutter.dev/' },
  ];

  languageTools() {
    return this.tools;
  }
}
