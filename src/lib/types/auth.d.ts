declare type registerResponse = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  gender: "male" | "female";
  phone: string;
};
declare type loginRespons = {
  token: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
};

declare type ForgotPasswordRespons = {
  email: string;
};
declare type ResetPasswordValues = {
  email: string;
  newPassword: string;
  confirmNewPassword: string;
};
declare type verifyOtpResponse = {
  status: string;
};
