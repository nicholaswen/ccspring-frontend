import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    var object = {};
    data.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);
    fetch('http://18.207.220.162:5000/sentiment', {
    //fetch('http://127.0.0.1:5000/sentiment', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
    }).then(response => {
      response.json().then(data => {
        this.props.setData(JSON.stringify(data['documents']))
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="keyword">Keyword: </label>
          <input id="keyword" name="keyword" type="text" required/>
        </div>

        <div>
          <label htmlFor="Count">Count: </label>
          <input id="count" name="count" type="text" required/>
        </div>
        <button>Send request</button>
      </form>
    );
  }
}

export default Form;