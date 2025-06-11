import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-center text-blue-600 mb-8">Daily Habit Tracker</h1>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class App {
  title = 'daily-habit-tracker';
}
