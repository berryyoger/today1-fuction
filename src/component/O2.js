import './O2.css';

function O2() {
    const okBtn = document.querySelector('button')
    const getCode = () =>{
        const code = document.querySelector('input').value
        console.log(code)
    }

    return (
        <div className="O2">
            <div className="background02">
                <div className="modal02">
                    <span className="pinkSpan102">편지를 쓸 꽃병의</span>
                    <span className="pinkSpan202">비밀코드가 필요해요</span>
                    <h3 className="inputName02">비밀코드</h3>
                    <input className="code02"></input>
                    <button className="okBtn02" onClick={getCode}>확인</button>
                </div>
            </div>
        </div>
    );
}

export default O2;
