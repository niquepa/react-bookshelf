import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component {
	render()  {
		return(
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{this.props.shelves.map((shelve) => (
							<div className="bookshelf">
								<h2 className="bookshelf-title">{shelve.name}</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{this.props.books.filter((book) => shelve.id === book.shelve).map((book) => (
											<Book book={book} shelves={this.props.shelves} />
										))}
									</ol>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="open-search">
					<Link to="/search" >Add a book</Link>
				</div>
			</div>
		)
	}
}

export default ListBooks
