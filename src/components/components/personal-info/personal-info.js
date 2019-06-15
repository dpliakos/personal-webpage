"use strict";
exports.__esModule = true;
var react_1 = require("react");
var js_logger_1 = require("js-logger");
var PersonaInfo = function(props) {
  js_logger_1["default"].debug("PersonalInfoProps--: ", props);
  var description = props.person.description.map(function(item, i) {
    return (
      <span key={i} className="personal-info__description-line">
        {item}
      </span>
    );
  });
  return (
    <div className="personal-info">
      <div className="personal-info__image-wrapper">
        <img
          className="personal-info__image"
          src={props.person ? props.person.image.url : ""}
          alt={
            props.person && props.person.image.alt ? props.person.image.alt : ""
          }
        />
      </div>
      <div className="personal-info__text">
        <div className="personal-info__name">
          {props.person ? props.person.name : ""}
        </div>
        <div className="personal-ingo__description">{description}</div>
      </div>
    </div>
  );
};
exports["default"] = PersonaInfo;
