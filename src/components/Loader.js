import React from "react";
import { BeatLoader } from "react-spinners";

import ActivityContainer from "../blocks/ActivityContainer";

const Loader = () => (
  <ActivityContainer>
    <BeatLoader size={9} color="rgb(4,167,0)" />
  </ActivityContainer>
);

export default Loader;
