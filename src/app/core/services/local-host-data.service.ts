import { Injectable } from '@angular/core';
import { IRegisterCredentials, IRememberMeData, IShipping } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class LocalHostDataService {

  constructor() { }

  getCredentials() {
    return new Promise<IRegisterCredentials[]>((resolve, reject) => {
      try {
        const storedJSON = localStorage.getItem('DokanCredentials');
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

  setLoginStatusAndCredentials(
    rememberMeStatus: boolean,
    firstName: string | null,
    lastName: string | null,
    email: string | null,
    phone: number | null,
    password: string | null,
    loginStatus: boolean
  ) {
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
        const storedLoginData: IRememberMeData = storedJSON ? JSON.parse(storedJSON) : { status: false, firstName: null, lastName: null, email: null, phone: null, password: null, loginStatus: false };
        resolve(storedLoginData)
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

  getShippingInfo() {
    return new Promise<IShipping[]>((resolve, reject) => {
      try {
        const storedJSON = localStorage.getItem('DokanShippingInfo');
        const storedShippingInfo: IShipping[] = storedJSON ? JSON.parse(storedJSON) : [];
        resolve(storedShippingInfo)
      } catch (e) {
        reject(e)
      }
    })
  }

  addShippingInfo(shippingInfo: IShipping): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        let storedShippingInfo: IShipping[] = await this.getShippingInfo()
        storedShippingInfo.push(shippingInfo);
        const newDataJSON = JSON.stringify(storedShippingInfo);
        localStorage.setItem('DokanShippingInfo', newDataJSON);
        resolve(true)
      }
      catch (e) {
        throw (e)
      }
    })
  }

  deleteShippingInfo(selectedInfo: IShipping): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      try {
        let storedShippingInfo: IShipping[] = await this.getShippingInfo();
        let index = storedShippingInfo.findIndex(info =>
          info.address === selectedInfo.address &&
          info.firstName === selectedInfo.firstName &&
          info.lastName === selectedInfo.lastName &&
          info.locationType === selectedInfo.locationType &&
          info.phone === selectedInfo.phone &&
          info.postalCode === selectedInfo.postalCode
        );
        if (index !== -1) {
          storedShippingInfo.splice(index, 1);
        }
        console.log(storedShippingInfo)
        const newDataJSON = JSON.stringify(storedShippingInfo);
        localStorage.setItem('DokanShippingInfo', newDataJSON);
        resolve(true)
      } catch (e) {
        reject(false)
      }
    })
  }

}
