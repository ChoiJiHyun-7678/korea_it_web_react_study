import { useEffect, useState } from "react"

const API_URL = "https://jsonplaceholder.typicode.com/users/1"

function UserProfile() {
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {
        const fetchUser = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok){
                    throw new Error("데이터를 불러오지 못했습니다.")
                }    
                const responseData = await response.json();
                setUser(responseData)
            } catch (error){
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
    }, [])

    if (isLoading) {
        return <div>불러오는중 ....</div>
    }
     
    if(error) {
        return <div>에러 : </div>
    }


  return (
    <div>
        <div>
            <p>이름 : {user.name}</p>
            <p>이메일 : {user.email}</p>
            <p>전화번호 : {user.phone}</p>
        </div>
    </div>
  )
}

export default UserProfile