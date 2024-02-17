import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LocalHostDataService } from '@core/services';


export const authGuard: CanActivateFn = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const _localHostDataService = inject(LocalHostDataService);
  const _router = inject(Router)

  const loginCredential = await _localHostDataService.getLoginStatusAndCredential()
  if (loginCredential.loginStatus == true) {
    return true;
  } else {
    _router.navigate(['auth/login']);
    return false
  }

};
