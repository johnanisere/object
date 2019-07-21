
import React from "react";
import { shallow } from "enzyme";

import Objects from "./Objects"

import OptionLayout from "../SectionLayout"
import List from "../../blocks/FlexibleContainer"

const props = {
    displayData: [],
}

it("Objects component exists", () => {
    const wrapper = shallow(<Objects {...props} />);
    expect(wrapper.exists()).toBe(true);
});

it("Objects component renders", () => {
    const wrapper = shallow(<Objects {...props} />);
    expect(wrapper).toMatchSnapshot();
});

it(`Objects should contain "OptionLayout",  "List", `, () => {
    const wrapper = shallow(<Objects {...props} />);

    expect(wrapper.find(OptionLayout)).toHaveLength(1);
    expect(wrapper.find(List)).toHaveLength(1);
});