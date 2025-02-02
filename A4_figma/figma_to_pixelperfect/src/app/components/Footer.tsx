import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
    return (
    <div className="main_footer">
        <div className="icons">
            <Image src="/fb.png" alt="facebook" width={30} height={30}></Image>
            <Image src="/insta.png" alt="facebook" width={30} height={30}></Image>
            <Image src="/twitter.png" alt="facebook" width={30} height={30}></Image>
            <Image src="/in.png" alt="facebook" width={30} height={30}></Image>
        </div>
        
        <p>Copyright ©2020 All rights reserved </p>
    </div>
    )
}