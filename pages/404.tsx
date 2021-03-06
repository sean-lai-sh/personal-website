import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () =>{
    const router = useRouter();
    useEffect(() =>{
        setTimeout( ()=>{
            router.push('/');
        }, 3000);
    },[]);
    return(
        <div>
            <h1>404</h1>
            <a><Link href="/">
                <a>Go to home</a>
            </Link></a>
        </div>
    )
}


export default NotFound;