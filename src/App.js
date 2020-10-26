import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import MovieDetail from './pages/MovieDetail';
import MoviesContainer from './pages/MoviesContainer';
import UserMovies from './pages/UserMovies';
import Login from './pages/Login';
import Register from './pages/Register';
import SearchResults from './pages/SearchResults';

import { UserContextProvider } from './context/UserContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <UserContextProvider>
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path='/' exact component={MoviesContainer} />
            <Route path='/movie/:id' component={MovieDetail} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/user_movies' component={UserMovies} />
            <Route path='/search_results/:query?' component={SearchResults} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    </UserContextProvider>
  );
}

export default App;
