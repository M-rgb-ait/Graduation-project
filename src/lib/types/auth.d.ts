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
    id: string;
    username: string;
    email: string;
    phone: string | null;
    firstName: string;
    lastName: string;
    gender: string;
    emailVerified: boolean;
    phoneVerified: boolean;
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
