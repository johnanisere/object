
import React from "react";
import { shallow } from "enzyme";

import Editor from "./Editor"
import ImageSlider from "./ImageSlider"
import Container from "../../blocks/FlexibleContainer";

const props = {
    handleMouseMove: () => { },
    onSwitchImage: () => { },
    displayImage: "",
    handleClick: () => { },
    displayData: [],
    cursor: "",
    data: [],
    active: 1,
}

it("Editor component exists", () => {
    const wrapper = shallow(<Editor {...props} />);
    expect(wrapper.exists()).toBe(true);
});

it("Editor component renders", () => {
    const wrapper = shallow(<Editor {...props} />);
    expect(wrapper).toMatchSnapshot();
});

it(`Editor should contain "Container",  "ImageSlider", `, () => {
    const wrapper = shallow(<Editor {...props} />);

    expect(wrapper.find('figure')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find(Container)).toHaveLength(3);
    expect(wrapper.find(ImageSlider)).toHaveLength(1);
});