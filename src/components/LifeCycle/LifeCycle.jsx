import { useEffect } from "react";

function LifeCycle() {
    useEffect(() => {
        console.log("마운트 됨")

        return () => {
            console.log("언마운트 됨")
        }
    }, [])
    return(
        <div></div>
    )
}