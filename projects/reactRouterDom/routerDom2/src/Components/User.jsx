import { useParams } from "react-router-dom"
const User = ()=>{
    const {userId} = useParams()
    return(
        <h1 className="text-center text-orange-700 text-xl py-10">User: {userId} </h1>
    )
}
export default User