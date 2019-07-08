import React from 'react'
import styled from 'styled-components'

class Result extends React.Component {

	state = {
		extras: false
	}

	getDetails = () => {
		this.setState({ extras: true })
	}

	displayExtras = () => {
		if (this.state.extras) {
			return (
				<h2>A {this.props.subrace} {this.props.subclass} {this.props.class}!</h2>
			)
		}
	}

	displayResult = () => {
		if (this.props.race) {
			console.log(this.props)
			return (
				<div>
					<h2>Lvl {this.props.lvl} {this.props.race} {this.props.class}!</h2>
					<Button onClick={this.getDetails}>
						How about a sub-race & class?
					</Button>
					<div>
						{this.displayExtras()}
					</div>
				</div>
			)
		} else {
			return <h2>Click the button!</h2>
		}
	}
	render () {
		return (
			<div>{this.displayResult()}</div>
		)
	}
}

export default Result;

const Button = styled.button`
background: seagreen;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid seagreen;
border-radius: 3px;
`
