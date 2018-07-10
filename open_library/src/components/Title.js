import React, { Component } from 'react';
import RecentChangesTable from './RecentChangesTable'

RecentChangesTable.Title = class Title extends Component {
  render () {
    return (
      <h1>{ this.props.title }</h1>
    );
  }
}

export default RecentChangesTable.Title;
