import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.setData = this.setData.bind(this)
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  setData(value) {
    value = JSON.parse(value)
    this.setState({
      data: value
    })
  }

  render() {
    //Sort results
    const data = this.state.data.sort(function(a, b){
      const valA = parseInt(a["id"]);
      const valB = parseInt(b["id"]);

      if(valA < valB) return -1;
      if(valA > valB) return 1;
      return 0;
    });
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Form setData={this.setData} />
          </div>
          <div>
            <LineChart width={600} height={300} data={data}>
              <Line type="monotone" dataKey="score" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="id" />
              <YAxis type="number" domain={[0, 1]}/>
              <Tooltip />
            </LineChart>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
