import React from "react"
import PropTypes from "prop-types"
import ImageSlider from "./ImageSlider"
import Container from "../../blocks/FlexibleContainer";


class App extends React.Component {
    render() {
        const { handleMouseMove, handleClick, displayData, cursor, element, data, onSwitchImage, active, displayImage } = this.props;
        return (
            <Container background={true} height="100%" flex={3} border={true} direction="column">
                <Container header={true} />
                <Container editor={true} cursor={cursor} >

                    <figure className="img-holder" onClick={handleClick} onMouseMove={handleMouseMove} >
                        <img src={displayImage} alt="The Pulpit Rock" />

                        {
                            displayData.map(({ Figure }, key) => <Figure key={key} ></Figure>)
                        }
                        {element && element}
                    </figure>
                </Container>
                <ImageSlider data={data} onSwitchImage={onSwitchImage} active={active} />
            </Container>
        );
    }
}


App.propTypes = {
    onSwitchImage: PropTypes.func.isRequired,
    handleMouseMove: PropTypes.func.isRequired,
    displayImage: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    displayData: PropTypes.array.isRequired,
    cursor: PropTypes.string.isRequired,
    active: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    element: PropTypes.node,
}
export default App