import UserModel from "../../model/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/jwt.js";


class UserService{
 
  static async register(data){
    if (!data.email || !data.password || !data.full_name) {
      throw new Error("Email, password, and full name are required");
    }
    const existingUser = await UserModel.findByEmail(data.email);
    if (existingUser) {
      throw new Error("Email already in use");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
  
    return await UserModel.create({
      email: data.email,
      password: hashedPassword,
      full_name: data.full_name
    });
  }

  static async login(email, password){
    const user = await UserModel.findByEmail(email);
    if (!user) {
      throw new Error("Invalid email or password");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }
    const token = generateToken({ id: user.id, email: user.email });
    return { ...user, token };
  }

  static async getUserById(id){
    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  static async updateUser(id, data){
    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    const hashedPassword = data.password ? await bcrypt.hash(data.password, 10) : user.password;
    return await UserModel.update(id, {
      email: data.email || user.email,
      password: hashedPassword,
      full_name: data.full_name || user.full_name
    });
  }

  static async deleteUser(id){
    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    await UserModel.softDelete(id);
  }

}

export default UserService;