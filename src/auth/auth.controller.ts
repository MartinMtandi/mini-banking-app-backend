import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  create(@Body() createAuthDto: CreateAuthDto): Promise<User> {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  login(
    @Body() loginDto: LoginDto,
  ): Promise<{ user: User; access_token: string }> {
    return this.authService.login(loginDto);
  }

  @Get()
  findAll(): string {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAuthDto: UpdateAuthDto,
  ): string {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.authService.remove(+id);
  }
}
