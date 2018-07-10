import React, { Component } from 'react';
import Heading from './Heading'
import RecentChangesTable from './RecentChangesTable'

RecentChangesTable.Headings = class Headings extends Component {
  render () {
    var headings = this.props.headings.map(function(heading, index){
      return (
        <Heading key={ index } heading = { heading } />
      );
    });
    return (
      <thead><tr className='table-th'>{ headings }</tr></thead>
    );
  }
}

export default RecentChangesTable.Headings
