import React, { Component } from 'react';
import RecentChangesTable from './RecentChangesTable';
import Ago from 'react-ago-component';

RecentChangesTable.Row = class Row extends Component {
  render () {
    const rowStyle = {
      backgroundColor: 'aliceblue'
    };

    return (
      <tr style={ rowStyle }>
        <td><Ago time={ this.props.changeSet.when } /></td>
        <td>{ this.props.changeSet.who }</td>
        <td>{ this.props.changeSet.description }</td>
      </tr>
    );
  }
}

export default RecentChangesTable.Row;
