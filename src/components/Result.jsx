import React from 'react'

class Result extends React.Component {

	displayResult = () => {
		if (this.props.race) {
			return `${this.props.race} ${this.props.class}!`
		} else {
			return 'Click the button!'
		}
	}
	render () {
		return (
			<h2>{this.displayResult()}</h2>
		)
	}
}

export default Result;
