import React, { Component } from 'react';

class ShippingDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      fullName: '',
      contactNumber: '',
      shippingAddress: '',
      error: false
    }

    this._handleSubmit = this._handleSubmit.bind(this);
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

  _validateInput(){
    if(this.state.fullName === ''){
      this.setState({ error: "Please enter full name"});
    } else if(this.state.contactNumber === ''){
      this.setState({ error: "Please enter contact number"});
    } else if(this.state.shippingAddress === ''){
      this.setState({ error: "Please enter shipping address"});
    } else {
      this.setState({ error: false });
      return true;
    }
  }

  _handleSubmit(event){
    event.preventDefault();

    let formData = {
      fullName: this.state.fullName,
      contactNumber: this.state.contactNumber,
      shippingAddress: this.state.shippingAddress,
    }

    if(this._validateInput()){
      this.props.updateFormData(formData);
    }
  }

  handleChange(event, attribute){
    let newState = this.state;
    newState[attribute] = event.target.value
    this.setState(newState);
    console.log(this.state);
  }

  render(){
    let errorMessage = this._renderError();
    return (
      <div>
        <h1> Enter your shipping information. </h1>
        { errorMessage }
        <div style={{ width: 200 }}>
          <form onSubmit={ this._handleSubmit }>
            <div className="form-group">
              <input className="form-control"
                     type="text"
                     placeholder="Full Name"
                     value={ this.state.fullName }
                     onChange={ (event) => this.handleChange(event, 'fullName') } />
            </div>
            <div className="form-group">
              <input className="form-control"
                     type="text"
                     placeholder="Contact Number"
                     value={ this.state.contactNumber }
                     onChange={ (event) => this.handleChange(event, 'contactNumber') } />
            </div>
            <div className="form-group">
              <input className="form-control"
                     type="text"
                     placeholder="Shipping Address"
                     value={ this.state.shippingAddress }
                     onChange={ (event) => this.handleChange(event, 'shippingAddress') } />
            </div>
            <div className="form-group">
              <button type="submit"
                      ref="submit"
                      className="btn btn-success">
                  Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ShippingDetails;
