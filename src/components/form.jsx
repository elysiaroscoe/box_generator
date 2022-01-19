import React, {useState} from "react";

const Form = props => {
    console.log("props from form.jsx", props);
    const [color, setColor] = useState("");

    const sendForm = e => {
        e.preventDefault();
        const newBoxColor = {color}
    
    
    //function from App.js to add newBoxColor to currentColor array
    props.addBox(newBoxColor);

    setColor("");
    }

    const handleColor = e => {
        setColor(e.target.value);
    }

    return(
        <div>
            <form onSubmit={sendForm}>
                <label>Pick a color:</label>
                <input onChange= {handleColor} type="text" value= {color} />
                <button>Add Box</button>
            </form>
        </div>
    )
};



export default Form;