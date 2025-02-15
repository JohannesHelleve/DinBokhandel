import { useState } from 'react';
import Button from '@mui/material/Button';


function HomePage() {
    const [count, setCount] = useState(0);
    
    return (
        <>
        <h1>Vite + React</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <p>
            Edit <code>src/pages/HomePage.tsx</code> and asdfasdfasdfsave to test HMR
            </p>
        </div>
        <Button variant="contained" classes="bg-white">Hello World</Button>
        </>
    );
    }

export default HomePage;