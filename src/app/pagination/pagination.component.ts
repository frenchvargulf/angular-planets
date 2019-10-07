import { Component, OnInit } from '@angular/core';

import { Planet } from '../planet';

import { PlanetService } from '../planet.service';
import { PlanetsAPIService } from '../planets-api.service'

import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  length = 61;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  planets: Planet[];
  pageIndex = 1;
  dataAPI = [];
  allPlanets = [];


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
  // page = 1;
  // pageSize = 5;
  // // selectedPlanet: Planet;
  url= ['https://swapi.co/api/planets/?page=1', 'https://swapi.co/api/planets/?page=2', 'https://swapi.co/api/planets/?page=3', 'https://swapi.co/api/planets/?page=4', 'https://swapi.co/api/planets/?page=5', 'https://swapi.co/api/planets/?page=6', 'https://swapi.co/api/planets/?page=7'];
 
  // pageCount = Math.ceil(61/this.pageSize);
  // collectionSize= 61;
  // dataAPI = [];
  // allPlanets = [];

  // length = 61;
  // // pageSize = 10;
  // pageSizeOptions: number[] = [5, 10, 25, 100];
  
  // allPlanets = [];
  // dataAPI = [];

//   //   page = 1;
// //   pageSize = 10;
// selectedPlanet: Planet;
// url= ['https://swapi.co/api/planets/?page=1', 'https://swapi.co/api/planets/?page=2', 'https://swapi.co/api/planets/?page=3', 'https://swapi.co/api/planets/?page=4', 'https://swapi.co/api/planets/?page=5', 'https://swapi.co/api/planets/?page=6', 'https://swapi.co/api/planets/?page=7']
// planets: Planet[];
//   pageCount = Math.ceil(61/this.pageSize);
//   collectionSize= 61;

//   // MatPaginator Output
  // pageEvent: PageEvent;

  
  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str); 
  // }



  // pages =  Math.ceil(Number(61/this.pageSize))
  
  // onSelect(value): void {
  //   this.pageSize = value;
  //   this.pageCount = Math.ceil(Number(61/this.pageSize))
  //   this.collectionSize = 61*2;
  // }

  constructor(private planetService : PlanetService, private apiService : PlanetsAPIService  ) { }

  getPlanets(): void {
    this.planetService.getPlanets()
      .subscribe(planets => this.planets = planets);
  }

  getPlanets1(url): void {
  //   // let all: Array<object>;

  //   // console.log(this.alldata)
  //   // let data = [];
  this.apiService.getPlanets(url)
    .subscribe( planets => {
      console.log(this.dataAPI)
      this.dataAPI.push(planets)

      if(this.dataAPI.length==7){
        this.dataAPI.map( (page) => {
          page.results.map( (result) => {
            this.allPlanets.push(result)
          }) 
        })
        console.log(this.allPlanets)
      }

      if(this.allPlanets.length == 61){
        return this.planets = this.allPlanets;
      }
  
   
    
      // this.planets = planets.results;
    })
  }



  // //   // this.apiService.getPlanets(url)
  // //   //   .subscribe(planets => {
  // //   //     // console.log(url)
  // //   //     // @ts-ignore
  // //   //     data.push(planets)
  // //   //     this.planets = planets;
  // //   //     // // this.dataAPI.push(...planets)
  // //   //     // console.log(this.dataAPI) 
  // //   //   })
  // //   //   this.planets = data;
  // //   // this.url.map( (url) => {
  // //   //   this.apiService.getPlanets(url)
  // //   //     .subscribe( planets => {
  // //   //       // console.log(planets);
  // //   //       // all.push(planets)
  // //   //       // console.log(all)
  // //   //       // this.planets = planets;
  // //   //     })
  // //   // })
  // //   // this.alldata.push(data)
  // //   // // this.planets = data;
  // //   // let data: Array<object>;
  // //   // data = [];

  // //   this.apiService.getPlanets()
  // //     .subscribe( planets => {
  // //       // planets.map( ( planet) => {
  // //       //   this.planets.push(planet);
  // //       // })
  // //       this.planets = planets;
   
  // //       console.log(planets)
  // //     })
  // //     // console.log(data)
  
  // }

  ngOnInit() {
    // this.url.map( (url) => {
    //   this.getPlanets1(url)
    // })
    // // this.getPlanets1()
    this.getPlanets();



    this.url.map( (url) => {
      this.getPlanets1(url)
    })



  }

}

