import React, {Component} from 'react';
import {show} from '../actions/ShowGames';
import {hide} from '../actions/HideGames';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';



class EntryContent extends Component {



render() {



	return (



<div className="entryContent" onMouseMove={() => this.props.hide()}>
<div className= "TopMenu" onMouseOver={() => {this.props.hide()}}  >   

<div className="top_menu_block">
	 <a href="" className= "link_heading">Премьеры</a>

	 <a href=""  className="top_menu_link">Monster Hunter: World</a>
	 <a href=""  className="top_menu_link">Kingdom Come: Deliverance</a>
	 <a href=""  className="top_menu_link">Metal Gear Survive</a>
	 <a href=""  className="top_menu_link">Far Cry 5</a>


</div>

	  <div className="top_menu_block">
	 <a href="" className= "link_heading">Рейтинги</a>

	 <a href=""  className="top_menu_link">Топ 100</a>
	 <a href=""  className="top_menu_link">Ожидаемые игры</a>
	 <a href=""  className="top_menu_link">Оценки пользователей</a>
	 <a href=""  className="top_menu_link">Лучшие игры года</a>


</div>

<div className="top_menu_block">
	 <a href="" className= "link_heading">Steam -%</a>

	 <a href=""  className="top_menu_link">ORCS MUST DIE!</a>
	 <a href=""  className="top_menu_link">POSTAL 2</a>
	 <a href=""  className="top_menu_link">GRAV</a>
	 <a href=""  className="top_menu_link">THE FALL</a>


</div>



</div>
	<div className="blockLine"><h5 className="blockLineHeading">Новости</h5></div>
	<div className="newsContainer">
	<div className = "newsBlock">

		<img className = "newsImg" src="https://cdn.igromania.ru/mnt/news/6/9/5/5/f/0/75090/ebb249571d4b9733_848x477.jpg"/>
		<a 	 className = "newsHeadline" href="" > S.T.A.L.K.E.R. 2 официально анонсирована</a>
		<p   className = "newsContent">Глава компании GSC Game World Сергей Григорович официально анонсировал S.T.A.L.K.E.R. 2. Никаких подробностей о проекте пока нет.</p>

	</div>

		<hr />

	<div className = "newsBlock">

		<img className = "newsImg" src="https://games.mail.ru/pre_1000x515_resize/pic/pc/highlight/desktop/2018/5/c7ac3bc.jpeg"/>
		<a 	 className = "newsHeadline" href="" > Encased — артефакты и аномалии в новом «русском Fallout»</a>
		<p   className = "newsContent">Выживание в постапокалипсисе под таинственным куполом, загадки праотцов и геймплей старой школы — в российской ролевой игре старой школы</p>
		
	</div>

		<hr />

		<div className = "newsBlock">

		<img className = "newsImg" src="https://static.gamespot.com/uploads/original/1197/11970954/3246158-metro-exodus_1080_announce-screenshot_1_watermark.jpg"/>
		<a 	 className = "newsHeadline" href="" > Metro: Exodus перенесли</a>
		<p   className = "newsContent">Компания THQ Nordic объявила, что Metro: Exodus не выйдет в этом году. Шутер хотели выпустить осенью, однако теперь релиз запланирован на первый квартал 2019 года.</p>
		
	</div>

		<hr />

	<div className = "newsBlock">

		<img className = "newsImg" src="https://usercontent2.hubstatic.com/13059957_f520.jpg"/>
		<a 	 className = "newsHeadline" href="" > Европейцам моложе 16 лет запретили играть в League of Legends</a>
		<p   className = "newsContent">Riot Games обновила правила пользования League of Legends для  Европы. Теперь без разрешения родителей игру могут запускать только лица старше 16 лет. </p>
		
	</div>

		<hr />
		</div>
</div>

		


	
	);

}
}

function mapStateToProps (state) {
    return {
            
            car: state.active
        }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({show: show, hide: hide}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps )(EntryContent);