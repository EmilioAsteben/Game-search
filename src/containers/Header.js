import React, {Component} from 'react';
import {connect} from 'react-redux';
import {show} from '../actions/ShowGames';
import {hide} from '../actions/HideGames';
import {bindActionCreators} from 'redux';


class NavAndSearch extends Component {


 /*Первый блок инициализирует состояния для nav menu, второй для выпадающего меню, третий - для модальных окон*/


 constructor(props) {
        super(props);
        this.state = {
            sh_header: "sh_nav",
            str_header: "str_nav",
            mmo_header: "mmo_nav",
            cardrpg_header: "cardrpg_nav",
            rpg_header: "rpg_nav",

            link_block: "linkBlock",
            dropdown: false,

            modal_window: null,

            
        };

    }



  /*Меняют классы элементов в nav menu  */

classShSelect() {
    setTimeout(function() {
        
    this.setState({ sh_header: 'sh_nav_selected' });
    this.setState({ str_header: 'str_nav' });
    this.setState({ mmo_header: 'mmo_nav' });
    this.setState({ cardrpg_header: 'cardrpg_nav' });
    this.setState({ rpg_header: 'rpg_nav' });
    this.setState({ link_block: 'linkBlock' });
    this.props.show (this.props.games[0]);
     }.bind(this),100);


}

classStrSelect() {
    setTimeout(function() {
    this.setState({ str_header: 'str_nav_selected' });
    this.setState({ sh_header: 'sh_nav' });
    this.setState({ mmo_header: 'mmo_nav' });
    this.setState({ cardrpg_header: 'cardrpg_nav' });
    this.setState({ rpg_header: 'rpg_nav' });
    this.setState({ link_block: 'linkBlock_2' });
    this.props.show (this.props.games[1]);
    }.bind(this),100);

}

classMMOSelect() {
    setTimeout(function() {
    this.setState({ mmo_header: 'mmo_nav_selected' });
    this.setState({ sh_header: 'sh_nav' });
    this.setState({ str_header: 'str_nav' });
    this.setState({ cardrpg_header: 'cardrpg_nav' });
    this.setState({ rpg_header: 'rpg_nav' });
    this.setState({ link_block: 'linkBlock_3' });
    this.props.show (this.props.games[2]);
    }.bind(this),100);


}

classcardrpgSelect() {
    setTimeout(function() {
    this.setState({ cardrpg_header: 'cardrpg_nav_selected' });
    this.setState({ sh_header: 'sh_nav' });
    this.setState({ str_header: 'str_nav' });  
    this.setState({ mmo_header: 'mmo_nav' });
    this.setState({ rpg_header: 'rpg_nav' });
    this.setState({ link_block: 'linkBlock_4' });
    this.props.show (this.props.games[3]);
    }.bind(this),100);

}

classRpgSelect() {
    setTimeout(function() {
    this.setState({ rpg_header: 'rpg_nav_selected' });
    this.setState({ sh_header: 'sh_nav' });
    this.setState({ str_header: 'str_nav' });  
    this.setState({ mmo_header: 'mmo_nav' });
    this.setState({ cardrpg_header: 'cardrpg_nav' });
    this.setState({ link_block: 'linkBlock_5' });
    this.props.show (this.props.games[4]);
    }.bind(this),100);


}

unselectAll() {
    this.setState({ mmo_header: 'mmo_nav' });
    this.setState({ sh_header: 'sh_nav' });
    this.setState({ str_header: 'str_nav' });
    this.setState({ cardrpg_header: 'cardrpg_nav' });
    this.setState({ rpg_header: 'rpg_nav' });
    
    


}

/*Модальные окна*/
ModalActive() {
     this.setState({ modal_window: "modal_window_1" });
    }

ModalActive_2() {
    this.setState({modal_window: "modal_window_2" })
}

ModalActive_3() {
    this.setState({modal_window: "modal_window_3" })
}

ModalActive_4() {
    this.setState({modal_window: "modal_window_4" })
}

ModalUnselect() {
    this.setState({modal_window: null})
    this.unselectAll()




}



/*Рендерит выпадающий элемент*/
rendDrop() {
if (!this.state.dropdown ) {
return ''
} else if (!this.props.game) {
    return ''
}

else  {
    return <div className="contain">
{this.innerContain()}
    </div>
    }
}

/*Рендерит содержимое элемента*/
innerContain() {
    if(!this.props.game) {
        return ''
    } else {
        return (

     <div  className="pictureBlock">

     <h4>{this.props.game.id}</h4>

        <img onClick={() => this.ModalActive()}  className="image" src ={this.props.game.img_1} />
        <img onClick={() => this.ModalActive_2()} className="image" src ={this.props.game.img_2} />
        <img onClick={() => this.ModalActive_3()} className="image" src ={this.props.game.img_3} />
        <img onClick={() => this.ModalActive_4()} className="image" src ={this.props.game.img_4} />


    
    <div className={this.state.link_block}>

        <a className="link_1" href="">{this.props.game.name_1}</a>
        <a className="link_2" href="">{this.props.game.name_2}</a>
        <a className="link_3" href="">{this.props.game.name_3}</a>
        <a className="link_4" href="">{this.props.game.name_4}</a>

        </div>

        <a className="containMore" href="">Показать больше...</a>
        
    
    </div>)
    }

}

ModalGamePic(item) {
    switch (this.state.modal_window) {


        case "modal_window_1":

        return (
            this.props.game[item + "_1"]

            ) 
        break;

        case "modal_window_2":

        return (
             this.props.game[item + "_2"]

            ) ;
        break;

        case "modal_window_3":

        return (
             this.props.game[item + "_3"]

            ) ;
        break;

        case "modal_window_4":

        return (
             this.props.game[item + "_4"]

            ) ;
        break;


    }
}






