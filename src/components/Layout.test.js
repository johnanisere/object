
import React from "react";
import { shallow } from "enzyme";

import Menu from "./Menu"
import Header from "./Header";
import Layout from "./Layout";
import Container from "../blocks/RouteContainer";
import LayoutContainer from "../blocks/layout";

it("Layout component exists", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.exists()).toBe(true);
});

it("Layout component renders", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toMatchSnapshot();
});

it(`Layout should contain "LayoutContainer",  "LayoutContainer.Main", `, () => {
    const wrapper = shallow(<Layout />);

    expect(wrapper.find(Menu)).toHaveLength(1);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Container)).toHaveLength(1);
    expect(wrapper.find(LayoutContainer)).toHaveLength(1);
    expect(wrapper.find(LayoutContainer.Main)).toHaveLength(1);
});