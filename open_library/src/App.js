import React, { Component } from 'react';
import Headings from './components/Headings'
import Rows from './components/Rows'
import Title from './components/Title'
import RecentChangesTable from './components/RecentChangesTable'
import PropTypes from 'prop-types'
import $ from 'jquery'
import { Date } from 'prismic-reactjs'

class App extends Component {
  constructor(){
    super();
    this.state = {
      changeSets: [],
      headings: ['Updated At', 'Author', 'Change']
    };
  }

  mapOpenLibraryDataToChangeSet(data){
    return data.map(function(change, index){
      return {
        "when": Date(change.timestamp),
        "who": change.author.key.slice(8,),
        "description": change.comment
      }
    });
  }

  componentDidMount(){
    $.ajax({
      url: 'http://openlibrary.org/recentchanges.json?limit=10',
      context: this,
      dataType: 'jsonp',
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      type: 'GET'
    }).done(function(data){
      const changeSets = this.mapOpenLibraryDataToChangeSet(data);
      this.setState({ changeSets: changeSets });
    });
  }

  render() {
    return (
      <div>
        <Title title="Recent changes" />
          <RecentChangesTable>
              <RecentChangesTable.Headings headings= {this.props.headings} />
              <RecentChangesTable.Rows changeSets={ this.state.changeSets }/>
          </ RecentChangesTable>
      </div>
    );
  }
}

App.propTypes = {
  headings: function(props, propName, componentName){
    if(propName !== "headings"){
      return Error('Failed Validation');
    }
  },
  changeSets: PropTypes.array,
}

App.defaultProps = {
    headings: ['When happened', 'Who did it', 'What they change']
}

RecentChangesTable.Rows = Rows
RecentChangesTable.Headings = Headings

export default App;
