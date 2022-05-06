All HttpClient methods return an RxJS Observable of something.

In general, an observable can return multiple values over time. An observable from HttpClient always emits a single value and then completes, never to emit again.


l'équivalent de fetch("GET", URL) pour angular est:
    this.http.get(url)
    
 on peut ensuite remplacer get par `put` etc. 
 
 
 Angular a aussi son propre catchError
  ```javascript

     import { catchError, map, tap } from 'rxjs/operators';
     getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
          catchError(this.handleError<Hero[]>('getHeroes', []))
        );
    }
 ```
    
 handleError est créé à la main séparément: 
 ```javascript
           /**
           * Handle Http operation that failed.
           * Let the app continue.
           *
           * @param operation - name of the operation that failed
           * @param result - optional value to return as the observable result
           */
          private handleError<T>(operation = 'operation', result?: T) {
            return (error: any): Observable<T> => {

          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead

          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);

          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
   ```
