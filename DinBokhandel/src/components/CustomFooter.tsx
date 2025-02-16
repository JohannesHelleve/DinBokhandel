

export default function CustomFooter() {
    return (
        <footer className='bg-gray-800 text-white'>
        <div className='flex flex-col items-center justify-center flex-row md:space-x-100'>
            <div className='flex flex-col items-center justify-center'>
            <h2 className='text-4xl font-bold'>Kontakt oss</h2>
            <p className='mt-4 text-2xl'>Telefon: 12345678</p>
            
            <p className='mt-4 text-2xl'>Epost:ssdf</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
            <h2 className='text-4xl font-bold'>Følg oss</h2>
            <p className='mt-4 text-2xl'>Facebook</p>
            <p className='mt-4 text-2xl'>Instagram</p>
            </div>
        </div>
        </footer>
    );
}
