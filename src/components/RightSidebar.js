import React, {Component} from 'react';
import {show} from '../actions/ShowGames';
import {hide} from '../actions/HideGames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class RightSidebar extends Component {



render() {



	return (

		<div className="rightSidebar" onMouseMove= {() => this.props.hide() }>

		<div className="newsOfDay"> 
		<img className="newsOfDayImg" src="https://mfst.igromania.ru/wp-content/uploads/2018/05/259219_dnDQh63215_1.png" />
		<div className="newsOfDayBar"> <p>Новость дня: S.T.A.L.K.E.R. 2</p> </div>

		</div>

		<div className="ratings">

		<div className="blockLineRating"><h5 className="blockLineRatingHeading">Топ: игроков онлайн</h5></div>

		<ol>

		<li><a href="">PUBG</a></li>
		<li><a href="">Dota 2</a></li>
		<li><a href="">CS:GO</a></li>
		<li><a href="">Tom Clancy's </a></li>
		<li><a href="">Grand Theft Auto V</a></li>

		</ol>

		<ul>
		<li>1,568,078</li>
		<li>739,943	</li>
		<li>386,452</li>
		<li>90,915</li>
		<li>63,555	</li>
		</ul>
			

		</div>

		<div className="ratings">

		<div className="blockLineRating"><h5 className="blockLineRatingHeading">Новинки</h5></div>

		<ol>

		<li><a href="">Far Cry 5</a></li>
		<li><a href="">Wolfenstein II</a></li>
		<li><a href="">FIFA 18</a></li>
		<li><a href="">PUBG </a></li>
		<li><a href="">Destiny 2</a></li>

		</ol>

		<ul>
		<li>1999 pуб</li>
		<li>1999 pуб	</li>
		<li>59,9  $</li>
		<li>899 руб</li>
		<li>1999 руб	</li>
		</ul>
			

		</div>

		</div>


	
	);

}
}

function mapStateToProps (state) {
    return {
            
            games: state.games,
            car: state.active
        }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({show: show, hide: hide}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps )(RightSidebar);