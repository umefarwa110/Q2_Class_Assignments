import Link from "next/link"

export default function Contact() {
    return (
        <>
            <h1 style={{
                backgroundColor: "#f5c8a2",
                color: "#481f02",
                fontSize: "24px",
                padding: "10px",
                textAlign: "center",
                fontFamily: "sans-serif"
            }}
            >This is Dynamic Routing Assignment by Making Component and Using Props</h1>

            <h2 style={{
                color: "#481f02",
                fontSize: "24px",
                textAlign: "center",
                fontFamily: "sans-serif",
            }}
            >Select your Desired Country</h2>

            <div style={{ textAlign: "center" }}>
                <Link style={{
                    color: "black",
                    textDecoration: "none",
                    backgroundColor: "bisque",
                    padding: "5px"
                }}
                    href="/country/Malaysia"> Malaysia</Link> &nbsp; &nbsp; &nbsp;

                <Link style={{
                    color: "black",
                    textDecoration: "none",
                    backgroundColor: "bisque",
                    padding: "5px"
                }}
                    href="/country/Finland"> Finland</Link> &nbsp; &nbsp; &nbsp;

                <Link style={{
                    color: "black",
                    textDecoration: "none",
                    backgroundColor: "bisque",
                    padding: "5px"
                }}
                    href="/country/Iceland"> Iceland</Link> &nbsp; &nbsp; &nbsp;

                <Link style={{
                    color: "black",
                    textDecoration: "none",
                    backgroundColor: "bisque",
                    padding: "5px"
                }}
                    href="/country/Japan"> Japan</Link> &nbsp; &nbsp; &nbsp;

                <Link style={{
                    color: "black",
                    textDecoration: "none",
                    backgroundColor: "bisque",
                    padding: "5px"
                }}
                    href="/country/Turkey"> Turkey</Link> &nbsp; &nbsp;
            </div>
        </>
    );
};