export class Character {
  public id: number;
  public name: string;
  public rotation_period: string;
  public orbital_period: string;
  public diameter: boolean;
  public climate: string;
  public gravity: string;
  public terrain: boolean;
  public surface_water: string;
  public population: string;
  public residents: string;
  public films: object;
  public created: string;
  public edited: string;
  public url: string;
  constructor(
    id: number,
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: boolean,
    climate: string,
    gravity: string,
    terrain: boolean,
    surface_water: string,
    population: string,
    residents: string,
    films: object,
    created: string,
    edited: string,
    url: string
  ) {
    this.id = id;
    this.name = name;
    this.rotation_period= rotation_period;
    this.orbital_period= orbital_period;
    this.diameter= diameter;
    this.climate= climate;
    this.gravity= gravity;
    this.terrain= terrain;
    this.surface_water= surface_water;
    this.population= population;
    this.residents= residents;
    this.films= films;
    this.created= created;
    this.edited= edited;
    this.url= url;
  }
}