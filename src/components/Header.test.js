
import React from "react";
import { shallow } from "enzyme";

import Header from "./Header"
import HeaderContainer from "../blocks/header";

it("Header component exists", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
});

it("Header component renders", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});

it(`Header should contain "HeaderContainer",  "HeaderContainer.Content", `, () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('span')).toHaveLength(3);
    expect(wrapper.find('button')).toHaveLength(4);
    expect(wrapper.find(HeaderContainer)).toHaveLength(1);
    expect(wrapper.find(HeaderContainer.Content)).toHaveLength(2);
});