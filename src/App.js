import React from 'react';
import logo from './logo.svg';
import './App.css';

const Racer = ({color, position, name, time}) => {
  return (
    <tr className={color}>
      <th scope="row">{position}</th>
      <td>{name}</td>
      <td className="time">{time}</td>
    </tr>
  )
}

class App extends React.Component {
  state = {
    racers: [],
  }

  componentDidMount(){
    console.log("The component is now mounted!")
    this.interval = setInterval(() =>
      fetch('http://duy-backend.s3-website-ap-southeast-2.amazonaws.com/')
        .then(racers => racers.json())
        .then(racers => this.setState({racers, loading: false}))
    )
  }

  componentDidUpdate(){
    console.log("The component just updated")
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    return (
      <div className="App">
        {this.state.loading
          ? "loading..."
          : <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <table className="table table-sm table-dark text">
            <thead>
              <tr>
                <th scope="col">Position</th>
                <th scope="col">Racer</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
            
            {this.state.racers.map(racer => {
              return (
                <Racer key={racer.position} color={racer.color} position={racer.position} name={racer.name} time={racer.time}/>
              )
            } )}
              </tbody>
            </table>
          </header>
        }
      </div>
    )
  }
}

export default App;
