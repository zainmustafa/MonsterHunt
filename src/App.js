import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";

class App extends Component {
  state = { img: "" };
  componentDidMount() {
    firebase.database().ref("/current").on('value',child =>{
      this.setState({
        img : child.val().url
      })
    })
    
  }
  render() {
    return (
      this.state.img ? 
      <div className="App">
        <img className="app-img" src={this.state.img} alt="Barcode"  />
      </div>:
      <div></div> 
    );
  }
}

export default App;
