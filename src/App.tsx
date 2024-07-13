import React, { useState, ChangeEvent } from 'react';
// import './App.css';
import { Container, TextField, Typography, Box } from '@mui/material';


const App: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1>文字列カウンター</h1>
    //     <textarea
    //       value={text}
    //       onChange={handleChange}
    //       placeholder="文字列を記入してください"
    //       rows={50}
    //       cols={50}
    //     />
    //     <p>文字数: {text.length}</p>
    //   </header>
    // </div>
    <Container maxWidth="sm">
      <Box sx={{my:4, textAlign: 'center'}}>
      <Typography variant="h4" component="h1" gutterBottom>
        文字数カウンター
      </Typography>
        <TextField
          label="文字を入力してください"
          multiline
          rows={20}
          variant="outlined"
          fullWidth
          value={text}
          onChange={handleChange}
        />
        <Typography variant="h6" component="p" sx={{ mt: 2 }}>
          文字数: {text.length}
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
