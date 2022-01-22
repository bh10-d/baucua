import React from "react";
import Interactable from "./Interactable.component";
import './baucua.styles.css';

let lox = 0;
let loy = -370;


function reset(loxx,loyy){
  lox=loxx
  loy=loyy
  // console.log([lox,loy]);
}


const draggableOptions = {
  onmove: event => {
    const target = event.target;
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute("data-y")) || -390) + event.dy;

    // translate the element
    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px, " + y + "px)";

    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  }
};



class DragandDrop extends React.Component {
  constructor(props) {
    super(props);

    // this.handleDrop = this.handleDrop.bind(this)

    this.handleDrop = this.handleDrop.bind(this);
    this.state = {
      droppedItems: []
    };
  }

  handleDrop(event) {
    console.log("DROP", event);
  }

  render() {
    const that = this;

    return (
      <div className="App">
        <Interactable draggable={true} draggableOptions={draggableOptions} reset={reset(this.props.lox,this.props.loy)}>
          <div className="draggable drag-item">
            <p>Kéo đĩa ra đê</p>
          </div>
        </Interactable>
        {/* <Interactable draggable={true} draggableOptions={draggableOptions}>
          <div className="draggable drag-item">
            <p>Drag Item 2</p>
          </div>
        </Interactable> */}
      </div>
    );
  }
}

export default DragandDrop;
