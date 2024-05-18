import {
	HttpException,
	HttpStatus,
	Injectable,
	Param,
	Query,
	Res,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from '../schemas/users.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Response } from 'express';

type ReturnType = Promise<
	UserDocument &
		User & {
			_id: Types.ObjectId;
		}
>;

@Injectable()
export class UsersService {
	constructor(@InjectModel(User.name) private userModel: Model<User>) {}

	async create(
		@Res() res: Response,
		createUserDto: CreateUserDto,
	): Promise<Response<User, Record<string, User>>> {
		const { email } = createUserDto;
		let user = await this.userModel.findOne({ email });
		if (user) throw new HttpException('Duplication Email', HttpStatus.CONFLICT);
		return res.json(await this.userModel.create({ ...createUserDto }));
	}

	async findAll(): Promise<User[]> {
		return await this.userModel.find();
	}

	async findOne(@Param() id: string): ReturnType {
		const user = await this.userModel.findById(id);
		if (user) {
			return user;
		}
		throw new HttpException('user not exist', HttpStatus.NOT_FOUND);
	}

	async update(@Param() id: string, updateUserDto: UpdateUserDto): ReturnType {
		try {
			return await this.userModel.findByIdAndUpdate(
				id,
				{ ...updateUserDto },
				{ new: true, runValidators: true, upsert: true },
			);
		} catch (err) {
			throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	async remove(@Param() id: string): ReturnType {
		try {
			return await this.userModel.findByIdAndDelete(id);
		} catch (err) {
			throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
