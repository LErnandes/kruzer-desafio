export enum UserType {
  Buyer = "buyer",
  Seller = "seller",
  Admin = "admin",
}

export interface IUser {
    name: string;
    email: string;
    type: UserType;
}
