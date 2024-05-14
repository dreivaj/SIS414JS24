import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{
  @ViewChild('wrapper') wrapper: ElementRef | undefined;

  images: string[] = []; // Agrega tus URLs de imágenes aquí
  index = 0;

  constructor() { }

  ngOnInit(): void {
    //this.startRotation();
  }

  /*startRotation(): void {
    setInterval(() => {
      if (this.wrapper) {
        this.index++;
        const translateX = -this.index * 100 / this.images.length;
        this.wrapper.nativeElement.style.transform = `translateX(${translateX}%)`;

        if (this.index === this.images.length) {
          setTimeout(() => {
            if (this.wrapper) {
              this.wrapper.nativeElement.style.transition = 'none';
              this.index = 0;
              this.wrapper.nativeElement.style.transform = 'translateX(0)';
              setTimeout(() => {
                if (this.wrapper) {
                  this.wrapper.nativeElement.style.transition = 'transform 1s ease';
                }
              });
            }
          }, 1000);
        }
      }
    }, 3000);
  }*/
}
