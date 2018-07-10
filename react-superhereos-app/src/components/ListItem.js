import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
  }
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onDelete(this.props.item.id);
  }

  render() {
    const item = this.props.item
    return (
      <li><span>{item.name}</span>
        <button onClick={this.handleClick}> X </button>
      </li>
    );
  }
}

export default ListItem
