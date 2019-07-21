
import React from "react";
import { shallow } from "enzyme";

import { ToastContainer } from "react-toastify";
import Toast from "./ToastContainer"

it("Toast component exists", () => {
    const wrapper = shallow(<Toast />);
    expect(wrapper.exists()).toBe(true);
});

it("Toast component renders", () => {
    const wrapper = shallow(<Toast />);
    expect(wrapper).toMatchSnapshot();
});

it(`Toast should contain "ToastContainer" `, () => {
    const wrapper = shallow(<Toast />);

    expect(wrapper.find(ToastContainer)).toHaveLength(1);
});