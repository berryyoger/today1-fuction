import './Y22.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Y22() {
    const [info, setInfo] = useState({
        id: "",
        pw: '',
        nick: "",
      });

    const getValue = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  }
    const sendValue = (e) =>{
        console.log(info)
        e.preventDefault();
    }
    return (
        <div className="Y22">
            <div className="background22">
                <div className="modal22">
                    <form>
                        <span className="pinkSpan22">계정 만들기</span>
                        <p className="id22">아이디</p>
                        <input className="id221" id='id' name='id' onChange={getValue}></input>
                        <p className="pw22">비밀번호</p>
                        <input className="pw221" id='pw' name='pw' onChange={getValue}></input>
                        <p className="nick22">닉네임</p>
                        <input className="nick221" id='nick' name='nick' onChange={getValue}></input>
                        <Link to="Y23">
                            <button className="make22" onClick={sendValue}>만들기</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Y22;
