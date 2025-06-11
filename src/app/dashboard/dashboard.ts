import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen bg-gray-100">
      <div class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex">
              <div class="flex-shrink-0 flex items-center">
                <h1 class="text-xl font-bold text-gray-900">Habit Tracker</h1>
              </div>
            </div>
            <div class="flex items-center">
              <button 
                (click)="signOut()"
                class="ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg p-8 text-center">
            <h2 class="text-2xl font-bold mb-4">Welcome to Your Dashboard</h2>
            <p class="text-gray-600 mb-6">This is a temporary dashboard view.</p>
            <a 
              [routerLink]="['/']" 
              class="text-blue-600 hover:underline"
            >
              Go back to login
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {
  constructor(private router: Router) {}

  signOut() {
    // In a real app, this would call the auth service
    this.router.navigate(['/login']);
  }
}
