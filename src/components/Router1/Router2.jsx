import React from 'react'

//하위라우트 (서브라우트)
// 특정 경로의 페이지안에서 또다른 내부경로에 따라

function Page1() {
    return (
        <>
            <div>
                <h1>Page1</h1>
                <Routes>
                    <Route path="/page1" element={<h1>페이지1입니다.</h1>}/>
                    <Route apth="/page2" element={<Page2/>}/>
                </Routes>
            </div>
        
        </>
    )
}

function Page2() {
    <>
        <div>
            <h1>페이지2입니다.</h1>
        </div>
    </>
}

function Router2() {
  return (
    <div>
        <header>
            <Link></Link>
            <Link></Link>
            <Link></Link>
            <Link></Link>
        </header>
        <Route>

            
        </Route>
    </div>
  )
}

export default Router2