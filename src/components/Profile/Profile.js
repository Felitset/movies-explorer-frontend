import React, { useContext} from "react";
import './Profile.css';
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Profile(props) {
    const {name, email} = useContext(CurrentUserContext);
    console.log('i pring when Profile runs')

    return (
        <div className="profile main__profile">
            <h1 className='profile__greeting'>Привет, {name}</h1>
            <form id='update_user_info' className="profile__update_form">
                <span className='profile__input_block'>
                    <label className="profile__input_label">Имя</label>
                    <input className="profile__update_input" placeholder='Имя' title='Имя'></input>
                </span>
                <span className='profile__input_block'>
                    <label className="profile__input_label">E-mail</label>
                    <input className="profile__update_input" placeholder='Email' title='E-mail'></input>
                </span>


                <button className="profile__update_btn" type='submit'>Редактировать</button>
            </form>
            <button
                className="profile__exit_btn"
                type='button'
                onClick={props.onLogout}>Выйти из аккаунта</button>
        </div>
    )
}

export default Profile