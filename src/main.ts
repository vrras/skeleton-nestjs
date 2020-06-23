import { Config } from './helpers/config.helper';
import { ValidationPipe } from './pipes/validation.pipe';
import { ApplicationContext } from './app.context';
import * as bodyParser from 'body-parser';
import * as fileUpload from 'express-fileupload';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { UndefinedInterceptor } from './interceptors/undefined.interceptor';

async function bootstrap() {
  const app = await ApplicationContext();
  app.enableCors();
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalInterceptors(new UndefinedInterceptor());
  app.use(fileUpload({ limits: { fileSize: 50 * 1024 * 1024 }, useTempFiles: true, createParentPath: true }));
  await app.listen(Config.getNumber('APP_PORT'));
}
bootstrap();
