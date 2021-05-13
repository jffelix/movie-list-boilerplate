import React from 'react';

import Movies from '../data/movies.js';

import MoviesList from './MoviesList.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      typeText: '',
      movieCheck: Movies
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange(event) {

    this.setState({
      [this.state.name]: this.state.typeText
    })

  }

  handleSubmit(event) {
    event.preventDefault();

  }


  render() {

    return(
      <div>
        <form onSumbit={this.handleSubmit}>
          <input name="text" onChange={this.handleChange} />
          <button>Search</button>
        </form>
        <h1>MovieList</h1>
        <MoviesList video={Movies}/>
      </div>

    )

  }



};

export default App;



{/* // const App = (props) => (
//   <div>Hello World!</div>
// ); */}