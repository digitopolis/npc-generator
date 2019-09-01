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
		const randomClass = this.state.classes[(Math.floor(Math.random() * this.state.classes.length))]
		console.log(randomRace, randomClass);
		result.race = randomRace.name
		result.subrace = randomRace.subraces[(Math.floor(Math.random() * randomRace.subraces.length))].name
		result.class = randomClass.name
		result.subclass = randomClass.subclasses[(Math.floor(Math.random() * randomClass.subclasses.length))].name
		result.lvl = Math.floor(Math.random() * 20) + 1
		this.setState({ result })
	}

	selectOption = (name, value) => {
		console.log(name, value)
	}

	render () {
		return (
			<div className='container'>
				<Options
					races={this.state.races}
					getResult={this.generateResult}
					selectOption={this.selectOption}/>
				<Result {...this.state.result}/>
			</div>
		)
	}
}

export default Generator;
