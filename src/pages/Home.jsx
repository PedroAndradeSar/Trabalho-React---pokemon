import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import CardPokemon from "../components/CardPokemon";
import { Container, Grid } from "@mui/material";
import axios from "axios";
import Loading from "../components/Loading/Loading";



const Home = () => {

    const [showPokemons, setShowPokemons] = useState([])

    const getPokemons = () => {
        var endpoints = []
        for (var i = 1; i < 150; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);

        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setShowPokemons(res));

    }

    useEffect(() => {
        getPokemons();


    }, []);

    const filterPokemon = (name) => {
        var newFilterPokemon = [];
        if (name === "") {
            getPokemons()
        }
        for (var i in showPokemons) {
            if (showPokemons[i].data.name.includes(name)) {
                newFilterPokemon.push({ ...showPokemons[i] });
            }
        }

        setShowPokemons(newFilterPokemon);
    }


    return (
        <div>
            <Navbar filterPokemon={filterPokemon}  />
            <Container
                maxWidth="false"
            >
                <Grid container spacing={2}>
                    {showPokemons.length === 0 ? (<Loading />) : (
                         showPokemons.map((pokemon, index) => {

                            return (
                                <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                                    <CardPokemon
                                        sx={{ backgroundColor: "blue" }}
                                        name={pokemon.data.name}
                                        image={pokemon.data.sprites.front_default}
                                        types={pokemon.data.types}
                                    />
                                    {/* AQUI RECEBE O NAME POR PROS */}
                                </Grid>

                            )

                        })
                    )

                       
                    }



                </Grid>
            </Container>
        </div>
    );
}

export default Home;
