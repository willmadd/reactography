import React, { Component } from "react";
import "./App.css";
import Events from "./components/Events";
import APIKEY from "./config/config";
import axios from 'axios';
import Calendar from 'react-calendar'
import Mapper from './components/Mapper'

class App extends Component {

state ={
  events:[]
}
  
  render() {
    return (
      <div className="App">
        <Calendar />
        <Mapper />

        <Events events = {this.state.events}/>
      </div>
    );
  }
  
  componentDidMount(){
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?city=Manchester&countryCode=GB&apikey=${APIKEY}`)
    .then(({data}) => {
      console.log(data._embedded.events);
      this.setState({
        events: data._embedded.events
      })
    });
  }

}

export default App;
