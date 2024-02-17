import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { LocalHostDataService } from '@core/services';


export const preventAuthGuard: CanActivateFn = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const _localHostDataService = inject(LocalHostDataService);
  const _router = inject(Router)
  const loginCredential = await _localHostDataService.getLoginStatusAndCredential()
  if (loginCredential.loginStatus == false) {
    return true;
  } else {
    _router.navigate(['/home']);
    return false
  }
};
