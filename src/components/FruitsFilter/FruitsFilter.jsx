import { useState } from "react";

const fruite = [
    "Apple",
    "Banana",
    "Cherry",
    "Grape",
    "Orange",
    "Strawberry",
    "Watermelon",
];

function FruitsFilter() {
    const [filterFruits, setFilterFruits] = useState(fruite);
    const [inputvalue, setInputvalue] = useState("")

    const OnChangeHandle = (e) => {
      console.log(e.target.value)
      const letter = e.target.value.toLowerCase()

      const filter = fruite.filter((fruit) =>
        fruit.toLowerCase().includes(letter)
      )
      setFilterFruits(filter)
    }



  return (
    <div>
        <input type="text" onChange={OnChangeHandle}/>
        <title>과일검색</title>
        <ul>
            {filterFruits.map((fruite, index)=>(
                <li key={index}>{fruite}</li>
            ))}
        </ul>
    </div>

  )
}


export default FruitsFilter


//input하나 만들고 ul하나 만들고 input에 과일이름을 검색해서 필터를 커친뒤에 li로 출력
//최초에는 전체과일을 보여주고 내가 입력을 할때마다 즉시 filter를 거쳐서 li로 보여주기
//대소문자 상관없이