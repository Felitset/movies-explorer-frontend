import React from "react";
import './InfoToolTip.css';

function InfoTooltip(props) {
  return (
      <div className="popup popup_is-opened" >
        <div className="infoTooltip__container">
          <button
            className="popup__close"
            type="button"
            onClick={props.onClose} />
          <div className="infoTooltip__img" ></div>
          <h1 className="infoTooltip__title">{props.title}</h1>
        </div>
      </div>
  )
}

export default InfoTooltip