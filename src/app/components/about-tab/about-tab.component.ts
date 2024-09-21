import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from "./experience/experience.component";
import { EducationComponent } from "./education/education.component";

@Component({
  selector: 'app-about-tab',
  standalone: true,
  imports: [NgbNavModule, SkillsComponent, ExperienceComponent, EducationComponent],
  templateUrl: './about-tab.component.html',
  styleUrl: './about-tab.component.scss'
})
export class AboutTabComponent {
}
