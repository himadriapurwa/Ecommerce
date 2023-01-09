import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/createUser')
  async create(@Body() createUserDto: User) {
    const response = await this.usersService.create(createUserDto);
    return response;
  }

  @Get('/findAllUsers')
  async findAll() {
    const response = await this.usersService.findAll();
    return response;
  }
  @Get('/findById/:id')
  async findOne(@Param() id: number) {
    const response = await this.usersService.findOne(id);
    return response;
  }

  @Put('/updateUser/:id')
  async update(@Param() id: number, @Body() updateUserDto: User) {
    const response = await this.usersService.update(id, updateUserDto);
    return response;
  }

  @Delete('/deleteUser/:id')
  async delete(@Param() id: number) {
    const response = await this.usersService.remove(id);
    return response;
  }
}
