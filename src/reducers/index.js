import {combineReducers} from 'redux';
import ActiveGame from './game-active';
import GamesReducers from './games';


const allReducers = combineReducers ({
	active: ActiveGame,
	games: GamesReducers,

});

export default allReducers
