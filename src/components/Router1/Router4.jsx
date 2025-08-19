import { useEffect } from "react";
import { Routes, useParams, useSearchParams } from "react-router-dom"

function Component1() {
    const {name} = useParams();
    //useParam
    return <h1>path parameter는 {name}입니다.</h1>
}

function Component2() {

    const [searchParam, setSearchParan] = useSearchParams()

    useEffect(()=> {
        const entries = searchParam.entries()
        let searchParamObj ={}
        for (const [key,values] of entries) {
            searchParamObj[key] = values
        }
        console.log(searchParamObj)
    })
    const nameParam = searchParam.get("name")
    console.log("name=>" , searchParam.getAll("address"))

    console.log("address =>" , )

    const onClickHandler = () => {
        setSearchParan((prev)=>{
            prev.set("address","busan")
            return prev;

        })
    }

    return(
        <>
            <div>
                <button onClick={onClickHandler}>
                    URL에 추가/변경</button>
            </div>
        </>
    )
}

function Router4() {
  return (
    <div>
        <Routes>
            {/* path에 콜론을 사용하면 해당 위치의 URL 일부를 name이라는 변수로 받겠다라는 의미*/}
            <Route path="/param1/:name"/>
            <Route path="/param2"/>
        </Routes>
    </div>
  )
}

export default Router4