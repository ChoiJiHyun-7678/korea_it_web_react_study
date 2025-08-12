import React, { useState } from 'react'

function SignupHome() {
    const [formValues, setFormValues] = useState({
        email : "",
        password : "",
    })
    const [error, setError] = useState({})
    const [isDisabled, setIfDisabled] = useState(true)
  return (
    <div>
        <div>
            <input type="eamil" />
        </div>
        <div>
            <input type="text" />
        </div>
    </div>
  )
}

export default SignupHome