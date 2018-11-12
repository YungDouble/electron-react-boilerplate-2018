import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button, Image, Label, Well, ListGroup } from 'react-bootstrap';
import { remote } from "electron";

class App extends Component {
  render() {
    return 
      <div>
      <p>This is a test</p>
      </div>
     }
}

ReactDOM.render(
  <App/>,
  document.getElementById('react-div')
);
