
import React from "react";
import { shallow } from "enzyme";

import SectionLayout from "./SectionLayout"
import SectionLayoutConatiner from "../blocks/sectionLayout";

it("SectionLayout component exists", () => {
    const wrapper = shallow(<SectionLayout><div /></SectionLayout>);
    expect(wrapper.exists()).toBe(true);
});

it("SectionLayout component renders", () => {
    const wrapper = shallow(<SectionLayout><div /></SectionLayout>);
    expect(wrapper).toMatchSnapshot();
});

it(`SectionLayout should contain "SectionLayoutContainer",  "span","" `, () => {
    const wrapper = shallow(<SectionLayout><div /></SectionLayout>);

    expect(wrapper.find('div')).toHaveLength(2);
    expect(wrapper.find(SectionLayoutConatiner)).toHaveLength(1);
    expect(wrapper.find(SectionLayoutConatiner.Header)).toHaveLength(1);
});