import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { S3 } from 'aws-sdk';

const s3 = new S3();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
