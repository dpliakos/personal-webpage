import React from "react";
import Logger from "js-logger";

export interface Person {
  name: string;
  description: string[];
  image: {
    url: string;
    alt: string;
  };
}

export interface PersonalInfoProps {
  person: Person;
}

const PersonaInfo = (props: PersonalInfoProps) => {
  Logger.debug("PersonalInfoProps--: ", props);

  const description = props.person.description.map(
    (item: string, i: number) => {
      return (
        <span key={i} className="personal-info__description-line">
          {item}
        </span>
      );
    }
  );

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

export default PersonaInfo;
