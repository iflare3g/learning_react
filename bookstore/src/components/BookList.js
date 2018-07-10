import React, { Component } from 'react';

class BookList extends Component{
  constructor(){
    super()
    this.state = {
      books: [
        { id: 1, name: 'Zero to One', author: 'Peter Thiel' },
        { id: 2, name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
        { id: 3, name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
      ],
        selectedBooks: [],
        error: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectedBooks = this.handleSelectedBooks.bind(this);
    this._renderError = this._renderError.bind(this);
  }

  _renderBook(book){
    return (
      <div className="checkbox" key={ book.id }>
        <label>
          <input type="checkbox"
                 value={ book.name }
                 onChange={ this.handleSelectedBooks }
          />
          { book.name } -- { book.author }
        </label>
      </div>
    );
  }

  _renderError(){
    if(this.state.error){
      return (
        <div className="alert alert-danger">
          { this.state.error }
        </div>
      );
    }
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.selectedBooks.length === 0){
      this.setState({ error: 'Please choose at least one book to continue'});
    } else {
      this.setState({ error: false });
      this.props.updateFormData({ selectedBooks: this.state.selectedBooks });
    }
  }

  handleSelectedBooks(event){
    const selectedBooks = this.state.selectedBooks;
    const index = selectedBooks.indexOf(event.target.value);

    if(event.target.checked){
      if(index === -1){
        selectedBooks.push(event.target.value);
      } else {
        selectedBooks.splice(index, 1);
      }
    }

    this.setState({ selectedBooks: selectedBooks });
  }

  render(){
    const errorMessage = this._renderError();

    return (
      <div>
        <h3> Choose from wide variety of books available in our store. </h3>
        { errorMessage }
        <form onSubmit={ this.handleSubmit }>
          { this.state.books.map((book) => {
              return this._renderBook(book);
            })
          }

          <input type="submit" className="btn btn-success" value="Choose" />
        </form>
      </div>
    );
  }
}

export default BookList;
