import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }


  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      const target = document.querySelector('.tw')
      const writer = new Typewriter(target, {
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 150,
        typeColor: '#2eb1ed',
        cursorColor: '#2eb1ed'
      })

      writer
        .type('Kunal Kumar')
        .rest(500)
        .changeOps({ deleteSpeed: 150 })
        .remove(11)
        .rest(800)
        .remove(4)
        .type('Web Developer')
        .rest(800)
        .changeOps({ deleteSpeed: 150 })
        .remove(21)
        .type('Frontend Developer')
        .rest(800)
        .clear()
        .start()
    }

  }
}
