import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-ultimo',
  templateUrl: './ultimo.component.html',
  styleUrls: ['./ultimo.component.css']
})

export class UltimoComponent  implements OnInit, OnDestroy{
  items: { image: string, alt: string }[] = [
    { image: './assets/ambulancia.png', alt: 'Descripción de la imagen 1' },
    { image: './assets/farmacia.jpg', alt: 'Descripción de la imagen 2' },
    { image: './assets/pediatria.jpg', alt: 'Descripción de la imagen 2' },
    { image: './assets/emergencias.jpg', alt: 'Descripción de la imagen 2' },
    { image: './assets/medicina_gral.jpg', alt: 'Descripción de la imagen 2' },
    { image: './assets/laboratorio.jpg', alt: 'Descripción de la imagen 2' },
    { image: './assets/farmacia.jpg', alt: 'Descripción de la imagen 2' },
    { image: './assets/ecografia.jpg', alt: 'Descripción de la imagen 2' },
    { image: './assets/laboratorio.jpg', alt: 'Descripción de la imagen 2' },
    // Agrega más imágenes según sea necesario
  ];
  currentIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startAnimation();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startAnimation(): void {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }, 5000); // Cambiar de imagen cada 5 segundos
  }
  
}