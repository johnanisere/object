import React from "react";

import Home from "../components/home"
import Layout from "../components/Layout";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

export default App;
