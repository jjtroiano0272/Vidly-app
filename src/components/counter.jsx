import React, { Component } from 'react';

class Counter extends Component {
  // Functions in JS ARE OBJECTS
  // constructor() {
  // 	super();
  // 	this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // state includes data local/private to that component

  styles = {
    fontSize: 14,
    fontWeight: 'bold',
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('previous props: ', prevProps);
    console.log('previous state: ', prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call & get new data from server
    }
  }

  componentWillUnmount() {
    console.log('Counter - UNmounted.');
  }

  getBadgeClasses() {
    let classes = 'badge align-center m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  onDelete() {}

  renderTags() {
    if (this.state.tags.length === 0) return <p>'N'il ya pas des tagues!'</p>;

    return (
      <ul style={{ listStyleType: 'none' }}>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log('Counter - rendered');

    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-1 mx-auto'>
            {/* TODO: Counter (variable size) */}
            <span style={this.styles} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>
          <div className='col'>
            {/* TODO: Buttons to right (static) */}
            <button
              //   onClick={() => this.props.onIncrement(this.props.counter)}
              onClick={() => this.props.onIncrement(this.props.counter)}
              className='btn btn-secondary btn-sm'
            >
              +
            </button>
            {/* TODO: Decrement button */}
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className='btn btn-secondary btn-sm m-2'
              disabled={this.props.counter.value === 0 ? 'disabled' : ''}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className='btn btn-danger btn-sm m-2'
            >
              Delete
            </button>
            {/* A 'truthy' expression: if the first n operands are true, the final one is evaulated.
                         Strings in JS are truthy as well as numbers > 0. */}
            {/* {this.state.tags.length === 0 && 'Please create a new tag.'}
            {this.renderTags()} */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
