import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', width: '85%', class: 'html' },
    { name: 'CSS', width: '85%', class: 'css' },
    { name: 'JavaScript', width: '80%', class: 'frontend' },
    { name: 'TypeScript', width: '60%', class: 'fremwork' },
    { name: 'Bootstrap', width: '80%', class: 'frontend' },
    { name: 'Tailwind CSS', width: '60%', class: 'fremwork' },
    { name: 'Figma', width: '60%', class: 'fremwork' },
    { name: 'jQuery', width: '80%', class: 'frontend' },
    { name: 'React Js', width: '60%', class: 'fremwork' },
    { name: 'Angular', width: '60%', class: 'fremwork' },
    { name: 'Next Js', width: '60%', class: 'fremwork' },
    { name: 'Git & GitHub', width: '80%', class: 'tools' },
    { name: 'PHP', width: '50%', class: 'backend' },
    { name: 'MySQL', width: '50%', class: 'backend' },
  ];

}
