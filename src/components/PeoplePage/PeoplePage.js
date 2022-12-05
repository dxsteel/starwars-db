import React, { Component } from 'react';
import SwapiService from 'services/SwapiService';
import ItemList from 'components/ItemList';
import ItemDetails from 'components/ItemDetails';
import ErrorIndicator from 'components/ErrorIndicator';
import Row from 'components/Row';

import './PeoplePage.css';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch(error, info) {

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    );

    const personDetails = (
      <ItemDetails itemId={this.state.selectedPerson} />
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}