import React, { Component } from 'react';

class Success extends Component {
  render(){
    let numOfDays = "1 to 2 ";

    if(this.props.data.deliveryOption === "Normal"){
      numOfDays = "3 to 4 ";
    }

    return (
      <div>
        <h2>Thank you for shopping with us { this.props.data.fullName } .</h2>
        <h4>
          You will soon get { this.props.data.selectedBooks.join(", ")}
          at { this.props.data.shippingAddress } in approrximately { numOfDays }
          days.
        </h4>
      </div>
    );
  }
}

export default Success;
