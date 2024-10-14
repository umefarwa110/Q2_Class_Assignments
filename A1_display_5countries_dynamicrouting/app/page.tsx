import Link from "next/link"

export default function Contact()
{
    return(
        <>
        <h1>Greetings! This is Dynamic Routing Assignment by Ume-Farwa</h1>
        <h2>Countries List</h2>

        <Link href="/country/pakistan"> Pakistan</Link> &nbsp; &nbsp;| &nbsp;
        <Link href="/country/bangladesh"> Bangladesh</Link> &nbsp; &nbsp;| &nbsp;
        <Link href="/country/canada"> Canada</Link> &nbsp; &nbsp;| &nbsp;
        <Link href="/country/iran"> Iran</Link> &nbsp; &nbsp;| &nbsp;
        <Link href="/country/china"> China</Link> &nbsp; &nbsp;| &nbsp;
        </>
    )
}