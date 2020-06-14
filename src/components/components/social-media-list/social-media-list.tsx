import React from 'react';

import './social-media-list.scss';


class SocialMediaList extends React.PureComponent {

  constructor(props: any) {
    super(props);

    this.state = {
      expanded: false
    }
  }

  render() {
    const snapshot = {...this.state};
    const extraClass = snapshot.expanded ? 'social-media-list--expanded' : '';

    const list = this.props.items.map((item, key) => {
      return (
        <ul className="social-media-list__list" key={key}>
          <li className="social-media-list__list-item">
            <a href={item.link} target="_blank"> {item.label} </a>
          </li>
        </ul>
      );
    });

    return (
      <div className={`social-media-list ${extraClass}`}>
        <div className="social-media-list__list-wrapper">
          {list}
        </div>
        <button onClick={() => {this.setState({expanded: !this.state.expanded})}} className="social-media-list__button">
          <this.props.icon />
        </button>
      </div>
    );
  }
}

export default SocialMediaList;
