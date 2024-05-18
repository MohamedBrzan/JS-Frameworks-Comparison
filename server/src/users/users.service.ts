import { Injectable, Res } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, UserSchema } from "../schemas/users.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Response } from "express";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(@Res() res: Response, createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create({ ...createUserDto });
    return res.json(newUser);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
