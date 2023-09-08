import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  public skills = [
    'Html',
    'CSS',
    'JavaScript',
    'NodeJs',
    'Angular',
    'React',
    'Postgres',
    'Typeorm',
    'Nestjs',
    'Docker',
    'Firebase',
    'Bootstrap',
    'Ionic',
    'SPA',
    'Jest',
  ];
  public section = [
    { label: 'Inicio', id: 'start' },
    { label: 'Sobre Mim', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contatos', id: 'contacts' },
  ];
  public contacts = [
    {
      type: 'E-mail',
      value: 'yuri.scavalcante@outlook.com',
      icon: 'bi bi-envelope',
      url: '',
    },
    { type: 'Telefone', value: '(91)99203-3562', icon: 'bi bi-phone', url: '' },
    {
      type: 'Linkedin',
      value: 'www.linkedin.com/in/yuri-da-silva-cavalcante',
      icon: 'bi bi-linkedin',
      url: 'https://www.linkedin.com/in/yuri-da-silva-cavalcante',
    },
    {
      type: 'GitHub',
      value: 'github.com/yuriscavalcante',
      icon: 'bi bi-github',
      url: 'https://github.com/yuriscavalcante',
    },
  ];
}
