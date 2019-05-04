import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotesService {
  private readonly path: string = '../quotes-resources/';

  private readonly files: string[] = ['thanos', 'holt'];

  randomQuotes(file: string, n: any): string[] {
    if (!this.files.some(val => val === file)) {
      return ['file does not exist'];
    }

    const quotes: string = require(this.path + file + '.json');

    const amount: number = Number(n);

    if (amount === quotes.length) {
      return [this.allQuotes(file)];
    }

    const data: string[] = [];
    const quotesCopy: string = quotes.slice();

    if (amount > quotes.length) {
      return [
        'Specified number exceeds number of quotes. Total number of quotes right now are ' +
          String(quotes.length),
      ];
    } else if (amount < 1 || !Number.isInteger(amount)) {
      return ['Cannot enter a value that is less than one or not a number'];
    } else {
      while (data.length < amount) {
        const index: number = Math.floor(Math.random() * quotesCopy.length);
        data.push(quotesCopy[index]);
        quotesCopy.slice(index, 1);
      }
      return data;
    }
  }

  allQuotes(file: string): string {
    if (!this.files.some(val => val === file)) {
      return 'file does not exist';
    }

    const quotes = require(this.path + file + '.json');

    return quotes;
  }

  allFiles(): string[] {
    return this.files;
  }

  addQuote(file, quote): string[] {
    return [];
  }
}
