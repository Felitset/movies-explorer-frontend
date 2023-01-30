import React from "react";
import './Profile.css';

function Profile() {
    return (
<div className="profile">
    <h1 className='profile_greeting'>Привет, Виталий!</h1>
    <form id='update_user_info' className="profile_update_form">
        <span className='input_block'>
        <label className="input_label">Имя</label>
        <input className="profile_update_input" placeholder='Имя' title='Имя'></input>
        </span>
        <span>
        <label className="input_label">E-mail</label>
        <input className="profile_update_input" placeholder='Email' title='E-mail'></input>
        </span>
        

        <button className="profile_update_btn" type='submit'>Редактировать</button>
    </form>
    <button className="exit_account_btn" type='button'>Выйти из аккаунта</button>
</div>
    )
}

export default Profile