import { CanActivateFn } from '@angular/router';

export const fetchGuard: CanActivateFn = (route, state) => {
  return true;
};
