import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

export class BaseService {

    protected httpOptions = {
        headers: new HttpHeaders(
            {
                'Content-Type': 'application/json'
            }
        )
    };

    constructor(protected httpClient: HttpClient) { }

    protected handleError(err: any) {
        let errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = `Un error ha ocurrido: ${err.error.message}`;
        } else {
            errorMessage = err;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
