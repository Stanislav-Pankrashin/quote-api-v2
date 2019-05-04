import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuotesController } from './quotes/quotes.controller';
import { QuotesService } from './quotes/quotes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-54-225-116-36.compute-1.amazonaws.com',
      port: 5432,
      username: 'zyveiopfrmmkia',
      password:
        '910309eda5a22084f64126b0872f25bef7f3d34bf5066003c297fc0a887cf1c7',
      database: 'ddkop3bh9cc4nl',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, QuotesController],
  providers: [AppService, QuotesService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
