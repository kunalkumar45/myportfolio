import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AllComponent } from './all/all.component';
import { WebAppComponent } from './web-app/web-app.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';

@Component({
  selector: 'app-portfolio-tab',
  standalone: true,
  imports: [NgbNavModule, AllComponent, WebAppComponent, ECommerceComponent],
  templateUrl: './portfolio-tab.component.html',
  styleUrl: './portfolio-tab.component.scss'
})
export class PortfolioTabComponent {

}
