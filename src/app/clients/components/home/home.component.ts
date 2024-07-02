import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthService } from '../../service/auth/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule,RouterLink],
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styles: [
    `
      mat-toolbar {
        display: flex;
        justify-content: space-between;
      }
    `,
  ],
})
export default class HomeComponent {
  private _router = inject(Router);

  private authservice = inject(AuthService);

  async logOut(): Promise<void> {
    try {
      await this.authservice.logOut();
      this._router.navigateByUrl('/auth/login');
    } catch (error) {
      console.log(error);
    }
  }
}