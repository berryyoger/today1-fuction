import { Link } from 'react-router-dom';
import './O1.css';

function O1() {
    
    return (
        <div className="O1">
            <div className="background01">
                <Link to="/Y21" style={{textDecoration: 'none'}}>
                    <div className="login01">
                        <span className="loginwhite01">계정이 있어요!</span>
                        <span className="loginbrown101">로그인하고</span>
                        <span className="loginbrown201">시작하기</span>
                    </div>
                </Link>
                <Link to="/02" style={{textDecoration: 'none'}}>
                    <div className="start01">
                        <span className="startwhite01">계정이 없어도 편지를 쓸 수 있어요!</span>
                        <span className="startbrown101">바로</span>
                        <span className="startbrown201">시작하기</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default O1;
