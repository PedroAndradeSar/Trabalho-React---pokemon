import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import CardPokemon from "../components/CardPokemon";
import { Box, Container, Grid, containerClasses } from "@mui/material";
import axios from "axios";
import Loading from "../components/Loading/Loading";
import { useNavigate } from "react-router-dom";



const Home = ({setPokemonData}) => {

    const [showPokemons, setShowPokemons] = useState([])
    
    const navigate = useNavigate()

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

    const handlerPokemon = (pokemonData) => {
        setPokemonData(pokemonData) 
        navigate("/profile")
    }


    return (
        <div>
            <Navbar filterPokemon={filterPokemon} />
            <Container
                maxWidth="false"
            >
                <Grid container spacing={2}>
                    {showPokemons.length === 0 ? (<Loading />) : (
                        showPokemons.map((pokemon, index) => {

                            return (
                                <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                                    <Box onClick={() => handlerPokemon(pokemon.data)} >
                                        <CardPokemon
                                            sx={{ backgroundColor: "blue" }}
                                            name={pokemon.data.name}
                                            image={pokemon.data.sprites.front_default}
                                            types={pokemon.data.types}
                                        />
                                    </Box>
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
