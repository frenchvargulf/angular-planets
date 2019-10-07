import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { HttpClient } from "@angular/common/http";
import { Observable, zip } from "rxjs";
import { map, mergeMap, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PlanetsAPIService {
  url= 'https://swapi.co/api/planets/?page=1';
  searchUlr= `https://swapi.co/api/planets`;
  planets: Array<any>;
  isLoaded = false;
  data: [];
  searchResult: Array<any>

  constructor(private http: HttpClient) { }

  // getAllPlanets() {
  //   console.log("duupa")
  //   console.log(this.url)
  //   let data = [];

  //     return this.http.get<string>(this.url).pipe(
  //       map(res => {
  //         console.log(res)
  //       })
  //     )


  //   // this.url.map( (url) => {
  //   //   this.http.get<any>(url).pipe(
  //   //     map(res => {
  //   //      console.log(res);
  //   //     }),
      
  //   //   )
  
  //   // })
    
  // }
      /* GET heroes whose name contains search term */
      searchPlanets(term: string): Observable<Planet[]> {
        if (!term.trim()) {
          // if not search term, return empty hero array.
          return null;
        }
        console.log(term)
        return this.http.get<Planet[]>(`${this.searchUlr}/?search=${term}`).pipe(
          // tap(_ => this.log(`found heroes matching "${term}"`)),
          // catchError(this.handleError<Hero[]>('searchHeroes', []))
          map(res => {
            // @ts-ignore
            //   this.searchResult = res.results;
            //  // @ts-ignore
            //   this.isLoaded = !this.isLoaded;
              return res.results;
          }),
        
        );
      }


    searchOnePlanet(term: string){
      console.log(term)
      return this.http.get<Planet[]>(`${this.searchUlr}/?search=${term}`).pipe(
        // tap(_ => this.log(`found heroes matching "${term}"`)),
        // catchError(this.handleError<Hero[]>('searchHeroes', []))
        map(res => {
          // @ts-ignore
          //   this.searchResult = res.results;
          //  // @ts-ignore
          //   this.isLoaded = !this.isLoaded;
            return res.results;
        }),
      
      );
    }


  getPlanets(url): Observable<Planet[]> {
  //   let data;
  //   console.log('afaf')
  //   // this.url.map( (url) => {
  //   //   console.log(url)
  //     return this.http.get<any>(this.url[0]).pipe(
  //       map(res => {
  //         console.log(res);
  //         return res.results;
  //         // data.push(res.results)
  //         // return res.results
  //       })
  //     )
  //   // })


  // return data;
  // this.url.map( (url) => {
    
    return this.http.get<any>(url).pipe(
      map(res => {
        this.planets = res;
        return res;
      }),
    
    )

    

    
  // })

}


  


}
