import { useState } from "react";


const About = () => {
    let [visible,setVisible] = useState(false);
    let [buttonText,setText] = useState("Show");
    const toVisible = () => {
        setVisible(!visible);
        setText(visible ? "Show Info" : "Hide Info");
    };

    return (
        <div>
            <h1>About</h1>
            <h3>Carlos Lopez</h3>
            {visible? <h4>carloslopez@gmail.com</h4>:<p>Click on the button below</p>}
            <button onClick={toVisible} class="btn btn-info">{buttonText} </button>
        </div>
    )

};

export default About;
