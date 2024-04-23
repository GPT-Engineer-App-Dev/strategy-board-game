import { useState } from 'react';
import { Box, Grid, GridItem, Button } from '@chakra-ui/react';

const OthelloGame = () => {
  const [board, setBoard] = useState(Array(8).fill(Array(8).fill(null)));

  const handleCellClick = (row, col) => {
    // Placeholder for game logic
    console.log(`Clicked on row ${row}, col ${col}`);
  };

  return (
    <Box p={4}>
      <Grid templateColumns="repeat(8, 1fr)" gap={1}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <GridItem w="40px" h="40px" bg="green.500" key={`${rowIndex}-${colIndex}`} onClick={() => handleCellClick(rowIndex, colIndex)}>
              <Button size="sm" variant="ghost">{cell}</Button>
            </GridItem>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default OthelloGame;