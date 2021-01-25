import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage: string = '';

  constructor(private router: Router) { }

  public handleError(error: HttpErrorResponse){
    if(error.status === 500){
      return this.handle500Error(error);
    }

    if(error.status === 404){
      return this.handle404Error(error)
    }

    return this.handleOtherError(error);
  }

  private handle500Error(error: HttpErrorResponse){
    this.createErrorMessage(error);
    return this.router.navigate(['/500']);
  }

  private handle404Error(error: HttpErrorResponse){
    this.createErrorMessage(error);
    return this.router.navigate(['/404']);
  }

  private handleOtherError(error: HttpErrorResponse){
    this.createErrorMessage(error);
    //TODO: this will be fixed later;
  }

  private createErrorMessage(error: HttpErrorResponse){
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
