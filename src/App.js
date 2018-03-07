import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';
import './App.css';


const cities = [
    'Santiago,scl',
    'Buenos Aires,ar',
    'Bogota,col',
    'Ciudad de México,mx',
    'Madrid,es',
    'Rio de Janeiro,br',
    'London,uk'
];

class App extends Component {
handlerSelectionLocation = city => {
  console.log('handlerSelectionLocation')
}

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <LocationList cities={cities}
          onSelectedLocation={this.handlerSelectionLocation}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
