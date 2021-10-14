import React, { Component } from 'react';
import { Redirect, Route, Switch, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Counters from './components/counters';
import Movies from './components/movies';
import NavBar from './components/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import NewMovieForm from './components/newMovieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import 'react-toastify/dist/ReactToastify.css';

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
      // <React.Fragment>
      //   {/* To render counters app */}
      //   <NavBar
      //     totalCounters={this.state.counters.filter((c) => c.value > 0).length}
      //   />
      //   <main className='container'>
      //     <Counters
      //       counters={this.state.counters}
      //       onReset={this.handleReset}
      //       onIncrement={this.handleIncrement}
      //       onDecrement={this.handleDecrement}
      //       onDelete={this.handleDelete}
      //     />

      //     <Movies />
      //   </main>
      // </React.Fragment>

      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className='container'>
          <Switch>
            <Route path='/movies/new' component={NewMovieForm}></Route>
            <Route path='/movies/:id' component={MovieForm}></Route>
            <Route path='/login' component={LoginForm}></Route>
            <Route path='/movies' component={Movies}></Route>
            <Route path='/customers' component={Customers}></Route>
            <Route path='/rentals' component={Rentals}></Route>
            <Route path='/register' component={RegisterForm}></Route>
            <Route path='/not-found' component={NotFound}></Route>
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found'></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
