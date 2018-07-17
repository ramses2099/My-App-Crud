import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RowTable from './components/RowTable';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    const url = 'http://localhost/WebApi/api/People';
    axios.get(url)
      .then(res => {
        this.setState({ contacts: res.data });
      })
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              CONTACTS LIST
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/create"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Contact</Link></h4>
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.state.contacts.map((c, i) =>(
                   <RowTable key={i} value = {c}/>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
