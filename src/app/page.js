
"use client" ;

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

export default  function Home() {

  const auth =  useAuth();
  return <>   
           <h1>Public Home Page</h1>
           <header>
              <nav>
                {auth ? (
                  <p>logged in </p>
                ) : (
                  <Link href="/login">Login</Link>
                )}
              </nav>
          </header>
  </>
}



