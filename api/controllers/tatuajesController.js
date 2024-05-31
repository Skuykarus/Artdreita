const connection = require('../database');

// Función para mostrar los tatuajes disponibles
const getTatuajes = (req, res) => {
    const query = 'SELECT * FROM tatuajes';
    connection.query(query, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Hubo un error al obtener los tatuajes' });
        }
        res.json(result);
    });
};

const addTatuaje = (req, res) => {
    const { nombre, precio, src } = req.body;
    const query = 'INSERT INTO tatuajes (nombre, precio, src) VALUES (?, ?, ?)';
    connection.query(query, [nombre, precio, src], (error, result) => {
        if (error) {
            console.error('Error al agregar el tatuaje:', error);
            return res.status(500).json({ message: 'Hubo un error al agregar el tatuaje' });
        }
        res.json({ message: 'Tatuaje agregado correctamente' });
    });
};

// Función para editar un tatuaje existente
const editTatuaje = (req, res) => {
    const { id_tatuaje } = req.params;
    const { nombre, precio, src } = req.body;
    const query = 'UPDATE tatuajes SET nombre = ?, precio = ?, src = ? WHERE id_tatuaje = ?';
    connection.query(query, [nombre, precio, src, id_tatuaje], (error, result) => {
        if (error) {
            console.error('Error al editar el tatuaje:', error);
            return res.status(500).json({ message: 'Hubo un error al editar el tatuaje' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Tatuaje no encontrado' });
        }
        res.json({ message: 'Tatuaje editado correctamente' });
    });
};

const deleteTatuaje = (req, res) => {
    const { id_tatuaje } = req.params;
    const query = 'DELETE FROM tatuajes WHERE id_tatuaje = ?';
    connection.query(query, [id_tatuaje], (error, result) => {
        if (error) {
            console.error('Error al eliminar el tatuaje:', error);
            return res.status(500).json({ message: 'Hubo un error al eliminar el tatuaje' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Tatuaje no encontrado' });
        }
        res.json({ message: 'Tatuaje eliminado correctamente' });
    });
};

module.exports = {
    getTatuajes,
    addTatuaje,
    editTatuaje,
    deleteTatuaje
};