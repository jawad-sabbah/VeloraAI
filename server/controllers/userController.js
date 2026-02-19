import UserService from "../services/user/userService.js";

class UserController{

  static async register(req, res){
    try {
      const user = await UserService.register(req.body);
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: user
      });
      
    } catch (error) {
      console.log(error);
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  static async login(req, res){
    try {
      const user = await UserService.login(req.body.email, req.body.password);
      res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getUserById(req, res){
    try {
      const user = await UserService.getUserById(req.params.id);
      res.status(200).json({
        success: true,
        data: user
      });
    }
    catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  static async updateUser(req, res){
    try {
      const user = await UserService.updateUser(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: user
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  static async deleteUser(req, res){
    try {
      await UserService.deleteUser(req.params.id);
      res.status(200).json({
        success: true,
        message: "User deleted successfully"
      });
    }
    catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  } 


  static async getCurrentUser(req, res){
    try {
      const user = await UserService.getUserById(req.user.id);
      res.status(200).json({
        success: true,
        data: user
      });

    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

}

export default UserController;