import './Y42.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Y42() {
    const [info, setInfo] = useState({
        owner: "",
        month: '',
        day: '',
        flower: "",
      });
    const [hidden, setHidden] = useState()
    const [febHidden, setFebHidden] = useState()

    const hide = () =>{
        setHidden({display:'none'})
    }

    const febHide = () =>{
        setFebHidden({display:'none'})
    }

    const getValue = (e) => {
        setInfo({
          ...info,
          [e.target.name]: e.target.value,
        });
        hiding()
    }

    const hiding = () =>{
        if(info.month==4||info.month==6||info.month==9||info.month==11){
            hide()
            console.log("잘돼유")
        }
        else if(info.month=2){
            hide()
            febHide()
            console.log("잘돼유?")
        }
    }
    
    const sendValue = () =>{
        console.log(info)
    }
    return (
        <div className="Y42">
            <div className="background42">
                <div className="modal42">
                    <span className="birth42">요한 님의 생일은?</span>
                    <div className="date42">
                        <select className="month42" type="number" id='month' name='month' onChange={getValue}>
                            <option value={''}></option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                        </select>
                        <span className="monthSpan42">월</span>
                        <select className="day42" type="number" id='day' name='day' onChange={getValue}>
                            <option value={''}></option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28} style={febHidden}>28</option>
                            <option value={29} style={febHidden}>29</option>
                            <option value={30} style={febHidden}>30</option>
                            <option value={31} style={hidden}>31</option>
                        </select>
                        <span className="daySpan42">일</span>
                    </div>
                    <Link to="Y43">
                        <button className="next42" onClick={sendValue}>다음</button>
                    </Link>
                    <div className="dote42">
                        <nav className="dote142"></nav>
                        <nav className="dote242"></nav>
                        <nav className="dote342"></nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Y42;
