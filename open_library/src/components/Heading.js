import React, { Component } from 'react';
import RecentChangesTable from './RecentChangesTable'

RecentChangesTable.Heading = class Heading extends Component {
  render () {
    const headingStyle = {
      backgroundColor: 'FloralWhite',
      fontSize: '19px'
    };

    return (
      <th style={ headingStyle }>{ this.props.heading }</th>
    );
  }
}

export default RecentChangesTable.Heading
