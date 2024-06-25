import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BG_IMG_URL, logo } from '../../constants/config';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logoUrl = logo;
  bgUrl = BG_IMG_URL;

  email!: string;
  password!: string;

  loginService = inject(LoginService);
  router = inject(Router);
  toasterService = inject(ToastrService);

  ngOnInit() {
    this.loginService.currentUser$.subscribe(user => {
      console.log('User in subscription:', user); // Añadido para depuración
      if (user) {
        this.router.navigateByUrl('/browse');
      }
    });
  }

  onSubmit() {
    console.log('Submit clicked'); 
    if (!this.email || !this.password) {
      this.toasterService.error('Provide email or password');
      return; // sale del metodo
    }

    this.loginService.login(this.email, this.password)
      .then(() => {
        console.log('Login successful in component'); 
      })
      .catch((error) => {
        console.error('Login failed in component:', error);
        this.toasterService.error('Invalid email or password');
      });
  }

  goToDashboardLogin() {
    console.log('Navigating to /dashboard-login'); // Logging para debugging
    console.log('Router instance:', this.router); // Verificar la instancia de Router
    this.router.navigate(['/dashboard-login']); //  navigate en lugar de navigateByUrl
  }
}