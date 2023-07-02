import React from "react";
import Navbar from "../components/NavBar";
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { showTypes } from "../components/TiposPokemons";

const PokemonProfile = ({ pokemonData }) => {

    const { name, sprites, height, weight, types } = pokemonData;

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
                         
                        </Box>
                        <Box>
                            <TableContainer
                                component={Paper}
                                sx={{ height: "fit-content", maxWidth: "250px", boxShadow: "none" }}
                            >
                                <Table aria-label="a dense table">
                                    <TableBody>
                                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                            <TableCell>Height </TableCell>
                                            <TableCell>{height + "cm"}</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                            <TableCell>Weight</TableCell>
                                            <TableCell>{weight + "g"}</TableCell>
                                        </TableRow>
                                        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                            <TableCell>Tipo</TableCell>
                                            <TableCell>{showTypes(types)}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>



                </Paper>


            </Container>
        </div>

    );
}

export default PokemonProfile;