import React from 'react'
import styled from 'styled-components'

class Options extends React.Component {
	render () {
		return (
			<LeftDiv>
				<Button onClick={this.props.getResult}>
					Give me a race and class!
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
