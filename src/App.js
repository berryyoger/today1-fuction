import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LP from './component/LP';
import O1 from './component/O1';
import O2 from './component/O2';
import O3 from './component/O3';
import O4 from './component/O4';
import O5 from './component/O5';
import O52 from './component/O52';
import O61 from './component/O61';
import O62 from './component/O62';
import Y21 from './component/Y21';
import Y22 from './component/Y22';
import Y23 from './component/Y23';
import Y31 from './component/Y31';
import Y32 from './component/Y32';
import Y41 from './component/Y41';
import Y42 from './component/Y42';
import Y43 from './component/Y43';
import Y44 from './component/Y44';
import Y5 from './component/Y5';
import Y6 from './component/Y6';
import Y71 from './component/Y71';
import Y91 from './component/Y91';
import Y92 from './component/Y92';
import Y102 from './component/Y102';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path='/'>
                        <LP></LP> {/*로딩*/}
                    </Route>
                    <Route  path="/01">
                        <O1/> {/*완료*/}
                    </Route>
                    <Route  path="/02">
                        <O2/> {/*value 보내기 필요*/}
                    </Route>
                    <Route  path="/03">
                        <O3/> {/*value 보내기 필요, where to go?*/}
                    </Route>
                    <Route  path="/04">
                        <O4/>{/*보류*/}
                    </Route>
                    <Route  path="/05">
                        <O5/> {/*편지열기*/}
                    </Route>
                    <Route  path="/052">
                        <O52/> {/*편지열기2*/}
                    </Route>
                    <Route  path="/061">
                        <O61/>{/*폰트 적용 필요, 디자인 수정 필요*/}
                    </Route>
                    <Route  path="/062">
                        <O62/>{/*디자인 미적용*/}
                    </Route>
                    <Route  path="/Y21">
                        <Y21/> {/*value 보내기 필요, where to go?, input focus때 outline-color 수정 필요 */}
                    </Route>
                    <Route  path="/Y22">
                        <Y22/> {/*value 보내기 필요, Link 오류 해결 필요*/}
                    </Route>
                    <Route  path="/Y23">
                        <Y23/> {/*계정 생성 안내*/}
                    </Route>
                    <Route  path="/Y31">
                        <Y31/> {/*완료*/}
                    </Route>
                    <Route  path="/Y32">
                        <Y32/> {/*overflow, 꽃병 추가*/}
                    </Route>
                    <Route  path="/Y41">
                        <Y41/> {/*라우터 연결 필요, value 전송 문의*/}
                    </Route>
                    <Route  path="/Y42">
                        <Y42/> {/*라우터 연결 필요, 월별 최대 일 수 다르게 조정 필요*/}
                    </Route>
                    <Route  path="/Y43">
                        <Y43/> {/*꽃 추천 적용 필요*/}
                    </Route>
                    <Route  path="/Y44">
                        <Y44/>{/*꽃 선택*/}
                    </Route>
                    <Route  path="/Y5">
                        <Y5/> {/*라우터 연결 필요*/}
                    </Route>
                    <Route  path="/Y6">
                        <Y6/> {/*편지쓰기 적용*/}
                    </Route>
                    <Route  path="/Y71">
                        <Y71/>
                    </Route>
                    <Route  path="/Y91">
                        <Y91/> {/*디자인 미적용*/}
                    </Route>
                    <Route  path="/Y92">
                        <Y92/> {/*디자인 미적용*/}
                    </Route>
                    {/* <Y102></Y102> */}
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
