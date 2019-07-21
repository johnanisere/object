
import React from "react";
import { shallow } from "enzyme";

import Home from "./Home"
import Layout from "../components/Layout";
import HomeComponent from "../components/home";

it("Home component exists", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
});

it("Home component renders", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
});

it(`Home should contain "Layout",  "HomeComponent", `, () => {
    const wrapper = shallow(<Home />);


    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(HomeComponent)).toHaveLength(1);
});