import React from "react"
import PropTypes from "prop-types"
import Container from "../../blocks/FlexibleContainer"
import Objects from "./Objects"
import Classes from "./Classes"
import Tags from "./Tags"

const App = ({ displayData }) => {
    return (
        <Container background={true} height="100%" flex={1} direction="column">
            <Objects displayData={displayData} />
            <Classes />
            <Tags />
        </Container>
    )
}

App.propTypes = {
    displayData: PropTypes.array.isRequired,
}
export default App