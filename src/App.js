import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
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
  constructor() {
    super();
    this.state = {
      city: null
    }
  }

handlerSelectionLocation = city => {
  this.setState({city})
  console.log(`handlerSelectionLocation ${city}`)
}

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <AppBar title='weather'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
            <LocationList cities={cities}
          onSelectedLocation={this.handlerSelectionLocation}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="details">
                {city === null ? <h1>No se seleciono ciudad</h1> : <ForecastExtended city={this.state.city}></ForecastExtended>}
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>

      /*
      <MuiThemeProvider>
        <div className="App">
        </div>
      </MuiThemeProvider>
      */
    );
  }
}

export default App;
