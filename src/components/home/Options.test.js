
import React from "react";
import { shallow } from "enzyme";

import Options from "./Options"
import Container from "../../blocks/FlexibleContainer";
import Objects from "./Objects"
import Classes from "./Classes"
import Tags from "./Tags"


const props = {
    displayData: [],
}

it("Options component exists", () => {
    const wrapper = shallow(<Options {...props} />);
    expect(wrapper.exists()).toBe(true);
});

it("Options component renders", () => {
    const wrapper = shallow(<Options {...props} />);
    expect(wrapper).toMatchSnapshot();
});

it(`Options should contain "Container",  "Options", `, () => {
    const wrapper = shallow(<Options {...props} />);

    expect(wrapper.find(Classes)).toHaveLength(1);
    expect(wrapper.find(Objects)).toHaveLength(1);
    expect(wrapper.find(Tags)).toHaveLength(1);
    expect(wrapper.find(Container)).toHaveLength(1);
});