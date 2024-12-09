export default async function pokemons(){
    
    async function getPokemons(){
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        return data
    }

    
    const pokemons = await getPokemons()


    return (
        <>

            {pokemons.results.map(poke => (
                <p key={poke.name}>{poke.name}</p>
            ))}


        </>
    )
}