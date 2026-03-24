import { Request } from "express";
import User from "./models/userModel";

declare interface ProtectedRequest extends Request {
  user?: User;
}
