import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
import * as BooksAPI from './utils/BooksAPI'
import Book from './Book'

class SearchBooks extends Component{
	
	state = {
		query: '',
		books: ''
	}
	
	updateQuery = (query) => {
		this.setState({ query: query.trim() })
		BooksAPI.search(query,20).then((books) => {
			this.setState({ books: books})
		})
	}
	
	render()  {
		
		const { myBooks, shelves } = this.props
		const { query, books } = this.state
		
		return(
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{books ? (
							books.map((book) => (
								<Book key={book.id} book={book} shelves={shelves} myBooks={myBooks} updateBookShelve={this.props.updateBookShelve}
								/>
							))
						) : (
							''
						)}
					</ol>
				</div>
			</div>
		)
	}
}
 export default SearchBooks