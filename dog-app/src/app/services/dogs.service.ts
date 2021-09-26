import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  baseUrl = "https://api.thedogapi.com/v1/breeds";

  constructor(
    private snackBarr: MatSnackBar,
    private http: HttpClient
  ) { }

  alertModal(msg: string): void {
    this.snackBarr.open(msg, 'fechar', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    })
  }

  getDogs(): Observable<any[]> {
    console.log("passei");
    return this.http.get<any[]>(this.baseUrl);
  }

  getDogsByBreed(breed: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + `search?q=${breed}`);
  }

}
