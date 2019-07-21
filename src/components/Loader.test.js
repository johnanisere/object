
import React from "react";
import { shallow } from "enzyme";

import Loader from "./Loader"
import { BeatLoader } from "react-spinners";
import ActivityContainer from "../blocks/ActivityContainer";

it("Loader component exists", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.exists()).toBe(true);
});

it("Loader component renders", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
});

it(`Loader should contain "ActivityContainer",  "BeatLoader", `, () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.find(BeatLoader)).toHaveLength(1);
    expect(wrapper.find(ActivityContainer)).toHaveLength(1);
});