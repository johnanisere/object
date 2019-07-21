import React from "react"
import Menu from "../blocks/menu"
import { FaExpand, FaEllipsisH, FaRegHandPaper, FaSistrix } from "react-icons/fa";

const App = () => <Menu>
    <span className="active">
        <FaExpand />
    </span>
    <span className="more">
        <FaEllipsisH />
    </span>
    <span>
        <FaSistrix />
    </span>
    <span>
        <FaRegHandPaper />
    </span>

</Menu>

export default App