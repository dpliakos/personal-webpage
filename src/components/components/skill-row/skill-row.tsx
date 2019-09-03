'use strict';
/**
 * 
 * The compoentn that is used at the skill page for the skill list.
 * 
 */

import React from 'react';
import  "./skill-row.scss";

interface skillItem {
  title ?:string;
  icon ?: string;
}

interface skillItemProps {
  item: skillItem;
}

interface skillRow {
  title: string;
  items: Array<skillItem>;
}

interface skillRowProps {
  skillBundle: skillRow;
}

const SkillItem = (props: skillItemProps) => {
  return (
    <div className="skill-row__item-image-wrapper" 
      title={props.item.title ? props.item.title :"" }     
    >
      <img src={props.item.icon ? props.item.icon : "" } className="skill-row__item-image" alt={props.item.title} />
    </div>
  );
}


const SkillRow = (props: skillRowProps) => {

  const skills = props.skillBundle.items.map((item, i) => {
    return (
    <li className="skill-row__item"> 
        <SkillItem item={item} key={i} />
      </li>
    );
  });

  return (
    <div className="skill-row">
      <h4 className="skill-row__title"> 
        {props.skillBundle.title ? props.skillBundle.title : "" }
      </h4>
      <ul className="skill-row__list">{skills}</ul>
    </div>
  );
}

export default SkillRow;
