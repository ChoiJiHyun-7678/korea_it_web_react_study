/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react'
import { Routes, useNavigate } from 'react-router-dom';

function Router() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate
  // react router dom
  // 리엑트 - 싱글페이지 어플리케이션
  //  ㅠㅔ이지의 주소나 링크를 클릭했을때 페이지 전체를 새로고침하지 않고 주소에 맞는 특징 컴포넌트만
  // 보여주며 마치 여러 페이지가 있는 것처럼 동작하는것

  return (
    <div>
      <header>
        <a href={"/color/red"}></a>
        <a href={"/colot/blue"}></a>
        <a href={"/color/orange"}></a>
        <div>
          <h1>{count}</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
        </div>
      </header>
      {/* <Routes>는 여러 Route들을 감싸는 영역 */}
      {/* <Route>는 특징 결로와 그 겨올에서 보여줄 컴포넌트를 이어주는 역할 */}
      {/* 브라우저의 주소창이 path와 일치하는 라우트를 해당 컴포넌트를 화면에 띄워줌 */}
      {/* 단 라우츠안에 있는 여러 Route중 path가 일치하는거 하나만 띄워줌 */}
      <Routes>
        <Route path="/color/blue" element={<mian css={mian("red")}></mian>} />
        <Route path="/color/blue" element={<mian css={mian("blue")}></mian>} />
      </Routes>
    </div>
  );
}

export default Router