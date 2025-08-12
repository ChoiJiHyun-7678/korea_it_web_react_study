import React, { useEffect, useState } from 'react'

function Effect1() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [h1name, setH1Name] = useState("")
    const [h1Age, setH1Age] = useState("")

    const nameOnChangeHandler = (e) => {
        setName(e.target.value)
    };
    const ageOnChangeHandler = (e) => {
        setAge(e.target.value)
    }
    const nameOnChangeHandler = () => {
        setName(name)
        console.log(h1name)
    }
    const ageOnChangeHandler = () => {
        setAge(age)
        console.log(h1Age)
    }

    useEffect()
    
    return (
        <div>
            <h1>이름 : </h1>
            <h1>나이 : </h1>
            <input type="text" />
            <button>이름 확인</button>
            <input type="text" />
            <button>나이 확인</button>
        </div>
  )
}

export default Effect1