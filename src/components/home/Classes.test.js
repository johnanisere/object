
import React from "react";
import { shallow } from "enzyme";

import Classes from "./Classes"
import OptionLayout from "../SectionLayout"
import List from "../../blocks/FlexibleContainer"

it("Classes component exists", () => {
    const wrapper = shallow(<Classes />);
    expect(wrapper.exists()).toBe(true);
});

it("Classes component renders", () => {
    const wrapper = shallow(<Classes />);
    expect(wrapper).toMatchSnapshot();
});

it(`Classes should contain "OptionLayout",  "List", `, () => {
    const wrapper = shallow(<Classes />);

    expect(wrapper.find(List)).toHaveLength(1);
    expect(wrapper.find(OptionLayout)).toHaveLength(1);
});