import './stylesheet/style.css';
import Link from "next/link"


export default function Contact() {
    return (
        <>
            <h1>This is Dynamic Routing Assignment by Making Component and Using Props</h1>
            
            <h2 >Select your Desired Country</h2>

            <div className="list">
                <a href="/country/Malaysia"> Malaysia</a> &nbsp; &nbsp; &nbsp;
                
                <a href="/country/Finland"> Finland</a> &nbsp; &nbsp; &nbsp;

                <a href="/country/Iceland"> Iceland</a> &nbsp; &nbsp; &nbsp;

                <a href="/country/Japan"> Japan</a> &nbsp; &nbsp; &nbsp;

                <a href="/country/Turkey"> Turkey</a> &nbsp; &nbsp; &nbsp;

                {/* <Link href="/country/Finland"> Finland</Link> &nbsp; &nbsp; &nbsp;
                <Link href="/country/Iceland"> Iceland</Link> &nbsp; &nbsp; &nbsp;
                <Link href="/country/Japan"> Japan</Link> &nbsp; &nbsp; &nbsp;
                <Link href="/country/Turkey"> Turkey</Link> &nbsp; &nbsp; */}
            </div>
        </>
    );
};

