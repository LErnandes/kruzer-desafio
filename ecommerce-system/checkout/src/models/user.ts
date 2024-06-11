import { model, Schema } from "mongoose";
import { IUser, UserType } from "../interfaces/IUser";

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: Object.values(UserType),
    required: true,
  },
});

const User = model<IUser>("User", UserSchema);
export default User;
