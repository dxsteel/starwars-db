import Header from './Header/header';
import RandomPlanet from './RandomPlanet';
import { Component } from 'react';
import ErrorIndicator from './ErrorIndicator';
import SwapiService from 'services/SwapiService';
import { SwapiServiceProvider } from './SwapiServiceContext';
import DummySwapiService from 'services/DummySwapiService';
import { PeoplePage, PlanetsPage, StarshipsPage } from './Pages';


export default class App extends Component {
  state = {
    swapiService: new DummySwapiService(),
    hasError: false,
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service(),
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <div className="stardb-app">
          <Header onServiceChange={this.onServiceChange} />
        <RandomPlanet />
         <PeoplePage/>
         <PlanetsPage/>
        <StarshipsPage/>
        </div>
      </SwapiServiceProvider>
    );
  }
}
