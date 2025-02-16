import { useState } from 'react';
import CustomTimeline from '../components/CustomTimeline';
import CustomFooter from '../components/CustomFooter';
import SearchBar from '../components/SearchBar';



function HomePage() {
    const [count, setCount] = useState(0);
    
    return (
        <>
        <div className=' sm:h-117 md:h-150 w-full overflow-hidden relative'>
            <div className='absolute z-10 w-full h-1/20 bg-white opacity-70 flex justify-center items-center'>
                <p className='text-2xl'>Lokale bokhandlere har tjent 1 000 000 000 kr!</p>
            </div>
            <div className='absolute z-0'>
            <img src="/public/bokhylle.jpeg" alt="logo"/>
            </div>
            <div className='absolute z-10 w-full h-full flex justify-center items-center flex-col'>
                <h1 className='text-7xl text-center text-white'>Din Bokhandel</h1>
                <p className='text-2xl text-center text-white'>Støtt din lokale bokhandel!</p>
            </div>
            <div className='absolute z-10 w-full h-full sm:my-95 md:my-120 border-b-2'>
                <SearchBar />
            </div>
        </div>
        <CustomTimeline/>
        <div className='mt-10'>
            <CustomFooter/>
        </div>
        </>
    );
    }

export default HomePage;