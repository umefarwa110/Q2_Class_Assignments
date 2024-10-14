import Link from "next/link";

export default function Countryname({ params }: any) {

    const country_details: {

        name: string,
        capital: string,
        population: number;

    }[] = [
            {
                name: "Pakistan",
                capital: "Islamabad",
                population: 252364544
            },

            {
                name: "Bangladesh",
                capital: "Dhaka",
                population: 174701211
            },

            {
                name: "Canada",
                capital: "Ottawa",
                population: 38232593
            },

            {
                name: "Iran",
                capital: "Tehran",
                population: 91801846
            },

            {
                name: "China",
                capital: "Beijing",
                population: 1409670000
            },
        ]

    function find_country(country_url: string) {

        return country_details.find(c_name => c_name.name.toLowerCase() == country_url.toLowerCase());
    }

    let result = find_country(params.country_names);

    return (
        <div>
            {
                result ? (
                    <>
                        <h1>Country Name : {result.name} </h1>
                        <h1>Capital : {result.capital} </h1>
                        <h1>Population : {result.population} </h1>

                        <Link href="/">Back to Homepage</Link>
                    </>
                ) : (
                    <h1>Country Not Found</h1>
                )
            }

        </div>
    );
}