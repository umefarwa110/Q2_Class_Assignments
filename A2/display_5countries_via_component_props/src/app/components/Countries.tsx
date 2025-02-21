export default function Countries({ country_info }: { country_info: { name: string, capital: string, population: number } | undefined }) {
    return (
        <>
            {country_info ? (
                <div style={{
                    color: "#481f02",
                    fontSize: "14px",
                    textAlign: "center",
                    fontFamily: "sans-serif",
                }}>
                    <h2>Country Name: {country_info.name}</h2>
                    <h2>Capital: {country_info.capital}</h2>
                    <h2>Population: {country_info.population}</h2>
                </div>
            ) : (
                <h1>Country Not Found</h1>
            )}
        </>
    );
}
