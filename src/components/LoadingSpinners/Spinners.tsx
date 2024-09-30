import HashLoader from 'react-spinners/HashLoader'

export function LoadingSpinner(){
    return(
        <div className='flex flex-col justify-center items-center'>
            <HashLoader 
                className='mb-5'
                color='gray'
                size={30}
            />
            <p className='text-white text-xl'>Loading...</p>
        </div>
    )
}