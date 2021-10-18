import React, { Component } from 'react';
import { Redirect, Route, Switch, Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Counters from './components/counters';
import Movies from './components/movies';
import NavBar from './components/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieForm from './components/movieForm';
import NewMovieForm from './components/newMovieForm';
import RegisterForm from './components/registerForm';
import LoginForm from './components/loginForm';
import Logout from './components/logout';
import NotFound from './components/notFound';
import auth from './services/authService';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.css';

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
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  handleReset = () => {
    const counters = counters.map((c) => {
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

    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className='container'>
          <Switch>
            {/* <Route path='/movies/new' component={NewMovieForm} /> */}
            <Route
              path='/movies/:id'
              render={(props) => {
                if (!user) return <Redirect to='/login' />;
                return <MovieForm {...props} />;
              }}
            />
            <Route path='/login' component={LoginForm} />
            <Route path='/logout' component={Logout} />
            <Route
              path='/movies'
              render={(props) => <Movies {...props} user={user} />}
            />
            <Route path='/customers' component={Customers} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found'></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
