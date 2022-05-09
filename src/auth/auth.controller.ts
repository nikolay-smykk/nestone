import { Controller, HttpCode, Post, Get, Body } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  async register(@Body() dto: AuthDto) {
    return dto;
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {
    return 'Hello World!' + dto;
  }
}
