import React from "react"
import PropTypes from "prop-types"
import Image from "../../blocks/Image"
import Container from "../../blocks/FlexibleContainer";


const App = ({ data, onSwitchImage, active }) => {
    return (
        <Container background={true} slider={true}>
            <button>{`<`}</button>
            <div>
                {
                    data.map(({ displayImage }, key) => <Image onClick={() => onSwitchImage(key)} active={key !== active} key={key}><img alt="me" src={displayImage} /></Image>)
                }
            </div>
            <button>></button>
        </Container>
    )
}

App.propTypes = {
    data: PropTypes.array.isRequired,
    active: PropTypes.number.isRequired,
    onSwitchImage: PropTypes.func.isRequired
}
export default App