    /*Возвращает модальное окно с данными из редюсера games*/

    ModalPreview() {
        if (this.state.modal_window){
            return (


                <div className="modal_wrapper"  >

                            
                <div onClick={() => {
                            this.ModalUnselect() }}  className="modal_unselect"></div>
                            



                <div className="modal"  > 

                <h4 className="modal_hading">{this.props.game.name_1}</h4>

                <img onClick={() => {this.setState({modal_window: false})}}   className="image_modal" src={this.ModalGamePic("img")} />

                            <table>
                            <tbody>

<tr><td>год</td><td>{this.ModalGamePic("year")}</td></tr>
<tr><td>страна</td><td>{this.ModalGamePic("country")}</td></tr>
<tr><td>жанр</td><td>{this.ModalGamePic("genre")}</td></tr>
<tr><td>разработчики</td><td>{this.ModalGamePic("developer")}</td></tr>
</tbody>
</table>

                        <p  className="modal_description">{this.ModalGamePic("description")}</p>
                        <a className= "modal_link">Показать полностью...</a>

                            </div>
                            </div>
                            
                )
    } 
}


render() {



	return (

        <header>
        <div className="navAndSearch"
        onMouseLeave={() => {
                            this.setState({
                                dropdown: false,
                            }); 
                            this.unselectAll()
                        }}>

       {/* Поисковая строка*/}
        <div onMouseMove={() => {
                            this.setState({
                                dropdown: false,
                            }); 
                            this.unselectAll();
                            this.props.hide()
                        }} className="search">

        <input  placeholder="" type="text" name="search" className="SearchString" />
        <button className="button_search"></button>


        </div>

        {/*nav menu*/}
		<div  className="nav"    >

      


              <div className="leftBlock" onMouseMove={() => {
                            this.setState({
                                dropdown: false,
                            }); 
                            this.unselectAll()
                        }}   ></div>

        

        	<ul   
                        onMouseEnter={() => {
                            this.setState({
                                dropdown: true,
                            });
                        }} 

                       
                         >




                         

        <li key={this.props.games[0].id} className={this.state.sh_header} onMouseEnter={() => this.classShSelect() }> Шутеры </li>
        
        <li  key={this.props.games[1].id} className={this.state.str_header} onMouseOver={() => this.classStrSelect() }  > Стратегии </li>

        <li key={this.props.games[2].id} className={this.state.mmo_header} onMouseOver={() => this.classMMOSelect()}> MMORPG </li>

        <li key={this.props.games[3].id} className={this.state.cardrpg_header} onMouseOver={() => this.classcardrpgSelect()}> CCG </li>

        <li key={this.props.games[4].id} className={this.state.rpg_header} onMouseOver={() => this.classRpgSelect()}> RPG </li>

		  </ul>



        <div className="rightBlock" onMouseMove={() => {
                            this.setState({
                                dropdown: false,
                            }); 
                            this.unselectAll()
                        }}   ></div>
       

		


        <div  > {this.ModalPreview()}</div>


</div>
<div>{this.rendDrop()}</div>
</div>
</header>

	)}


};

    function mapStateToProps (state) {
    return {
            games: state.games,
            game: state.active
        }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({show: show, hide: hide}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps )(NavAndSearch);