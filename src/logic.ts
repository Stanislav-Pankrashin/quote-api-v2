const path: string = './quotes/';

const files: string[] = ['thanos', 'holt'];

const randomQuotes = (file: string, n: any) => {
  if (!files.some(val => val === file)) {
    return {
      error: 'file does not exist',
    };
  }

  const quotes: string = require(path + file + '.json');

  const amount: number = Number(n);

  if (amount === quotes.length) {
    return allQuotes(file);
  }

  const data: string[] = [];
  const quotesCopy: string = quotes.slice();

  if (amount > quotes.length) {
    return {
      error:
        'Specified number exceeds number of quotes. Total number of quotes right now are ' +
        String(quotes.length),
    };
  } else if (amount < 1 || !Number.isInteger(amount)) {
    return {
      error: 'Cannot enter a value that is less than one or not a number',
    };
  } else {
    while (data.length < amount) {
      const index: number = Math.floor(Math.random() * quotesCopy.length);
      data.push(quotesCopy[index]);
      quotesCopy.splice(index, 1);
    }
    return data;
  }
};

const allQuotes = (file: string) => {
  if (!files.some(val => val === file)) {
    return {
      error: 'file does not exist',
    };
  }

  const quotes = require(path + file + '.json');

  return quotes;
};

const allFiles = () => {
  return files;
};
