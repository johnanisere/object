
import React from "react";
import { shallow } from "enzyme";

import Tags from "./Tags"
import OptionLayout from "../SectionLayout"
import List from "../../blocks/FlexibleContainer"


const props = {
    displayData: [],
}

it("Tags component exists", () => {
    const wrapper = shallow(<Tags {...props} />);
    expect(wrapper.exists()).toBe(true);
});

it("Tags component renders", () => {
    const wrapper = shallow(<Tags {...props} />);
    expect(wrapper).toMatchSnapshot();
});

it(`Tags should contain "List", "Tags", "OptionLayout"`, () => {
    const wrapper = shallow(<Tags {...props} />);

    expect(wrapper.find(List)).toHaveLength(1);
    expect(wrapper.find(OptionLayout)).toHaveLength(1);
});