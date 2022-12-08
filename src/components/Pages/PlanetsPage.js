import Row from "components/Row";
import { Component } from "react";
import { PlanetList } from "components/SWcomponents";
import { PlanetDetails } from "components/SWcomponents";

export default class PlanetsPage extends Component {

state = {
  selectedItem: null
};

onItemSelected = (selectedItem) => {
  this.setState({selectedItem});
};

render(){
  const {selectedItem} = this.state;

  return (
     <Row left={<PlanetList onItemSelected={this.onItemSelected}/>}
      right={<PlanetDetails itemId={selectedItem} />} />
  );
}
}