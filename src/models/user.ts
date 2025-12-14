import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export enum Role {
  USER = 1,
  ADMIN = 2,
}

export interface IUser extends Document {
  email: string;
  password: string;
  role: Role;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: Number,
      enum: [Role.USER, Role.ADMIN],
      required: true,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export default mongoose.model<IUser>("User", UserSchema);
