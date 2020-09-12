export interface Authentication {
  userid: string;
  password: string;
}

export class Auth {
  validateUser: boolean;
  passwordReset: boolean;
  forgotPswd: boolean;
  resetPassword: boolean;
  passworDisclaimer: boolean;
  message: string;
  responseCode: string;
  response: string;
  username: string;
  password: string;
  usernamePswdReset: boolean;
}

export interface UserData {
  authToken: string;
  canchangepassword: string;
  expiration: string;
  fullName: string;
  message: string;
  permissions: any;
  requirepasswordchangeonlogin: string;
  responseCode: string;
  roles: any;
  username: string;
}

export interface Token {
  scope: string;
  token_type: string;
  access_token: string;
}

export class ForgotPasswordModel {
  email: string;
  name: string;
  password: string;
  cpassword: string;
  company: string;
  phone: number;
}
