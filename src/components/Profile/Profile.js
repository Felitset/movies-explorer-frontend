import React, { useContext, useCallback, useState} from "react";
import './Profile.css';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from '../FormValidator';

function Profile({onUpdateProfile, onLogout}) {
    const {name, email} = useContext(CurrentUserContext);
    console.log('i pring when Profile runs');
    const validateInput = useFormWithValidation();

    const [formData, setFormData] = useState({
        name: name,
        email: email
    })

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value })
    }, [formData]);

function handleSubmit(e) {
    e.preventDefault()
    const { name, email } = validateInput.values;
    onUpdateProfile(name, email);
    validateInput.resetForm();
}

    return (
        <div className="profile main__profile">
            <h1 className='profile__greeting'>Привет, {name}</h1>
            <form 
            id='update_user_info' 
            className="profile__update_form form__input"
            noValidate>
                <span className='profile__input_block'>
                    <label className="profile__input_label">Имя</label>
                    <input 
                    className="profile__update_input form__input" 
                    id="update_name_input"
                    onChange={validateInput.handleChange}
                    value={validateInput?.values?.name || ''}
                    placeholder='Имя' 
                    title='Имя'></input>
                </span>
                <span className="update_name_input-error form__input-error_message"></span>

                <span className='profile__input_block'>
                    <label className="profile__input_label">E-mail</label>
                    <input 
                    className="profile__update_input form__input"
                    id="update_email_input"
                    onChange={validateInput.handleChange}
                    value={validateInput?.values?.email || ''}
                    placeholder='Email' 
                    title='E-mail'></input>
                </span>
                <span className="update_email_input-error form__input-error_message"></span>

                <button 
                className="profile__update_btn_active form__button" 
                type='submit'
                onSubmit={handleSubmit}>Редактировать</button>
            </form>
            <button
                className="profile__exit_btn"
                type='button'
                onClick={onLogout}>Выйти из аккаунта</button>
        </div>
    )
}

export default Profile