
import React from "react";
import { shallow } from "enzyme";

import Home from "./index"
import Editor from "./Editor"
import Options from "./Options"

it("Home component exists", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.exists()).toBe(true);
});

it("Home component renders", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
});

it(`Home should contain "Options", u"Editor", `, () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(Editor)).toHaveLength(1);
    expect(wrapper.find(Options)).toHaveLength(1);
});