import { useEffect, useRef } from "react"

function DomRef() {
    const inputRef = useRef()

    useEffect(() => {
        console.log(inputRef.current)
        inputRef.current.focus();
    }, []);

    return(
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default DomRef