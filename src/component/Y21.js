import './Y21.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Y21() {
    const [info, setInfo] = useState({
        id: "",
        pw: '',
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
        <div className="background21">
            <div className="modal21">
                <span className="pink">꽃병을 만들려면</span>
                <span className="pink2">로그인이 필요해요</span>
                <p className="id21">아이디</p>
                <input className="id211" id='id' name='id' onChange={getValue}></input>
                <p className="pw21">비밀번호</p>
                <input className="pw211" id='pw' name='pw' onChange={getValue}></input>
                <Link to="03">
                  <button className="login21" onClick={sendValue}>로그인</button>
                </Link>
                <Link to="Y22">
                  <button className="nonAcc">계정이 없다면?</button>
                </Link>
            </div>
        </div>
    );
}

export default Y21;
