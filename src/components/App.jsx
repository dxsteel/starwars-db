import Header from "./Header/header";
import RandomPlanet from "./RandomPlanet";
import ItemList from "./ItemList";
import PersonDetails from "./PersonDetails";



export const App = () => {
  return (
    <div>
    <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};
