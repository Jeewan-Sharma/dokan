import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ASSETS } from '@core/consts';
import { ILoginCredentials, IMessage, IRegisterCredentials } from '@core/models';
import { AuthService, DeviceWidthService, LoaderService, LocalHostDataService } from '@core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  readonly ASSETS = ASSETS;

  loginForm!: FormGroup;
  isPasswordVisible: boolean = false;
  isCredentialFalse: boolean = false;
  showErrorResponse: boolean = false;
  message!: IMessage;

  formInvalidMessage: IMessage = {
    image: "https://s3.us-east-2.amazonaws.com/cloudimagehost/order-failed.png",
    title: 'Form Invalid!',
    description: 'Please check all the required fields of the form',
  };

  loginFailedMessage: IMessage = {
    image: "https://s3.us-east-2.amazonaws.com/cloudimagehost/order-failed.png",
    title: 'Invalid Credentials!',
    description: 'Please check the credentials and try again.',
  };


  constructor(
    private _router: Router,
    protected _deviceWidthService: DeviceWidthService,
    private _loaderService: LoaderService,
    private _authService: AuthService,
    private _localHostDataService: LocalHostDataService,
  ) { }

  async ngOnInit() {
    await this.initForm()
    this.patchRememberMe()
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
      password: new FormControl<string | null>(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
      rememberMe: new FormControl<boolean | null>(true),
    });
  }

  async submit() {
    try {
      if (this.loginForm.invalid) {
        this.loginForm.markAllAsTouched();
        this.message = this.formInvalidMessage
        this.openDialog()
        return;
      }

      this._loaderService.showLoader()
      const credentialState: ILoginCredentials = {
        email: this.loginForm.controls['email'].value,
        password: this.loginForm.controls['password'].value,
      };

      const rememberMe = this.loginForm.controls['rememberMe'].value;
      const res: IRegisterCredentials = await this._authService.login(credentialState)
      if (res) {
        if (rememberMe) {
          this._localHostDataService.setLoginStatusAndCredentials(rememberMe, res.firstName, res.lastName, credentialState.email, res.phone, credentialState.password, true)
        } else {
          this._localHostDataService.setLoginStatusAndCredentials(rememberMe, null, null, null, null, null, true)
        }
        this.navigateToHome()
      }
    } catch (e) {
      this.message = this.loginFailedMessage
      this.openDialog()
    } finally {
      this._loaderService.hideLoader()
    }
  }

  navigateToRegister() {
    this._router.navigate(['auth/register']);
  }

  openDialog() {
    this.showErrorResponse = true
  }

  closeDialog() {
    this.showErrorResponse = false;
  }

  navigateToHome() {
    this._router.navigate(['/'])
  }

  patchRememberMe() {
    const storedJSON = localStorage.getItem('DokanLoginData');
    if (storedJSON) {
      const storedRememberMeData = JSON.parse(storedJSON)
      if (storedRememberMeData.status) {
        this.loginForm.controls['email'].patchValue(storedRememberMeData.email)
        this.loginForm.controls['password'].patchValue(storedRememberMeData.password)
      }
    }
  }

}
