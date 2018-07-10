import React, { Component } from 'react';
import BookList from './components/BookList';
import ShippingDetails from './components/ShippingDetails';
import DeliveryDetails from './components/DeliveryDetails';
import NotFound from './components/NotFound';
import Confirmation from './components/Confirmation';
import Success from './components/Success';

class BookStore extends Component {
  constructor(){
    super();
    this.state = { currentStep: 1, formValues: {}, cartTimeout: 60 * 15 };
    this.updateFormData = this.updateFormData.bind(this);
  }

  updateFormData(formData){
    const formValues = Object.assign({}, this.state.formValues, formData);
    const nextStep = this.state.currentStep + 1
    this.setState({ formValues: formValues, currentStep: nextStep });
  }

  updateCartTimeout(timeout){
    this.setState({ cartTimeout: timeout });
  }

  render() {
    switch(this.state.currentStep){
      case 1:
        return <BookList updateFormData={ this.updateFormData } />;
      case 2:
        return <ShippingDetails updateFormData={ this.updateFormData } />;
      case 3:
        return <DeliveryDetails updateFormData={ this.updateFormData } />;
      case 4:
        return <Confirmation data={ this.state.formValues } updateFormData={ this.updateFormData }/>;
      case 5:
        return <Success data={ this.state.formValues} />;
      default:
        return <NotFound />;
    }
  }
}

export default BookStore;
