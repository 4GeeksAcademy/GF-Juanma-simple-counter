import React from "react";


const SecondCounter = (props) => {

  return (<div className="justify-content-center align-items-center row bg-black p-5 m-2">
    <div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}><i className="fa fa-clock"></i></div>
    <div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}></div>
    <div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}>1</div>
    <div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}>1</div>
    <div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}>1</div>
    <div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}>1</div>
    <div className="col-1 bg-dark me-3" style={{ color: "white", fontSize: "80px" }}>1</div>

  </div>
  )
}

export default SecondCounter;