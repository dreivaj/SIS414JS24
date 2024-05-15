import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-herd',
  templateUrl: './herd.component.html',
  styleUrls: ['./herd.component.css']
})
export class HerdComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.getElementById('nav-list');

    if (mobileMenuToggle && navList) {
      mobileMenuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
      });
    }
  }

}
