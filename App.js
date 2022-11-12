import React from 'react';
import {ThemeProvider, Button} from '@asistensi/mich-design';
import {TextField} from '@asistensi/mich-design/dist/components/molecules/TextField/TextField.component';

function App() {
  return (
    <ThemeProvider>
      <Button>hola a</Button>
      <TextField
        label="hola mudno"
        helperText="holamundo"
        placeholder="holamundo"
      />
    </ThemeProvider>
  );
}

export default App;
