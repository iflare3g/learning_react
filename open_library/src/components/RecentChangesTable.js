import React, { Component } from 'react';

class RecentChangesTable extends Component {
  render () {
    return (
      <div className="table-responsive">
        <table className="table">
          { this.props.children }
        </table>
      </div>
    );
  }
}

export default RecentChangesTable;
