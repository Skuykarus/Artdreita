const connection = require('../database');
 
// Función para mostrar las ilustraciones disponibles
const getIlustraciones = (req, res) => {
    const query = 'SELECT * FROM ilustraciones';
    connection.query(query, (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Hubo un error al obtener las ilustraciones' });
        }
        res.json(result);
    });
}
 
 
const addIlustracion = (req, res) => {
    const { nombre, precio, src } = req.body; // Cambio de los nombres de los campos
    const query = 'INSERT INTO ilustraciones (nombre, precio, src) VALUES (?, ?, ?)'; // Actualización de la consulta SQL
    connection.query(query, [nombre, precio, src], (error, result) => {
        if (error) {
            console.error('Error al agregar la ilustracion:', error);
            return res.status(500).json({ message: 'Hubo un error al agregar la ilustracion' });
        }
        res.json({ message: 'la ilustracion se ha agregado correctamente' });
    });
};
 
// Función para editar la ilustracion existente
const editIlustracion = (req, res) => {
    const { id_ilustracion } = req.params;
    const { nombre, precio, src } = req.body;
    const query = 'UPDATE ilustraciones SET nombre = ?, precio = ?, src = ? WHERE id_ilustracion = ?';
    connection.query(query, [nombre, precio, src, id_ilustracion], (error, result) => {
      if (error) {
        console.error('Error al editar la ilustracion:', error);
        return res.status(500).json({ message: 'Hubo un error al editar la ilustracion' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'la ilustracion no ha sido encontrado' });
      }
      res.json({ message: 'la ilustracion ha sido editada correctamente' });
    });
  };
 
  const deleteIlustracion = (req, res) => {
    const { id_ilustracion } = req.params;
    const query = 'DELETE FROM ilustraciones WHERE id_ilustracion = ?';
    connection.query(query, [id_ilustracion], (error, result) => {
      if (error) {
        console.error('Error al eliminar la ilustracion:', error);
        return res.status(500).json({ message: 'Hubo un error al eliminar la ilustracion' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'la ilustracion no ha sido encontrada' });
      }
      res.json({ message: 'la ilustracion se ha eliminado correctamente' });
    });
  };
 
 
module.exports = {
    getIlustraciones,
    addIlustracion,
    editIlustracion,
    deleteIlustracion
};