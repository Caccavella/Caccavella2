import React, { Component } from 'react';
import bookshelf from './bookshelf.svg';
// import library from './library_background.jpg';
import './App.css';
import './main';
import bookSearch from './main.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      masterBooks: []
    }
  }
  handleChange(val) {
    this.setState({
      search: val
    })
  }
  handleSearch() {
    console.log(this.state.search);
    bookSearch(this.state.search).then((response) => {
      this.setState({
        masterBooks: response
      })
    })
        
  }


  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h1>Book Library</h1>
          <h4>A project by Anthony Caccavella</h4>
        </div>
        <p><img src={bookshelf} className="App-logo" alt="logo" /></p>

        <h2 className="App-intro">
          Stories at the tips of your fingers.
        </h2>
        <div className="content_wrapper">
          <div>
            <input id="search" onChange={(e) => this.handleChange(e.target.value)} placeholder="Title or Author"></input>
            <button id="button" type="button" onClick={() => this.handleSearch()}>Search</button>
          </div>
        </div>
        <br />
        <div id="results_box">
          { !this.state.masterBooks.length ? null :
            this.state.masterBooks.map((book, i) => (
            <div key={i}>
              <div class="book-image">
              <img src={book.image} alt=""></img>
              </div>
              <div class="book-info">
             Author: {book.author}<br />
             Title: {book.title}<br />
             Published Date: {book.published}<br />
             For More Info: <a href={book.bookInfo} target='_blank'> Click Here! </a> <br />
             <br />
             </div>
            </div>
          ))}
        </div>
        {/* <div id="content">Search here for great books to read! My recommended searches are:
      <div className="list">
            <ul>
              <li>Brent Weeks</li>
              <li>Brandon Sanderson</li>
              <li>Anthony Ryan</li>
              <li>Mark Lawrence</li>
              <li>S J Kincaid</li>
              <li>Not Patrick Rothfuss (he'll never finish book 3!)</li>
              <li>Michael Sullivan</li>
              <li>Jim Butcher</li>
              <li>Robin Hobb</li>
              <li>... and many more!</li>
            </ul>
          </div>
        </div> */}
      </div>
    )
  }
}

export default App;
