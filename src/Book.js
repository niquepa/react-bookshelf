import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Book extends Component {
	
	render()  {
		const { book, shelves } = this.props
		
		return(
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.cover }}></div>
						<div className="book-shelf-changer">
							<select value={book.shelve} onChange={ event => this.props.updateBookShelve(book, event.target.value)}>
								<option value="none" disabled>Move to...</option>
								{shelves.map((shelve) => (
									<option value={shelve.id}>{shelve.name}</option>
								))}
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.author}</div>
				</div>
			</li>
		)
	}
}

export default Book