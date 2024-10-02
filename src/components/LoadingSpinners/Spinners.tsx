import HashLoader from 'react-spinners/HashLoader'

export function LoadingSpinner(){
    return(
        <div className='flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <HashLoader 
                className='mb-5'
                color='gray'
                size={50}
            />
            <p className='text-white text-3xl'>Loading...</p>
        </div>
    )
}