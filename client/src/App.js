import React from 'react';
import axios from 'axios';
import './App.css';


export default class App extends React.Component {

  state = {
    message: ""
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:3000")
    console.log(res)
    const message = res.data.message
    this.setState({
      message
    })
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

