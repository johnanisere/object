import React from "react";
import PropTypes from "prop-types";
import Header from "../blocks/header";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const App = ({ content }) => {

  return (
    <Header>
      <Header.Content flex={3}>
        <span>
          Project Object Detection | Pascal test 2
      </span>
        <span className="navigation">
          <button><MdKeyboardArrowLeft size={15} /> {` previous`}</button>
          <span className="name">{content}</span>
          <button>next <MdKeyboardArrowRight size={15} /></button>
        </span>
      </Header.Content>
      <Header.Content flex={1}>
        <button className="navigation space">
          skip image <MdKeyboardArrowRight size={15} /><MdKeyboardArrowRight size={15} />
        </button>
        <button className="navigation">
          export
        </button>
      </Header.Content>
    </Header>
  );
};

App.propTypes = {
  content: PropTypes.string.isRequired
};

App.defaultProps = {
  content: "2007_00065.jpg"
};


export default App