export interface RemainderType {
  date: string;
  category: string;
  subject: string;
  status: string;
  description: string;
  email: string;
  recurring: number;
  sms: string;
  contact_number: string;
  _id: string;
}

export interface RemainderSliceStateType {
  remainders: null | RemainderType[];
  error: null | boolean;
}
