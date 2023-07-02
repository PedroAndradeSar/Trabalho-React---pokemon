import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function TablePokemon(pokemonData) {


    return (
        <TableContainer 
        component={Paper}
        sx={{ height: "fit-content", maxWidth: "250px", boxShadow: "none" }}>
            <Table size="small" aria-label="simple table">
           
                <TableBody>

                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell>Altura</TableCell>
                        <TableCell>
                            {pokemonData.height}
                        </TableCell>
                        <TableCell>Peso</TableCell>
                        
                        <TableCell>
                            {pokemonData.weight}
                        </TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>
                           uahuehuaheuh
                        </TableCell>

                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}

