import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UndefinedInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(map(value => {
            // tslint:disable-next-line: curly
            if (value) return this.traverse(value);
            // tslint:disable-next-line: curly
            else return value;
        }));
    }

    traverse(data: any) {
        // tslint:disable-next-line: forin
        for (const key in data) {
            if (typeof data[key] === 'undefined') {
                data[key] = null;
            }
            if (data[key] !== null && typeof (data[key]) === 'object') {
                this.traverse(data[key]);
            }
        }
        return data;
    }
}
