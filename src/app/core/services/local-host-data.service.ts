import { Injectable } from '@angular/core';
import { IRegisterCredentials } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class LocalHostDataService {

  constructor() { }

  getCredentials() {
    return new Promise<IRegisterCredentials[]>((resolve, reject) => {
      try {
        const storedJSON = localStorage.getItem('DokanCredentials');
        // convert back to array
        const storedCredentials: IRegisterCredentials[] = storedJSON ? JSON.parse(storedJSON) : [];
        resolve(storedCredentials)
      } catch (e) {
        reject(e)
      }
    })
  }

  setCredentials(updatedCredentials: IRegisterCredentials[]) {
    const newDataJSON = JSON.stringify(updatedCredentials);
    localStorage.setItem('DokanCredentials', newDataJSON);
  }

  setLoginStatusAndCredentials(rememberMeStatus: boolean, email: string | null, password: string | null, loginStatus: boolean) {
    const rememberMeData = {
      status: rememberMeStatus,
      email: email,
      password: password,
      loginStatus: loginStatus
    }
    const newDataJSON = JSON.stringify(rememberMeData);
    localStorage.setItem('DokanLoginData', newDataJSON);
  }
}
