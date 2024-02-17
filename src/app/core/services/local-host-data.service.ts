import { Injectable } from '@angular/core';
import { IRegisterCredentials, IRememberMeData } from '@core/models';

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

  setLoginStatusAndCredentials(rememberMeStatus: boolean, firstName: string | null, lastName: string | null, email: string | null, phone: number | null, password: string | null, loginStatus: boolean) {
    const rememberMeData: IRememberMeData = {
      firstName: firstName,
      lastName: lastName,
      status: rememberMeStatus,
      email: email,
      phone: phone,
      password: password,
      loginStatus: loginStatus
    }
    const newDataJSON = JSON.stringify(rememberMeData);
    localStorage.setItem('DokanLoginData', newDataJSON);
  }

  getLoginStatusAndCredential() {
    return new Promise<IRememberMeData>(async (resolve, reject) => {
      try {
        const storedJSON = localStorage.getItem('DokanLoginData');
        if (storedJSON) {
          const storedLoginData: IRememberMeData = JSON.parse(storedJSON);
          resolve(storedLoginData)
        }
      } catch (e) {
        throw e
      }
    }
    )
  }

  setLogoutStatus() {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const storedJSON = localStorage.getItem('DokanLoginData');
        if (storedJSON) {
          const storedLoginData: IRememberMeData = JSON.parse(storedJSON);
          storedLoginData.loginStatus = false
          await this.setLoginStatusAndCredentials(storedLoginData.status, storedLoginData.firstName, storedLoginData.lastName, storedLoginData.email, storedLoginData.phone, storedLoginData.password, storedLoginData.loginStatus)
          resolve(true)
        }
      } catch (e) {
        reject(false)
        throw e
      }
    })
  }
}
