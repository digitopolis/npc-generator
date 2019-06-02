import React from 'react'
import Options from '../components/Options'
import Result from '../components/Result'
import { RACES, CLASSES } from '../apiEndpoints'

class Generator extends React.Component {

	state = {
		races: [],
		classes: [],
		result: null
	}

	async componentDidMount() {
		const racesResponse = await fetch(RACES).then(res => res.json())
		const classesResponse = await fetch(CLASSES).then(res => res.json())

		const races = racesResponse.results
		const classes = classesResponse.results

		this.setState({ races, classes })
	}

	generateResult = () => {
		const result = {}
		result.race = this.state.races[(Math.floor(Math.random() * this.state.races.length))].name
		result.class = this.state.classes[(Math.floor(Math.random() * this.state.classes.length))].name
		result.lvl = Math.floor(Math.random() * 20) + 1
		this.setState({ result })
	}

	render () {
		return (
			<div className='container'>
				<Options getResult={this.generateResult}/>
				<Result {...this.state.result}/>
			</div>
		)
	}
}

export default Generator;
