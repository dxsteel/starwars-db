import Row from "components/Row";
import { Component } from "react";
import { StarshipList } from "components/SWcomponents";
import { StarshipDetails } from "components/SWcomponents";

export default class StarshipsPage extends Component {

state = {
  selectedItem: null
};

onItemSelected = (selectedItem) => {
  this.setState({selectedItem});
};

render(){
  const {selectedItem} = this.state;

  return (
      <Row left={<StarshipList onItemSelected={this.onItemSelected} />}
       right={<StarshipDetails itemId={selectedItem} />} />
  );
}
}