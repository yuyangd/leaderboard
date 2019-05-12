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
  static defaultProps = {
    racers: [
      {"name": "Mark", "time": "00:12.020"},
      {"name": "Jacob", "time": "00:12.020"},
      {"name": "Larry", "time": "00:12.020"},
      {"name": "Ayer", "time": "00:12.020"},
      {"name": "Jon", "time": "00:12.020"},
    ]
  }
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
      <div>
        {this.state.loading
          ? "loading..."
          : <div>
            
            {this.state.racers.map(racer => {
              return (
                <div>
                  <h4>{racer.name}</h4>
                  <p>{racer.time}</p>
                </div>
              )
            } )}
          </div>
        }
      </div>
    )
  }
}
// const App = ({racers}) => {
//   return (
//     <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <table className="table table-sm table-dark text">
//         <thead>
//           <tr>
//             <th scope="col">Position</th>
//             <th scope="col">Racer</th>
//             <th scope="col">Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           <Racer color="bg-gold" position={1} name={racers[0].name} time={racers[0].time}/>
//           <Racer color="bg-silver" position={2} name={racers[1].name} time={racers[1].time}/>
//           <Racer color="bg-copper" position={3} name={racers[2].name} time={racers[2].time}/>
//         </tbody>

//         <tbody>
//           <Racer position={4} name={racers[3].name} time={racers[3].time}/>
//           <Racer position={5} name={racers[4].name} time={racers[4].time}/>
//         </tbody>
//       </table>
//     </header>
//   </div>
//   )
// }

export default App;
