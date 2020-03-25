import React from "react";
import { subtext } from "./subtexts";

class Section extends React.Component {
  subtext(name) {
    if (subtext[name]) {
      return subtext[name];
    }
    return "Subtext name is incorrect";
  }

  order(section, title, picture) {
    if (section === "section-right") {
      return (
        <div className={section}>
          <div className="section-text ">
            <h4>{title}</h4>
            {this.subtext(picture)}
          </div>
          <div className={picture + " img"} />
        </div>
      );
    } else {
      return (
        <div className={section}>
          <div className={picture + " img"} />
          <div className="section-text ">
            <h4>{title}</h4>
            {this.subtext(picture)}
          </div>
        </div>
      );
    }
  }

  render() {
    let { title, section, picture } = this.props;
    return this.order(section, title, picture);
  }
}

export default Section;
