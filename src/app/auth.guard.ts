import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './Services/auth.service'; 
import { inject } from '@angular/core';
 

export const authGuard: CanActivateFn = (route, state) => {
  const authService =inject (AuthService)
const router=inject(Router)
console.log( localStorage.getItem("authSecretKey"))
  if ( localStorage.getItem("authSecretKey")!=null) {
    return true;
  } else {
    // Redirect to the login page if the user is not authenticated
    router.navigateByUrl('/login');
    return false;
  }
};


