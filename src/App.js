/**
 * Tom Bielawski
 * Lambda School WEB 45
 * 3.2.5 Advanced State Management Sprint Challenge 
 * 8/13/2021
 */

//imports
import React, { Component } from "react";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import {connect } from "react-redux";
import { fetchSmurf } from "./actions/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component 
{
  componentDidMount() { this.props.fetchSmurf(); }

  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

export default connect (null, {fetchSmurf})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.