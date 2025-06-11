import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 class="text-2xl font-bold text-center mb-6">Create Account</h2>
      
      <div class="mb-4">
        <button 
          (click)="navigateToDashboard()"
          class="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
        >
          Create Account (Temporary)
        </button>
      </div>
      
      <p class="text-center text-sm text-gray-600 mt-4">
        Already have an account? 
        <a [routerLink]="['/login']" class="text-blue-600 hover:underline">Log in</a>
      </p>
    </div>
  `
})
export class SignupComponent {
  constructor(private router: Router) {}

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
