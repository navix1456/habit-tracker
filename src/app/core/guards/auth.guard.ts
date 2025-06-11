import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Temporarily disable auth guard for testing
  console.log('Auth guard: allowing access');
  return true;
};
