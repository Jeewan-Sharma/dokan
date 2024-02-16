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


export interface IMessage {
  image: string,
  title: string,
  description: string,
}
