import { useState } from 'react';
import './Y32.css';

function Vase({ name, date }) {
    return <div className="box32">
    <p className="vaseOwner32">{name} 님의 꽃병</p>
    <p id="ownerDay321" className="ownerDay32"> {date}</p>
    <div className="editBtn32">
        <img className="editBtnImg32"></img>
    </div>
    <div className='deleteBtn32'>
        <img className="deleteBtnImg32"></img>
    </div>
</div>;
}
function Y32() {
    const [vases, setVases] = useState([
        {name: "시은",
         birth: "2022.01.01"},
        {name: "정욱",
         birth: "2004.03.31"}
    ]);
    
    return (
        <div className="Y32">
            <div className="background32">
                <div className="modal32">
                    <div className="arrow321"></div>
                    <div className="arrow322"></div>
                    <div className="line321"></div>
                    <div className="nav32">
                        <img className="profile32"></img>
                        <div className="bar32"></div>
                        <img className="flower321"></img>
                        <img className="flower322"></img>
                        <img className="flower323"></img>
                        <img className="flower324"></img>
                        <img className="flower325"></img>
                    </div>
                    <p className="username32">오로라</p>
                    <button className="addVaseBtn32">꽃병추가</button>
                    <div className="container32">
                        <div className='vaseGroup'>
                            <div className="box32">
                                <p className="vaseOwner32">요한 님의 꽃병</p>
                                <p id="ownerDay321" className="ownerDay32"> 2022.03.23</p>
                                <div className="editBtn32">
                                    <img className="editBtnImg32"></img>
                                </div>
                                <div className='deleteBtn32'>
                                    <img className="deleteBtnImg32"></img>
                                </div>
                            </div>
                            {vases.map((info) => (<Vase name={info.name} date={info.birth} />))}
                        </div>
                        <div className="line322"></div>
                        <div className="bottomBtnContainer32">
                            <button id="listBtn32" className="bottomBtn32">
                                <img className="bottomBtnImg32"></img>
                            </button>
                            <button id="questionBtn32" className="bottomBtn32">
                                <img className="bottomBtnImg32"></img>
                            </button>
                            <button id="logoutBtn32">
                                <img id="logoutBtnImg32" className="bottomBtnImg32"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Y32;
