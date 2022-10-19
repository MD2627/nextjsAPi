import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Navbar from "../components/Navbar"
const Errorpage = () => {
    const router = useRouter()
    useEffect(() => {
setTimeout(() => {
   router.push("/") 
}, 2000);
    }, [])
    
  return (
    <>
    <Navbar/>
    <h1>404 | not found your enter rong url</h1>
    {/* <Link href="/"><a>Home</a></Link> */}
    <button onClick={()=>router.push("/")}>Home</button>
    </>
  )
}

export default Errorpage