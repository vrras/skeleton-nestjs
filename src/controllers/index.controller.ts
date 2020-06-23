import { Controller, Get } from '@nestjs/common';
import { response } from '../helpers/response.helper';
import { currentDate } from '../helpers/date.helper';

@Controller()
export class IndexController {
    @Get()
    index() {
        return { status: 'MestJs Server', uptime: process.uptime() };
    }

    @Get('currentTime')
    async currentTime() {
        return response('Current Time', currentDate().toISOString());
    }
}
