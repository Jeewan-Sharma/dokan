import { Injectable } from '@angular/core';
import { ILoginCredentials, IRegisterCredentials } from '@core/models';
import { LocalHostDataService } from '@core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _localHostDataService: LocalHostDataService
  ) { }

  login(enteredCredentials: ILoginCredentials): Promise<IRegisterCredentials> {
    return new Promise(async (resolve, reject) => {
      try {
        const StoredCredentials = await this._localHostDataService.getCredentials()
        const matchedCredential = StoredCredentials.find(credential => {
          return credential.email === enteredCredentials.email && credential.password === enteredCredentials.password;
        });
        if (matchedCredential) {
          setTimeout(() => {
            resolve(matchedCredential);
          }, 3000);
        } else {
          reject(new Error("Credentials not found")); // Reject the promise with an error if no match is found
        }
      } catch (e) {
        reject(e);
      }
    })
  }

  register(credentials: IRegisterCredentials): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const storedCredentials = await this._localHostDataService.getCredentials()
        const isMatch = storedCredentials.some((storedCredential) => storedCredential.email === credentials.email);
        if (!isMatch) {
          storedCredentials.push(credentials);
          this._localHostDataService.setCredentials(storedCredentials)
          setTimeout(() => {
            resolve(true);
          }, 3000);
        } else {
          setTimeout(() => {
            resolve(false)
          }, 3000);
        }
      } catch (e) {
        reject(e);
      }
    })
  }


}
