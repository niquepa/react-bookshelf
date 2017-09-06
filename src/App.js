import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";


class BooksApp extends React.Component {
	
	
	state = {
		shelves:  [
			{id: "currentlyReading", name: "Currently Reading"},
			{id: "wantToRead", name: "Want to Read"},
			{id: "read", name: "Read"}
		],
		books: ''
	}
	
	componentDidMount(){
		BooksAPI.getAll().then((books) => {
			this.setState({ books: books})
		})
	}
	
	updateBookShelve = (item, shelve) =>  {
		
		BooksAPI.update(item, shelve).then(() => {
			item.shelf = shelve
			this.setState(prevState => ({
				books: prevState.books.filter((book) => book.id !== item.id).concat(item)
			}))
		})
		
	}
	
  render() {
    return (
      <div className="app">
	      <Route path="/search" render={() => (
	      	<SearchBooks myBooks={this.state.books} shelves={this.state.shelves} updateBookShelve={this.updateBookShelve}/>
	      )} />
				<Route exact path="/" render={() => (
					<ListBooks myBooks={this.state.books} shelves={this.state.shelves} updateBookShelve={this.updateBookShelve} />
				)} />
      </div>
    )
  }
}

export default BooksApp
