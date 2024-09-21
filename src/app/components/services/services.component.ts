import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements AfterViewInit {

  @ViewChildren('tiltElement') tiltElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') { 
      this.tiltElements.forEach((tiltElement) => {
        VanillaTilt.init(tiltElement.nativeElement, {
          max: 15,
          speed: 100,
          glare:false,
          'max-glare': 0.5
        });
      });
    }
  }
}
