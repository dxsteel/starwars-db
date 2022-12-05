import Header from "./Header/header";
import RandomPlanet from "./RandomPlanet";
import { Component } from "react";
import ErrorIndicator from "./ErrorIndicator";
import SwapiService from "services/SwapiService";
import ItemDetails, {Record} from "./ItemDetails";
import { SwapiServiceProvider } from "./SwapiServiceContext";
import DummySwapiService from "services/DummySwapiService";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from './SWcomponents';



export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService(),
    hasError: false
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {

      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      };
    });
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

    componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {

     if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

      const { getPerson,
        getStarship,
        getPersonImage,
        getStarshipImage } = this.state.swapiService;
  
  const personDetails = (
  <ItemDetails
    itemId={11}
    getData={getPerson}
    getImageUrl={getPersonImage} >
  
    <Record field="gender" label="Gender" />
    <Record field="eyeColor" label="Eye Color" />
  
  </ItemDetails>
  );
  
  const starshipDetails = (
  <ItemDetails
    itemId={5}
    getData={getStarship}
    getImageUrl={getStarshipImage}>
  
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="Cost" />
  </ItemDetails>
  );

    return (
      <SwapiServiceProvider value={this.state.swapiService} >
      <div className="stardb-app">
        <Header onServiceChange={this.onServiceChange} />
        { planet }
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Random Planet
        </button>   
        <PersonDetails itemId={11} />

<PlanetDetails itemId={5} />

<StarshipDetails itemId={9} />

<PersonList />

<StarshipList />

<PlanetList />

      </div>
      </SwapiServiceProvider>
    );
  }
}