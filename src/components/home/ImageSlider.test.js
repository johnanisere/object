
import React from "react";
import { shallow } from "enzyme";

import ImageSlider from "./ImageSlider"
import Container from "../../blocks/FlexibleContainer";


const props = {
    data: [],
    active: 1,
    onSwitchImage: () => { }
}

it("ImageSlider component exists", () => {
    const wrapper = shallow(<ImageSlider {...props} />);
    expect(wrapper.exists()).toBe(true);
});

it("ImageSlider component renders", () => {
    const wrapper = shallow(<ImageSlider {...props} />);
    expect(wrapper).toMatchSnapshot();
});

it(`ImageSlider should contain "Container",  "ImageSlider", `, () => {
    const wrapper = shallow(<ImageSlider {...props} />);

    expect(wrapper.find('button')).toHaveLength(2);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find(Container)).toHaveLength(1);
});