import React from "react";
import Navbar from "../components/NavBar";
import { Box, Container, Typography } from "@mui/material";
import TablePokemon from "../components/TablePokemon";

const PokemonProfile = ({ pokemonData }) => {

    const {name, sprites} = pokemonData;

    return (
        <div>
            <Navbar searchHide />
            <Container
                maxWidth="md"
            >
                <Typography variant="h3">
                    {name}
                </Typography>
                <Box
                component="img"
                src={sprites.front_default}
                width={"50%"}
                />
                    

                <TablePokemon />
                
            </Container>
        </div>

    );
}

export default PokemonProfile;