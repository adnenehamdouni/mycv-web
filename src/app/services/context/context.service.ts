import { Injectable } from "@angular/core";

import { AppDetails } from "src/app/model/init/app-details.model";

import { Observable, of } from "rxjs"; // <-- Import Observable

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ContextService {
  private initUrl = "http://localhost:8081/whataboutme-app/init"; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  /** Init Data */
  init(): Observable<AppDetails> {
    const url = `${this.initUrl}`;
    return this.http.get<AppDetails>(url).pipe(
      tap(_ => this.logMessage("from tap -> fetched AppDetails")),
      catchError(this.handleError<AppDetails>(`AppDetails not initialized`))
    );
  }

  /*************************
   *
   *
   *************************/

  /** Log a SkillsService message with the MessageService */
  private logMessage(message: string) {
    console.log("SkillsService: => message : " + message);
  }

  /*************************
   *
   *
   *************************/

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.logMessage(`handleError: ${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
