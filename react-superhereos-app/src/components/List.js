import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class List extends Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const fn = item =>
      <ListItem
        key={item.id}
        onDelete={this.props.onDelete}
        item={item} />;

      let listItems = this.props.listItems;

      if (listItems.length > 0){
        listItems = listItems.map(fn)
      } else {
        listItems = <li> Lista vuota. <br /> Aggiungi un nuovo supereroe </li>;
      }

      return (
        <ul>
          {listItems}
        </ul>
      )
  }
}

export default List;
