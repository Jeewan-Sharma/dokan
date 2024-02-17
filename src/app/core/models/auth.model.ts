export interface IRegisterCredentials {
  firstName: string,
  lastName: string,
  email: string,
  phone: number,
  password: string
}

export interface ILoginCredentials {
  email: string,
  password: string
}

export interface IRememberMeData {
  status: boolean,
  firstName: string | null,
  lastName: string | null,
  email: string | null,
  phone: number | null,
  password: string | null,
  loginStatus: boolean
}

export interface IMessage {
  image: string,
  title: string,
  description: string,
}
