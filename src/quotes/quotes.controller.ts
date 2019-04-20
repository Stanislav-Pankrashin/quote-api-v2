import { Controller, Get, Param } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get(':file/:num')
  sendQuote(@Param() params): string[] {
    // tslint:disable-next-line: radix
    const num = parseInt(params.num);

    const file = params.file;

    try {
      return this.quotesService.randomQuotes(file, num);
    } catch (error) {
      return ['an error has occured'];
    }
  }
}
