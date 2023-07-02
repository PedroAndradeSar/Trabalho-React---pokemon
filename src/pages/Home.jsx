import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import CardPokemon from "../components/CardPokemon";
import { Container, Grid } from "@mui/material";
import axios from "axios";



const Home = () => {

    //mostrar pokemonss
    const [showPokemons, setShowPokemons] = useState([])


    //rotas
    const getPokemons = () => {
        //é para fazer um push no array, e reenderizar quando estiver tudo carregado
        var endpoints = []
        for (var i = 1; i < 150; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);

        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setShowPokemons(res));


        // axios
        //     .get("https://pokeapi.co/api/v2/pokemon?limit=150")
        //     .then((res) => setShowPokemons(res.data.results))
        //     .catch((error) => console.log(error));

    }
    //reinderizar rotas
    useEffect(() => {
        getPokemons();

        //Apagar
        console.log('====================================');
        console.log(showPokemons);
        console.log('====================================');

    }, []);

    const filterPokemon = (name) => {
        var newFilterPokemon = [];
        for (var i in showPokemons) {
            if (showPokemons[i].name.include(name)) {
                newFilterPokemon.push({ ...showPokemons[i] });
            }
        }

        //apagar o consolelog
        console.log('====================================');
        console.log(newFilterPokemon);
        console.log('====================================');

        //setShowPokemons(newFilterPokemon);
    }
    

    return (
        <div>
            <Navbar filterPokemon={filterPokemon}/>
            <Container
                maxWidth="false"
            >
                <Grid container spacing={2}>
                    {showPokemons.map((pokemon, index) => {

                        return (
                            <Grid item xs={2} key={index}>
                                <CardPokemon name={pokemon.data.name} image={pokemon.data.sprites.front_default} />
                                {/* AQUI RECEBE O NAME POR PROS */}
                            </Grid>

                        )

                    })}



                </Grid>
            </Container>
        </div>
    );
}

export default Home;
