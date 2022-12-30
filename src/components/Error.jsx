
const Error = ({mensaje}) => {
    return (
        <div className='bg-red-700 text-center text-white mb-3 p-2 rounded-md uppercase font-bold'>
            <p>{mensaje}</p>
        </div>
    );
}

export default Error;
