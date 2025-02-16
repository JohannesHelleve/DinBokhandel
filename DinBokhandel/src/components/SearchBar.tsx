import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Book } from '../types/Books';


export default function MovieSelector() {
  const [options, setOptions] = useState<Book[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('/mockdata.json'); // Path must be relative to public/
        if (!response.ok) throw new Error('Failed to load');
        
        const data = await response.json();
        setOptions(data); // Store JSON data in state
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };

    fetchOptions();
  }, []); // Runs only once when component mounts

  return (
    <div className='bg-white w-1/2 mx-auto mt-10 rounded-lg shadow-lg'>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.title} // Necessary for objects
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => <TextField {...params} label="Select a movie" />}
      />
    </div>
  );
}


