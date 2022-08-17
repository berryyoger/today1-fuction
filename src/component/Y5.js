import './Y5.css';
import { useState } from 'react';

function Y5() {
    const [info, setInfo] = useState({
        code: "",
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
        <div className="Y5">
            <div className="background5">
                <div className="modal5">
                    <span className="ask5">편지를 쓸 꽃병의</span>
                    <span className="ask25">비밀코드가 필요해요</span>
                    <span className="code5">비밀코드</span>
                    <input className="code" id='code' name='code' onChange={getValue}></input>
                    <button className="check5" onClick={sendValue}>확인!</button>
                </div>
            </div>
        </div>
    );
}

export default Y5;
