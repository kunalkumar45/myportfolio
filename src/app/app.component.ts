import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { AboutTabComponent } from './components/about-tab/about-tab.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioTabComponent } from './components/portfolio-tab/portfolio-tab.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, AboutComponent, AboutTabComponent, ServicesComponent, PortfolioTabComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
