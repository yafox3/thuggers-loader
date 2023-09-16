import { IGame } from '../models/IGame'

interface GameProps {
	game: IGame
}

const Game = ({game}: GameProps) => {
  return (
	<div className={`relative w-[200px] h-[200px] rounded-2xl bg-[url(${game.img}]`}>
	  <div className='absolute bottom-0 w-full backdrop-blur-sm px-2.5'>
		
	  </div>
	</div>
  )
}

export default Game
