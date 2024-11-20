import Link from "next/link";


export default function Header(){
    return(
      <>
        <div className="navigation">
            <ul className="nav-items">
                <li ><Link href="">Works</Link></li>
                <li ><Link href="">Blog</Link></li>
                <li ><Link href="">Contact</Link></li>
            </ul>
        </div>
      </>
    );
  }