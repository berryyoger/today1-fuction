import { Link } from 'react-router-dom';
import './Y43.css';

function Y43() {
// const [flower, setFlower] = useState()
//   const flowerList = ["수선화", "제비꽃", "수선화", "스위트피", "은방울꽃", "나리꽃", "제비고깔", "글라디올러스", "물망초", "금잔화", "국화", "포인세티아"]
//   const [flowerLink, setFlowerLink] = useState()

//   const [info, setInfo] = useState({
//     id: "",
//     birth: '',
//   });

//   const onChangeAccount = (e) => {
//     setInfo({
//       ...info,
//       [e.target.name]: e.target.value,
//     });
//     setFlower(flowerList[e.target.value - 1])
//     setFlowerLink(`img/` + flowerList[e.target.value - 1] +  `.png`)
//   }
    return (
        <div className="Y43">
            <div className="background43">
                <div className="modal43">
                    <span className="flowerSpan43">요한 님의 탄생화는</span>
                    <div className="flower43">
                        <p className="flowerP43">수선화</p>
                        <p className="flowerP243">에요</p>
                    </div>
                    <span className="ask43">이 꽃으로 편지를 쓸까요?</span>
                    <div className="circle43"></div>
                    <Link to="y44">
                        <button className="next43">다른 꽃 선택하기</button>
                    </Link>
                    <div className="dote43">
                        <nav className="dote142"></nav>
                        <nav className="dote242"></nav>
                        <nav className="dote342"></nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Y43;
