import React from "react";


const SecondCounter = () => {
  return( <div className="justify-content-center align-items-center row bg-black p-5 m-2">
            <div className="col-1 bg-dark me-3" style = {{color: "white" ,fontSize: "80px" }}><i className="fa fa-clock"></i></div>
            <div className="col-1 bg-dark me-3" style = {{color: "white" ,fontSize: "80px"}}>1</div>   
            <div className="col-1 bg-dark me-3" style = {{color: "white" ,fontSize: "80px"}}>2</div>
            <div className="col-1 bg-dark me-3" style = {{color: "white" ,fontSize: "80px"}}>3</div>  
            <div className="col-1 bg-dark me-3" style = {{color: "white" ,fontSize: "80px"}}>4</div>
            <div className="col-1 bg-dark me-3" style = {{color: "white" ,fontSize: "80px"}}>5</div>  
            <div className="col-1 bg-dark me-3" style = {{color: "white" ,fontSize: "80px"}}>6</div>
            
         </div>
  )
}

export default SecondCounter;