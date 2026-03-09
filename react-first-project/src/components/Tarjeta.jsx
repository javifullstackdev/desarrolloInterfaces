const Tarjeta = () => {
    return (
        <div className="tarjeta">
            <img src="avatar.jpg" alt="Foto de perfil" />
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" tabIndex="1" />
            <p style={{ color: 'blue', fontSize: '14px' }}>
            Un párrafo de texto.
            </p>
            <br />
            <button 
            onClick = { () => alert('hola')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Saludar
            </button>
        </div>
    );
}

export default Tarjeta;