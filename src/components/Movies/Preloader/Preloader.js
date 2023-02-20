import React from 'react'
import './Preloader.css'

const Preloader = () => {

    // const isOn = props.customLoading ? true : false;

// const preloaderStyle = `${props.customLoading  ? 'preloader' : 'preloader_hidden'}`;

    return (
        <div className='preloader'>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
