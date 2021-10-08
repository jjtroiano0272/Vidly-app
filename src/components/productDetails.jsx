import React, { Component } from 'react';

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.replace('/products');
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id} </h1>
        <button onClick={this.handleSave} className='btn btn-primary'>
          Save
        </button>
      </div>
    );
  }
}

export default ProductDetails;
