import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'

class Book extends Component {
	
	state = {
		shelf: ''
	}
	
	componentDidMount() {
		let myShelf
		
		if (this.props.book.shelf)  {
			myShelf = this.props.book.shelf
		}
		else  {
			let myBook = this.props.myBooks.filter((book) => book.id === this.props.book.id)
			myShelf = myBook.length > 0 ? myBook[0].shelf : ''
		}
		
		this.setState({ shelf: myShelf})
	}
	
	render()  {
		const { book, shelves } = this.props
		const { shelf } = this.state
		
		return(
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
						<div className="book-shelf-changer">
							<select value={shelf} onChange={ event => this.props.updateBookShelve(book, event.target.value)}>
								<option value="none" disabled>Move to...</option>
								{shelves.map((shelve) => (
									<option value={shelve.id}>{shelve.name}</option>
								))}
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.authors}</div>
				</div>
			</li>
		)
	}
}

export default Book