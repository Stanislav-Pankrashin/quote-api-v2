import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from '../dto/create-quote.dto';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get(':file')
  sendFile(@Param('file') file: string): string {
    try {
      return this.quotesService.allQuotes(file);
    } catch (error) {
      return 'an error has occured';
    }
  }

  @Get('/all')
  sendAll(): string[] {
    try {
      return this.quotesService.allFiles();
    } catch (error) {
      return ['an error has occured'];
    }
  }

  @Get(':file/:num')
  sendQuote(@Param('file') file: string, @Param('num') num: string): string[] {
    try {
      // tslint:disable-next-line:radix
      return this.quotesService.randomQuotes(file, parseInt(num));
    } catch (error) {
      return ['an error has occured'];
    }
  }

  @Post()
  postQuote(@Body() createQuoteDto: CreateQuoteDto): string {
    const name = createQuoteDto.file;
    const quote = createQuoteDto.quote;

    return '-1';
  }
}
