import React from 'react';
import TopFilter from '../components/topFilter.jsx';
import BottomFilter from '../components/bottomFilter.jsx';
import AdvertFilter from '../components/adverts.jsx';
import GameCard from '../components/card.jsx';
import { game_data } from '../common/utils';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topFilter: 'all',
			data: [],
			isChallenges: true,
			challengesData: [],
			inPlayData: [],
			footballData: [],
			allData: [],
			cricketData: [],
		};
		this.data = [];
		this.challengesData = [];
		this.inPlayData = [];
		this.footballData = [];
		this.cricketData = [];
		this.callbkFromBtmFilter = this.callbkFromBtmFilter.bind(this);
		this.callbkFromTopFilter = this.callbkFromTopFilter.bind(this);
	}

	componentWillMount() {
		game_data()
			.then(res => {
				for (let a of res) {
					if (a.isJoined === 0) {
						this.challengesData.push(a);
					} else if (a.isJoined === 1) {
						this.inPlayData.push(a);
					}
					if (a.sportName.includes('football')) {
						this.footballData.push(a);
					}
					if (a.sportName.includes('cricket')) {
						this.cricketData.push(a);
					}
				}
				this.setState({
					data: this.challengesData,
					allData: res,
					footballData: this.footballData,
					cricketData: this.cricketData,
					challengesData: this.challengesData,
					inPlayData: this.inPlayData,
				});
			})
			.catch((err) => {
				console.log(err);
			})
	}

	callbkFromTopFilter(data) {
		let temp = [];
		let temp1 = [];
		switch (data) {
			case 'football':
				for (let a of this.state.allData) {
					if (this.state.isChallenges) {
						if (a.sportName.includes('football') && a.isJoined === 0) {
							temp.push(a);
						}
					} else {
						if (a.sportName.includes('football') && a.isJoined === 1) {
							temp1.push(a);
						}
					}
				}
				{
					(this.state.isChallenges) ?
						this.setState({ data: temp, topFilter: 'football' }) :
						this.setState({ data: temp1, topFilter: 'football' })
				}
				break;
			case 'cricket':
				for (let a of this.state.allData) {
					if (this.state.isChallenges) {
						if (a.sportName.includes('cricket') && a.isJoined === 0) {
							temp.push(a);
						}
					} else {
						if (a.sportName.includes('cricket') && a.isJoined === 1) {
							temp1.push(a);
						}
					}
				}
				{
					(this.state.isChallenges) ?
						this.setState({ data: temp, topFilter: 'cricket' }) :
						this.setState({ data: temp1, topFilter: 'cricket' })
				}
				break;
			case 'all':
				if (this.state.isChallenges) {
					this.setState({
						data: this.state.challengesData,
						topFilter: 'all',
					})
				} else {
					this.setState({
						data: this.state.inPlayData,
						topFilter: 'all',
					})
				}
				break;
			default:
				break;
		}
	}

	callbkFromBtmFilter(data) {
		let util = [];
		if (data === false) {
			switch (this.state.topFilter) {
				case 'all':
					this.setState({
						data: this.state.inPlayData,
						isChallenges: false,
					})
					break;
				case 'football':
					for (let p of this.state.inPlayData) {
						if (p.sportName.includes('football')) {
							util.push(p)
						}
					}
					this.setState({
						data: util,
						isChallenges: false,
					})
					break;
				case 'cricket':
					for (let q of this.state.inPlayData) {
						if (q.sportName.includes('cricket')) {
							util.push(q)
						}
					}
					this.setState({
						data: util,
						isChallenges: false,
					})
					break;
				case 'default':
					break;
			}
		} else {
			switch (this.state.topFilter) {
				case 'all':
					this.setState({
						data: this.state.challengesData,
						isChallenges: true,
					})
					break;
				case 'football':
					for (let p of this.state.challengesData) {
						if (p.sportName.includes('football')) {
							util.push(p)
						}
					}
					this.setState({
						data: util,
						isChallenges: true,
					})
					break;
				case 'cricket':
					for (let q of this.state.challengesData) {
						if (q.sportName.includes('cricket')) {
							util.push(q)
						}
					}
					this.setState({
						data: util,
						isChallenges: true,
					})
					break;
				case 'default':
					break;
			}
		}
	}

	render() {
		return (
			<div className="appParent">
				<h2 className="appHeader">Challenges</h2>
				<TopFilter sport={this.callbkFromTopFilter} />
				<AdvertFilter />
				{
					this.state.data.map(x => {
						return (
							<GameCard jsonData={x} />
						)
					})
				}
				<BottomFilter isChallengesSelected={this.state.isChallenges} callbk={this.callbkFromBtmFilter} />
			</div>
		);
	}
}
