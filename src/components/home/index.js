import React from "react"
import Editor from "./Editor"
import Options from "./Options"
import images from "./constants/images"


class App extends React.Component {
    state = {
        data: images,
        displayData: [],
        displayImage: "",
        element: "",
        mouse: {
            x: 0,
            y: 0,
            startX: 0,
            startY: 0
        },
        index: 0,
        style: {},
        cursor: "default",

    }

    componentDidMount() {
        const { data } = this.state;
        const { displayData, displayImage } = data[0]
        this.setState({
            displayData,
            displayImage,
            index: 0
        })
    }

    onSwitchImage = (key) => {
        const { data, displayImage, displayData, index } = this.state;
        let newData = [...data]
        const newDataUpdate = {
            displayImage,
            displayData
        }
        newData.splice(index, 1, newDataUpdate)
        const newDisplayData = {
            ...data[key]
        }
        this.setState({ ...newDisplayData, index: key, data: newData })
    }

    setMousePosition = (e) => {
        let mouse = { ...this.state.mouse }
        var ev = e || window.event; //Moz || IE
        if (ev.pageX) { //Moz

            mouse.x = ev.pageX + window.pageXOffset;
            mouse.y = ev.pageY + window.pageYOffset;
        } else if (ev.clientX) { //IE

            mouse.x = ev.clientX + document.body.scrollLeft;
            mouse.y = ev.clientY + document.body.scrollTop;

        }
        return this.setState({ mouse })
    };

    handleClick = (e) => {
        const { cursor } = this.state
        if (cursor !== "default") {
            this.onSaveInstance()
        } else {
            this.onCreateNewInstance()
        }
    }

    onCreateNewInstance = () => {
        const { mouse, displayData } = this.state
        this[`myRef_${displayData.length}`] = React.createRef();
        mouse.startX = mouse.x;
        mouse.startY = mouse.y;
        let style = {
            left: mouse.x + 'px',
            top: mouse.y + 'px',
        }
        let element = <div className='rectangle' style={style} ref={this[`myRef_${displayData.length}`]}></div>
        this.setState({ cursor: "crosshair", element, mouse })
    }

    onSaveInstance = async () => {
        const { mouse: newMouse, displayData, } = this.state
        let mouse = { ...newMouse }
        this[`myRef_${displayData.length}`] = React.createRef();
        let style = {
            width: Math.abs(mouse.x - mouse.startX) + 'px',
            height: Math.abs(mouse.y - mouse.startY) + 'px',
            left: (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px',
            top: (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px',
        }

        let Element = () => <div className='rectangle' style={style} ref={this[`myRef_${displayData.length}`]} >
            <div className="top-header" onClick={this.onStopPropagation}>
                <div className="name">
                    <span>OBJ {displayData.length}</span>
                    <span className="cancel" onClick={() => this.onDelete(displayData.length)}>x</span>
                </div>
                <div>
                    <span className="flag">
                        0 Classes
                        </span>
                </div>
            </div>
        </div>


        let data = [...displayData, { Figure: Element, cord: mouse, style, number: `${displayData.length}` }]
        await this.setState({ cursor: "default", mouse, displayData: data, element: "" })
    }


    onStopPropagation = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }


    onDelete = (key) => {
        const { displayData } = this.state
        let data = [...displayData]
        data.splice(key, 1)

        const newDate = data.map(({ cord, style, number }, key) => {
            this[`myRef_${displayData.length}`] = React.createRef();

            let Element = () => <div className='rectangle' style={style} ref={this[`myRef_${key}`]} >
                <div className="top-header" onClick={this.onStopPropagation}>
                    <div className="name">
                        <span>OBJ {number}</span>
                        <span className="cancel" onClick={() => this.onDelete(key)}>x</span>
                    </div>
                    <div>
                        <span className="flag">
                            0 Classes
                        </span>
                    </div>
                </div>
            </div>

            return { Figure: Element, cord, style, number }
        })
        this.setState({ displayData: newDate })
    }


    handleMouseMove = async (e) => {
        let { displayData } = this.state
        const node = this[`myRef_${displayData.length}`] ? this[`myRef_${displayData.length}`].current : null
        await this.setMousePosition(e);
        if (node) {
            let { mouse, } = this.state
            node.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
            node.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
            node.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
            node.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
        }
    }

    render() {
        const { displayData, cursor, element, data, index, displayImage } = this.state
        return <>
            <Editor
                data={data}
                active={index}
                cursor={cursor}
                element={element}
                displayData={displayData}
                displayImage={displayImage}
                handleClick={this.handleClick}
                onSwitchImage={this.onSwitchImage}
                handleMouseMove={this.handleMouseMove}
                handleImageDimension={this.handleImageDimension}

            />
            <Options displayData={displayData} />
        </>;
    }
}
export default App