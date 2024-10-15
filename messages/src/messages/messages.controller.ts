import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { log } from 'console';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    log(body);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    log(id);
  }
}
