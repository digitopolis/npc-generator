import React from 'react'
import Options from '../components/Options'
import Result from '../components/Result'
// import { RACES, CLASSES } from '../apiEndpoints'
import { DATA } from '../data'

class Generator extends React.Component {

	state = {
		races: DATA.races,
		classes: DATA.classes,
		result: null
	}

	// async componentDidMount() {
	// 	const racesResponse = await fetch(RACES).then(res => res.json())
	// 	const classesResponse = await fetch(CLASSES).then(res => res.json())
	//
	// 	const races = racesResponse.results
	// 	const classes = classesResponse.results
	//
	// 	this.setState({ races, classes })
	// }

	generateResult = () => {
		const result = {}
		const randomRace = this.state.races[(Math.floor(Math.random() * this.state.races.length))]
		console.log(randomRace);
		result.race = randomRace.name
		result.subrace = randomRace.subraces[(Math.floor(Math.random() * randomRace.subraces.length))].name
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
