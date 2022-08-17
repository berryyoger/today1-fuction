import './Y41.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Y41() {
    const [info, setInfo] = useState({
        owner: "",
        month: '',
        day: '',
        flower: "",
      });
    const getValue = (e) => {
        setInfo({
          ...info,
          [e.target.name]: e.target.value,
        });
    }

    const sendValue = () =>{
        console.log(info)
    }
    
    return (
        <div className="Y41">
            <div className="background41">
                <div className="modal41">
                    <span className="owner41">편지의 주인공은?</span>
                    <input className="name41" id='owner' name='owner' onChange={getValue}></input>
                    <Link to="Y42">
                        <button className="next41" onClick={sendValue}>다음</button>
                    </Link>
                    <div className="dote41">
                        <nav className="dote141"></nav>
                        <nav className="dote241"></nav>
                        <nav className="dote341"></nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Y41;
