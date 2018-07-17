
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class RenderRow extends Component {
   
    render() {
        return (
            <tr>
                <td><Link to={`/show/${this.props.value.Id}`}>{this.props.value.Id}</Link></td>
                <td>{this.props.value.FirstName}</td>
                <td>{this.props.value.LastName}</td>
                <td>{this.props.value.Phone}</td>
                <td>{this.props.value.Email}</td>
            </tr>
        );

    }
}

export default RenderRow;