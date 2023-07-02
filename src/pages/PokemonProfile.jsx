import React from "react";
import Navbar from "../components/NavBar";
import { Box, Container, Paper, Typography } from "@mui/material";
import TablePokemon from "../components/TablePokemon";

const PokemonProfile = ({ pokemonData }) => {

    const { name, sprites } = pokemonData;

    return (
        <div>
            <Navbar searchHide />
            <Container
                maxWidth="md"
            >
                <Paper elevation={3}>
                    <Box display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={5}>
                        <Typography variant="h3">
                            {name}
                        </Typography>
                        <Box 
                        display="flex"
                        m={6}>
                            <Box
                                component="img"
                                src={sprites.front_default}
                                width="110%"
                                height="110%"
                            />
                            <TablePokemon />
                        </Box>
                    </Box>
                    


                </Paper>


            </Container>
        </div>

    );
}

export default PokemonProfile;