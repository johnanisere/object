import React from "react"
import PropTypes from "prop-types"
import { MdRemoveRedEye } from "react-icons/md";
import OptionLayout from "../SectionLayout"
import List from "../../blocks/FlexibleContainer"

const App = ({ displayData }) => {
    const title = <span><MdRemoveRedEye color="#8e8e93" /> {`  OBJECTS [${displayData.length}]`}</span>

    return (
        <OptionLayout title={title}>
            <List list="true" direction="column">
                {
                    displayData.map(({ number }, key) => <div key={key} className="list"><MdRemoveRedEye color="#8e8e93" />  OBJ {number}</div>)
                }
            </List>
        </OptionLayout>
    )
}
App.propTypes = {
    displayData: PropTypes.array.isRequired,
}
export default App