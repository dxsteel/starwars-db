import Row from "components/Row";
import { Component } from "react";
import { PersonList } from "components/SWcomponents";
import { PersonDetails } from "components/SWcomponents";

export default class PeoplePage extends Component {

state = {
  selectedItem: null
};

onItemSelected = (selectedItem) => {
  this.setState({selectedItem});
};

render(){
  const {selectedItem} = this.state;

  return (
    <Row left={<PersonList onItemSelected={this.onItemSelected} />}
     right={<PersonDetails itemId={selectedItem} />} />
  );
}
}