/**
 * Jsx 란 ?
 * 자바스크립트 와 html을 결합한 문법
 */


function BasicJsx() {
    const jsx1 = (
        <div>
            <p>JSX의 특징</p>
            <input type="text" />
        </div>
    );

    //2. 두개 이상의 태그는 하나의 태그로 감싸야한다.
    const jsx2 = (
        <div>
            <div></div>
            <div></div>
        </div>
    )

    //3. 변수 상수 리스트 값 등을 표현하려면 {}로 감싸서 표현한다.
    //단, 자바스크립트 표현식만 들억라수 있다.
    //if, for, while 등 대신해 map, filter, 삼향 연산자 등을 사용한다
    const name = "최지현"
    const age = 22;
    const jsx3 = (
        <div>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{age > 20 ? "성인":"미성년자"}</h3>
        </div>
    )
    //4. 두개 이상의 태그는 하나로 감싸야한다 라고 함
    //    이때, 그룹을 위해 만들어진 탣그가 있다.
    const jsx4 = (
        <>
            <div></div>
            <div></div>
            <div></div>
        </>
    )

    const jsx5 = (
        <>
        <div>dfs</div>,
        <div>sfsdf</div>,
        <div>fsdfsd</div>,
        <div>sfdfs</div>,
        </>
    )
    const jsx5 = ["dfs", "sfsdf", "fsdfsd", "sfdfs"];
  return (
    <div>
        {jsx1}
        {jsx3}
        {jsx5}
    </div>
  )
}

export default BasicJsx