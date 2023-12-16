interface userType {
  id: string;
  name: string;
  email: string;
}

export interface userSliceStateType {
  user: null | userType;
  error: null | boolean;
}
