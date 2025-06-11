import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 class="text-2xl font-bold text-center mb-6">Login</h2>
      
      <div class="mb-4">
        <button 
          (click)="navigateToDashboard()"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard (Temporary)
        </button>
      </div>
      
      <p class="text-center text-sm text-gray-600 mt-4">
        Don't have an account? 
        <a [routerLink]="['/signup']" class="text-blue-600 hover:underline">Sign up</a>
      </p>
    </div>
  `
})
export class LoginComponent {
  constructor(private router: Router) {}

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
