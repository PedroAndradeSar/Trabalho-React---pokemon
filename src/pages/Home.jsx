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
        for (var i = 1; i < 50; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            
        }

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setShowPokemons(res));
                return{
            response
        }


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




    return (
        <div>
            <Navbar />
            <Container
                maxWidth="false"
            >
                <Grid container>
                    {showPokemons.map((pokemon, index) => {

                        return (
                            <Grid item xs={3} key={index}>
                                <CardPokemon name={pokemon.data.name} image={pokemon.data.sprites.fron_default} />
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