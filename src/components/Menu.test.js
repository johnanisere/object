
import React from "react";
import { shallow } from "enzyme";

import Menu from "./Menu"
import MenuContainer from "../blocks/menu"
import { FaExpand, FaEllipsisH, FaRegHandPaper, FaSistrix } from "react-icons/fa";

it("Menu component exists", () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.exists()).toBe(true);
});

it("Menu component renders", () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper).toMatchSnapshot();
});

it(`Menu should contain "MenuContainer",  "span","" `, () => {
    const wrapper = shallow(<Menu />);

    expect(wrapper.find(FaExpand)).toHaveLength(1);
    expect(wrapper.find(FaSistrix)).toHaveLength(1);
    expect(wrapper.find(FaEllipsisH)).toHaveLength(1);
    expect(wrapper.find(MenuContainer)).toHaveLength(1);
    expect(wrapper.find(FaRegHandPaper)).toHaveLength(1);
});