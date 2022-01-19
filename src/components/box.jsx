import React, {useState} from "react";

const Box = props => {
    console.log("Props from box.js", props)
    const { boxColors } = props;

    return(
        <div>
            {
                boxColors.map( (box, idx) => {
                    return (
                    <div key= {idx} style={{display: "inline-block", height: "100px", width: "100px", margin: "20px", backgroundColor: box.color}} ></div>
                    )
                })
            }
        </div>
    );

};

export default Box;