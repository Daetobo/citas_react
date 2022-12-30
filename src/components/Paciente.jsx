
const Paciente = ({paciente,setPaciente, eliminarPaciente}) => {

    // Destructuración del objeto paciente
    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar el paciente?');

        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
            <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold text-gray-700 uppercase mb-3">
                    Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold text-gray-700 uppercase mb-3">
                    Propietario: {''}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>

                <p className="font-bold text-gray-700 uppercase mb-3">
                    Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold text-gray-700 uppercase mb-3">
                    Fecha Alta: {''}
                    <span className="font-normal normal-case">{fecha}</span>
                </p>

                <p className="font-bold text-gray-700 uppercase mb-3">
                    Sintomas: {''}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>
                <div className="flex justify-around mt-10">
                    <button 
                        type="button"
                        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg uppercase font-bold"
                        onClick={() => setPaciente(paciente)}
                    >
                        Editar
                    </button>
                    <button 
                        type="button"
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-lg uppercase font-bold"
                        onClick={handleEliminar}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
    );
}

export default Paciente;
