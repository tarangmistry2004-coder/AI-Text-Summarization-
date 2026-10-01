// import React from "react";
import { useState } from "react";
import './component1.css';

const mylist = ['red', 'blue', 'yellow', 'black','gray','green','purple','aqua','maroon','white'];



function Component1() {
    const [bgcolor,bgcolorstate] = useState("white");
    const btnOnClick = (item) => {
        // alert(`you click ${item} !!!`);
        bgcolorstate(item)
    }

    // return <ol>
    //     {mylist.map((item, idx) =>

    //         <li key={idx}>{item}</li>
    //     )}
    // </ol>

    return <div className="com1" style={{backgroundColor : bgcolor,borderColor : 'black'}}>
        {mylist.map(item =>
            <button onClick={() => btnOnClick(item)} className="colorBtn">
                {item}
            </button>
        )}
    </div>
}

export default Component1