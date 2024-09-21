import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2, TemplateRef, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isLight = false;

  constructor(private renderer: Renderer2) { 
  }

  private offcanvasService = inject(NgbOffcanvas);

  open(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
  }

  toggleTheme() {
    this.isLight = !this.isLight;
    const theme = this.isLight ? 'light-theme' : 'dark-theme';
    this.renderer.setAttribute(document.body, 'class', theme);
  }
  
}

