"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";

const Header = () => {

const  [clicked, setClicked] = useState(false)
const handleMenu=()=>{
if(clicked === false){
    
    setClicked(true)
}else{
    setClicked(false)

}

}

  return (
    <>
    
    <header className={clicked? "Mobile":"hideHeader"}>
{/* logo Div */}
<div>
    <Image src="/image/back.jpg" width={100} height={110} alt="Logo"/>
</div>


{/* Navigation Bar  */}
        <nav>
        <ul onClick={() => handleMenu()}>
  <li className="clickable-item"><Link href="/" className="Link">Home</Link></li>
  <li className="clickable-item"><Link href="/about" className="Link">About</Link></li>
  <li className="clickable-item"><Link href="/services" className="Link">Services</Link></li>
</ul>
        </nav>
        
{/* contact us button */}
<div className="contact-div">
    <button className="button3"><Link href="/contact" className="Link">Contact Us</Link></button>    
</div>

    </header>

<MdMenuOpen onClick={()=>handleMenu()} className={clicked? "menu-icon1":"menu-icon2"}/>

  
 
    </>
  )
}

export default Header
