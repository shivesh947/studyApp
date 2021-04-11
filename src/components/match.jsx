import React, { Component } from 'react'
import SortingMatch from './customlib/sortingMatch';
import { factAboutIndia } from './store/matchData';

export default class MatchTheFollowing extends Component {
	state={
		gameEnd:false
	}

	render() {
		const { gameEnd } = this.state;
		const matchData=factAboutIndia;
		return (
			<div className="p-3">
				<p className="text-3xl text-center py-6">Sort with correct pair</p>
				<div className="text-sm">
					<SortingMatch matchData={matchData} setGameEnd={()=>this.setState({gameEnd:true})} gameEnd={gameEnd}/>
				</div>
				{gameEnd && <p className="text-2xl text-center font-bold">Game End</p>}
			</div>
		)
	}
}
