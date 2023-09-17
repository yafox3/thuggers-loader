import Image from 'next/image'
import { IGame } from '../models/IGame'
import Button from './ui/button'

interface GameProps {
	game: IGame
}

const Game = ({ game }: GameProps) => {
	return (
		<div className='relative w-[270px] h-[270px] rounded-2xl transition-all cursor-pointer hover:drop-shadow-xl group overflow-hidden'>
			<img
				src={game.img}
				width={270}
				height={270}
			/>
			<div className='absolute bottom-0 w-full backdrop-blur-sm bg-black-op-900 px-4 h-[50px] group-hover:h-[60px] group-hover:bg-black transition-all rounded-t-2xl flex items-center'>
				<div className='flex items-center justify-between flex-1'>
                    <h5 className='text-md group-hover:text-xl transition-all'>{game.name}</h5>
                    <Button className='text-sm transition-all group-hover:bg-yellow'>Play</Button>
                </div>
			</div>
		</div>
	)
}

export default Game
