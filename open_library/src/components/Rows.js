import React, { Component } from 'react';
import Row from './Row'
import RecentChangesTable from './RecentChangesTable'

RecentChangesTable.Rows = class Rows extends Component {
  render () {
    var rows = this.props.changeSets.map(function(changeSet, index){
      return (
        <Row key={ index } changeSet = { changeSet } />
      );
    });
    return (
      <tbody>{ rows }</tbody>
    );
  }
}

export default RecentChangesTable.Rows;
