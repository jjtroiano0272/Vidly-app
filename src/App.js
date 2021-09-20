import React, { Component } from 'react';
import Movies from './components/movies';
import Counters from './components/counters';
import NavBar from './components/navbar';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import Pagination from './components/common/pagination';

// function App() {
//   return (
//     <main className='container'>
//       <h1 className='mt-5'>Content here</h1>
//       {/* <Movies /> */}
//       <Counters />
//     </main>
//   );
// }

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log('App - constructor');
  }

  componentDidMount() {
    // Ajax call
    console.log('App - mounted');
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log('App - rendered');
    return (
      <React.Fragment>
        {/* <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        /> */}
        <main className='container'>
          {/* <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          /> */}

          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
