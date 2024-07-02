import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './api/components/navbar/navbar.component';
import { ScrollToTopComponent } from './api/components/scroll-to-top/scroll-to-top.component';
import { HttpClientModule } from '@angular/common/http';
import HomenewComponent from './api/pages/home/homenew.component';


@Component({
  standalone:true,
  imports:[RouterModule,
          NavbarComponent,
          ScrollToTopComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'streempelisnelly';
}

