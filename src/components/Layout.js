import React from "react";
import PropTypes from "prop-types";


import Menu from "./Menu"
import Header from "./Header";
import Layout from "../blocks/layout";
import Container from "../blocks/RouteContainer";

const App = ({ children, }) => {

  return (
    <Layout>
      <Header />
      <Layout.Main>
        <Menu />
        <Container>
          {children}
        </Container>
      </Layout.Main>
    </Layout>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
