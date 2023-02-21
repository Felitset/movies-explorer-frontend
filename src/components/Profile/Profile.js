import React, { useContext } from "react";
import './Profile.css';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from '../FormValidator';

function Profile({onUpdateProfile, onLogout}) {
    const userInfo = useContext(CurrentUserContext);

    const validateInput = useFormWithValidation();
    const { name, email } = validateInput.errors;

    const errorClassName = !validateInput.isValid
        ? 'profile__error profile__error_active'
        : 'profile__error';

    const buttonState = !validateInput.isValid
        ? 'profile__update_btn'
        : 'profile__update_btn_active';

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email } = validateInput.values;
        onUpdateProfile( {
            name: name,
            email: email
        })
        validateInput.resetForm();
    };


    return (
        <div className="profile main__profile">
            <h1 className='profile__greeting'>Привет, {userInfo.name}!</h1>
            <form 
            id='update_user_info' 
            className="profile__update_form form__input"
            noValidate>
                <span className='profile__input_block'>
                    <label className="profile__input_label">Имя</label>
                    <input 
                    className="profile__update_input" 
                    type="name"
                    name='name'
                    onChange={validateInput.handleChange}
                    value={validateInput?.values?.name ?? userInfo.name}
                    placeholder={userInfo.name} 
                    minLength="2"
                    maxLength="30"
                    pattern='^[A-Za-z -]+$'
                    required></input>
                </span>
                <span className={errorClassName}>{name}</span>

                <span className='profile__input_block'>
                    <label className="profile__input_label">E-mail</label>
                    <input 
                    className="profile__update_input"
                    id="email"
                    type='email'
                    name='email'
                    onChange={validateInput.handleChange}
                    value={validateInput?.values?.email ?? userInfo.email}
                    placeholder={userInfo.email}
                    required></input>
                </span>
                <span className={errorClassName}>{email}</span>
                <button className={buttonState} 
                type='submit'
                onClick={handleSubmit}
                >Редактировать</button>
            </form>
            <button
                className="profile__exit_btn"
                type='button'
                onClick={onLogout}>Выйти из аккаунта</button>
        </div>
    )
}

export default Profile