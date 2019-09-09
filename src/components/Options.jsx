import React from 'react'
import styled from 'styled-components'

class Options extends React.Component {

	handleChange = (event) => {
		this.props.selectOption(event.target.name, event.target.value)
	}

	render () {
		return (
			<LeftDiv>
				Race: <select name='race' onChange={this.handleChange}>
					<option value="" disabled selected>Select a race</option>
					{this.props.races.map(race => {
						return <option key={race.name} value={race.name}>{race.name}</option>
					})}
				</select>
				<Button onClick={this.props.getResult}>
					Generate!
				</Button>
			</LeftDiv>
		)
	}
}

export default Options;

const LeftDiv = styled.div`
	width: 200px;
	margin: auto;
`

const Button = styled.button`
background: seagreen;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid seagreen;
border-radius: 3px;
`
