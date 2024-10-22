import Link from "next/link";
import Countries from "@/app/components/Countries";

export default function Countryname({ params }: { params: { country_names: string } }) {

    const country_details: {

        name: string,
        capital: string,
        population: number;

    }[] = [
            {
                name: "Malaysia",
                capital: "Kuala Lumpur",
                population: 33938221
            },

            {
                name: "Finland",
                capital: "Helsinki",
                population: 5619123
            },

            {
                name: "Iceland",
                capital: "Reykjavík",
                population: 383726
            },

            {
                name: "Japan",
                capital: "Tokyo",
                population: 123890000
            },

            {
                name: "Turkey",
                capital: "Ankara",
                population: 85372377
            },
        ]

    function find_country(country_url: string) {

        return country_details.find(c_name => c_name.name.toLowerCase() == country_url.toLowerCase());
    }

    const result = find_country(params.country_names);

    return (
        <div>

            <Countries country_info={result} />

            <div style={{ textAlign: "center" }}>
                <Link style={{
                    color: "black",
                    textDecoration: "none",
                    backgroundColor: "bisque",
                    padding: "5px",
                }}
                    href="/">Return to Homepage</Link>
            </div>

        </div>
    );
}