import { Component, OnInit, OnDestroy} from '@angular/core';
import { Character } from '../character.model';
import { APIService } from '../StarwarsCharacter.service';
import { PlanetsService } from '../mock.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-cont',
  templateUrl: './menu-cont.component.html',
  styleUrls: ['./menu-cont.component.scss']
})

export class MenuContComponent implements OnInit {
  characters$: Observable<Character[]>;
  items= this.characters$;
  number = 10;
  pageOfItems = Math.ceil(61/this.number);
  pageIfItems = [1,2,3,4,5,6,7];
  planets: Array<any>;
  mock: boolean;


  constructor(private apiService: APIService, private planetsService: PlanetsService) {}

  show(number): void {
    this.number = number;
    this.pageOfItems = Math.ceil(61/this.number);
    this.pageIfItems = Array.from( Array(this.pageOfItems).keys() ).map(x => ++x);
    this.characters$ = this.apiService.show(number);
    if (this.mock){
      this.getPage(1)
    }
  }

  getPage(number): void {
    if (this.number != 5) {
      this.planetsService.get().subscribe(res => {
        //@ts-ignore
        this.fighters = res[Number(number)-1].results;
      });
    }

    if (this.number === 5) {
      this.planetsService.get().subscribe(res => {
        if (number == 1) {
             //@ts-ignore
          this.fighters = [res[number-1].results[0],res[number-1].results[1],res[number-1].results[2],res[number-1].results[3],res[number-1].results[4] ] ;
        }
        if ( number == 2) {
             //@ts-ignore
          this.fighters = [res[number-2].results[5],res[number-2].results[6],res[number-2].results[7],res[number-2].results[8],res[number-2].results[9] ] ;
        }
        if ( number%2==0 && number != 2){
             //@ts-ignore
          this.fighters = [res[Math.floor(number/2)-1].results[5],res[Math.floor(number/2)-1].results[6],res[Math.floor(number/2)-1].results[7],res[Math.floor(number/2)-1].results[8],res[Math.floor(number/2)-1].results[9] ];
        } else if (number%2 != 0 && number != 1) {
             //@ts-ignore
          this.fighters = [res[Math.floor(number/2)].results[0],res[Math.floor(number/2)].results[1],res[Math.floor(number/2)].results[2],res[Math.floor(number/2)].results[3],res[Math.floor(number/2)-1].results[4] ];
        }
      });
    }

    this.characters$ = this.apiService.getPage(number), () => {
      this.mock = !this.mock;
    };
  }

  getNextPage(): void {
    this.mock = !this.mock;
    this.characters$ = this.apiService.getNextPlanets();
  }

  // getPrevPage(): void {
  //   this.characters$ = this.characterService.getPrevCharacters();
  // }

  search(name): void {
    if (this.mock) {
      this.planetsService.get().subscribe(res => {
        console.log(res)
        res.map( (page) => {
          // @ts-ignore
          page.results.map( (planet) => {
            if (name === planet.name ) {
              console.log(planet)
              // @ts-ignore
              this.fighters = [planet];
            }
          })
        })
      });     
    }
   this.characters$ = this.apiService.getSearchedPlanets(`https://swapi.co/api/planets/?search=${name}`);
  }

  ngOnInit(): void {
    this.planetsService.get().subscribe(res => {
      //@ts-ignore
      this.fighters = res[0].results;
    });
    this.getNextPage();
  }


}
