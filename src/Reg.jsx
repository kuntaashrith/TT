import axios from "axios";
import { useState } from "react";
function Reg() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    })
    const changeName = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const submit = async() => {
        try {
            const res = await axios.post(
                "http://localhost:8080/reg",
                data
            )
            alert(res.data)
        }
        catch(xyz) {
            alert(xyz.response.data || "error")
        }
    }
    return(
        <>
        <h1>I am reg</h1>
        <input onChange={changeName} name="username" placeholder="username"/>
        <input onChange={changeName} name="email" placeholder="email"/>
        <input onChange={changeName} name="password" placeholder="password"/>
        <button onClick={submit}>Submit</button>
        </>
    )
}
export default Reg