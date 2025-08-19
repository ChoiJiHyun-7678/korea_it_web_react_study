import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function Router3() {
    const location = useLocation();
    useEffect(()=>{
        console.log("경로 이동함")
        console.log(location.pathname)

        if(location.pathname === "/location/3") {
            //이 state는 URL에는 보이지 않지만 이동한 페이지에서 location.state로 값을수 있다.
            //로그인 후 이전 페이지로 돌려보내거나, 데이터를 숨겨서 전달할때 유용하다. 
            navigator("/location/3"), {
                state: {
                    name: "최지현",
                    age: 16,
                }
            }
        }
    }, [location.pathname])

    useEffect(()=> {
        //consloe.log.state는 navigate 함수를 통해 전달된 숨갸진 데이터를 가지고 있다. 
        console.log("location state=>" , location.state);
    }, [location.state])

    useEffect(()=> [
      console.log("쿼리 파라미터 변경됨!!")
    ])

    const backBtnHandler = () => {
      navigator(-1)
    }
  return (
    <div>
      <Link to={"/location/1"}>location1</Link>
      <Link to={"/location/2"}>location2</Link>
      <Link to={"/location/3"}>location3</Link>
      <Link to={"/location/3?name=최지현"}>location3</Link>
      <Link to={"/location/3?name=최시루"}>location3</Link>
      <button>뒤로가기</button>

      <Routes>
        <Route path="/location/1" element={<h1>location1</h1>} />
        <Route path="/location/2" element={<h1>location2</h1>} />
        <Route path="/location/3" element={<h1>location3</h1>} />
      </Routes>
    </div>
  );
}

export default Router3