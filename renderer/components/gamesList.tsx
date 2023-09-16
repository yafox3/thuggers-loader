import { useState } from 'react'
import { IGame } from '../models/IGame'
import Game from './game'

const GamesList = () => {
	const [games, setGames] = useState<IGame[]>([
		{
			id: 1,
			name: 'Deceit',
			img: './images/games/deceit.png'
		},
		{
			id: 2,
			name: 'Valorant',
			img: './images/games/valorant.png'
		},
		{
			id: 3,
			name: 'Fortnite',
			img: './images/games/fortnite.png'
		},
		{
			id: 4,
			name: 'DayZ',
			img: './images/games/dayz.png'
		},
		{
			id: 5,
			name: 'CS:GO',
			img: './images/games/csgo.png'
		},
		{
			id: 6,
			name: 'Rust',
			img: './images/games/rust.png'
		}
	])

	return (
		<div className='grid grid-cols-3 gap-[30px]'>
			{games.map(game => (
				<Game
					game={game}
					key={game.id}
				/>
			))}
		</div>
	)
}

export default GamesList
