export default class SwapiService {

  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this.transformPerson).slice(0, 5);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this.transformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this.transformPlanet).slice(0, 5);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this.transformPlanet(planet);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this.transformStarship).slice(0, 5);
  }

  getStarship = async (id) => {
    const starship = this.getResource(`/starships/${id}/`);
    return this.transformStarship(starship);
  }

  getPersonImage = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };

  getStarshipImage = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };

  getPlanetImage = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

  extractId = (item) => {
  const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  transformPlanet = (planet) => {
    return {
        id: this.extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
    }
  }

  transformStarship = (starship) => {
    return {
      id: this.extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCopacity: starship.cargoCopacity
    }
  }

  transformPerson = (person) => {
    return {
      id: this.extractId(person),
      name: person.name,
      gender: person.gender,
      birth_year: person.birth_year,
      eye_color: person.eye_color,
      mass: person.mass,
      height: person.height,
      skin_color: person.skin_color
    }
  }
}
