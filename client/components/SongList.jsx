import React from 'react';
import { getSongsList } from '../api';

class SongList extends React.Component {
	state = {
		songs: [],
	};

	componentDidMount() {
		getSongsList().then((songs) => {
			this.setState({
				songs: songs,
			});
		});
	}
	render() {
		return (
			<>
			<h3>Trending</h3>
			<ul>
				{this.state.songs.map((song) => {
					return <li>{song.title}</li>;
				})}
			</ul>
			</>
		);
	}
}
export default SongList;
