import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { log } from 'console';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessages(@Body() body: any) {
    log(body);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    log(id);
  }
}
