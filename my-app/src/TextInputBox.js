import { useState } from 'react'
import '../src/css/TextInputBox.css'
import SubmitBtn from './SubmitBtn'

function TextInputBox() {
    const [summary,Setsummary] = useState("");
    const [InText,SetIntext] = useState("");

    return <div className="card">
        <div className="tools">
            <div className="circle">
                <span className="red box"></span>
            </div>
            <div className="circle">
                <span className="yellow box"></span>
            </div>
            <div className="circle">
                <span className="green box"></span>
            </div>
        </div>
        <div className="card__content">
             <textarea required="" type="text" placeholder="Your Text" className="InputText" value={InText} onChange={(e) => SetIntext(e.target.value)} ></textarea>
             <SubmitBtn InText={InText} Setsummary={Setsummary}></SubmitBtn>
             <textarea required="" type="text" readOnly={true} className="OutText" value={summary}></textarea>
        </div>
    </div>
}

export default TextInputBox