import React, { Component } from 'react';
import logo from './logo.svg';
import Axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      saludo: 'aloha'
    }
  }
  componentDidMount() {
    Axios.get('https://replit-node-deploy--ralexrdz.repl.co/')
      .then(data => {
        setTimeout(() => {
          this.setState({
            saludo: data.data
          })
        }, 3000)
      })
  }
  saveUser () {
    Axios.post('https://replit-node-deploy--ralexrdz.repl.co/users', {
      name: document.getElementById('user-name').value
    }).then(response => {
      console.log(response)
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>Hola 12345</h1>
        <h2>{this.state.saludo}</h2>
        <section>
          <input id="user-name" type="text" placeholder="name"/>
          <button onClick={this.saveUser}>Guarda Usuario</button>
        </section>
      </div>
    );
  }
}

export default App;
