import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Book extends Component {
	render()  {
		return(
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.book.cover }}></div>
					<div className="book-shelf-changer">
						<select value={this.props.book.shelve}>
							<option value="none" disabled>Move to...</option>
							{this.props.shelves.map((shelve) => (
								<option value={shelve.id}>{shelve.name}</option>
							))}
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{this.props.book.title}</div>
				<div className="book-authors">{this.props.book.author}</div>
			</div>
		)
	}
}

export default Book