import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { PLANETS } from './mock-planets.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlanetService {
  allPlanets = [];
  search: Array<any>;
  
  

  constructor() { }

  // getPlanets(): Planet[] {
  //   return PLANETS;
  // }

  getPlanets(): Observable<Planet[]> {
    this.allPlanets = [];
    PLANETS.map( page => {
      // @ts-ignore
      page.results.map( (planet) => {
        this.allPlanets.push(planet)
      })
    } )

    // console.log(PLANETS[0].results[0])
    // this.messageService.add('PlanetService: fetched heroes');
    return of(this.allPlanets);
  }

  getPlanets1(name): Observable<Planet[]> {
    this.allPlanets = [];
    PLANETS.map( page => {
      // @ts-ignore
      page.results.map( (planet) => {
        if( name === planet.name){
        this.allPlanets.push(planet)
        }
      })
    } )

    // console.log(PLANETS[0].results[0])
    // this.messageService.add('PlanetService: fetched heroes');
    console.log(this.allPlanets)
    return of(this.allPlanets);
  }

  // searchPlanets(term: string): Observable<Planet[]> {
  //   let result; 
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return null;
  //   }

  //   console.log(this.allPlanets) 

  //   this.allPlanets.map( planet => {
  //     if(planet.name === term){
  //       console.log(planet)
  //       this.search = planet;
  //       return planet;
  //     }
  //   })
  //   // return this.http.get<Planet[]>(`${this.searchUlr}/?search=${term}`).pipe(
  //   //   // tap(_ => this.log(`found heroes matching "${term}"`)),
  //   //   // catchError(this.handleError<Hero[]>('searchHeroes', []))
  //   //   map(res => {
  //   //       console.log(res.results)
  //   //       this.searchResult = res.results;
  //   //       return res.results;
  //   //   }),
    
  //   // );
  //   console.log(result);
  // }

  // getPlanet(name): Observable<Planet[]> {
  //   // this.allPlanets = [];
  //   // PLANETS.map( page => {
  //   //   // @ts-ignore
  //   //   page.results.map( (planet) => {
  //   //     this.allPlanets.push(planet)
  //   //   })
  //   // } )
  //   console.log(name)

   
  //   console.log(PLANETS)

  //   PLANETS.map( page => {
  //     console.log(page)

  //     if(page.results.name ===name){
  //       console.log(page.results)
  //       return page
  //     }

   
  //      // @ts-ignore
  //     // page.results.map( (planet) => {
       
  //     //   if(planet.name == name){
  //     //     console.log(Array.isArray(Array.from(planet)))
  //     //     // this.allPlanets = planet;
  //     //     this.search = Array.from(planet);
          
  //     //     arr =  Array.from(planet);
  //     //     return  Array.from(planet);
  //     //   }
  //     // })
  //   } )

   

      

  // }



  // getPlanet(name: string): Observable<Planet[]> {
  //   // TODO: send the message _after_ fetching the hero
  //   let array = [];
  //   // this.messageService.add(`PlanetService: fetched planet name=${name}`);
  //   // return of(PLANETS.find(planet => {
  //   //   console.log(planet.results)
  //   //   this.allPlanets.map( (planet) => {
  //   //     if(planet.name === name){
  //   //       this.search = planet;
  //   //       array.push(planet)
  //   //     }
  //   //   })

  //   //   return this.search;

  //   // }))


 

  // }



}
