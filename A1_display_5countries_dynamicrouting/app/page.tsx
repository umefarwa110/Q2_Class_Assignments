import Link from "next/link"

export default function Contact()
{
    return(
        <>
        <h1>Greetings! This is Dynamic Routing Assignment by Ume-Farwa</h1>
        <h2>Countries List</h2>

        <Link href="/country/Pakistan"> Pakistan</Link> &nbsp; &nbsp;| &nbsp;
        <Link href="/country/Bangladesh"> Bangladesh</Link> &nbsp; &nbsp;| &nbsp;
        <Link href="/country/Canada"> Canada</Link> &nbsp; &nbsp;| &nbsp;
        <Link href="/country/Iran"> Iran</Link> &nbsp; &nbsp;| &nbsp;
        <Link href="/country/China"> China</Link> &nbsp; &nbsp;| &nbsp;
        </>
    )
}