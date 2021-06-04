import { Injectable } from '@angular/core';

import { Skills } from '../model/skills.model';

import { Observable, of } from 'rxjs'; // <-- Import Observable

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { SkillsResponse } from '../core/responses/skills-response.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsUrl = 'http://localhost:8087/mycv-app/api/skills'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  /*************************
   *
   *
   *************************/

  /** POST: add a new Skills to the server */
  addHero(skills: Skills): Observable<Skills> {
    return this.http
      .post<Skills>(this.skillsUrl, skills, this.httpOptions)
      .pipe(
        tap((newSkills: Skills) =>
          this.logMessage(`from tap -> added Skills w/ id=${newSkills.id}`)
        ),
        catchError(this.handleError<Skills>('addSkills'))
      );
  }

  /** PUT: update the Skills on the server */
  updateSkills(skills: Skills): Observable<any> {
    return this.http.put(this.skillsUrl, skills, this.httpOptions).pipe(
      tap((_) => this.logMessage(`from tap -> updated Skills id=${skills.id}`)),
      catchError(this.handleError<any>('updateSkills'))
    );
  }

  /** DELETE: delete the Skills from the server */
  deleteSkills(skills: Skills | number): Observable<Skills> {
    const id = typeof skills === 'number' ? skills : skills.id;
    const url = `${this.skillsUrl}/${id}`;

    return this.http.delete<Skills>(url, this.httpOptions).pipe(
      tap((_) => this.logMessage(`from tap -> deleted Skills id=${id}`)),
      catchError(this.handleError<Skills>('deleteSkills'))
    );
  }

  /** GET Skills by id. Will 404 if id not found */
  getSkills(id: number): Observable<Skills> {
    const url = `${this.skillsUrl}/${id}`;
    return this.http.get<Skills>(url).pipe(
      tap((_) => this.logMessage(`from tap -> fetched Skills id=${id}`)),
      catchError(this.handleError<Skills>(`getSkills id=${id}`))
    );
  }

  /** GET heroes from the server */
  getSkillss(): Observable<SkillsResponse> {
    return this.http.get<SkillsResponse>(this.skillsUrl).pipe(
      tap((_) => this.logMessage('from tap -> fetched Skillss')),
      catchError(this.handleError<SkillsResponse>('getSkillss'))
    );
  }

  /* GET Skillss whose name contains search term */
  searchSkillss(term: string): Observable<Skills[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Skills[]>(`${this.skillsUrl}/?name=${term}`).pipe(
      tap((_) =>
        this.logMessage(`from tap -> found Skillss matching "${term}"`)
      ),
      catchError(this.handleError<Skills[]>('searchSkillss', []))
    );
  }

  /*************************
   *
   *
   *************************/

  /** Log a SkillsService message with the MessageService */
  private logMessage(message: string) {
    console.log('SkillsService: => message : ' + message);
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
  private handleError<T>(operation = 'operation', result?: T) {
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
