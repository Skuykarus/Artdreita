const connection = require('../database');

// Función para obtener o crear un carrito para el usuario
const getOrCreateCart = (id_user, callback) => {
    const queryGetCart = 'SELECT id_carrito FROM Carrito WHERE id_user = ?';
    connection.query(queryGetCart, [id_user], (error, result) => {
        if (error) {
            return callback(error);
        }
        if (result.length > 0) {
            // El carrito ya existe
            callback(null, result[0].id_carrito);
        } else {
            // Crear un nuevo carrito
            const queryCreateCart = 'INSERT INTO Carrito (id_user) VALUES (?)';
            connection.query(queryCreateCart, [id_user], (error, result) => {
                if (error) {
                    return callback(error);
                }
                callback(null, result.insertId);
            });
        }
    });
};

// Añadir item al carrito
const addItemToCart = (req, res) => {
    const { id_user, id_tatuaje, id_ilustracion, cantidad } = req.body;
    
    if (!id_user) {
        return res.status(400).json({ message: 'id_user es requerido' });
    }

    getOrCreateCart(id_user, (error, id_carrito) => {
        if (error) {
            console.error('Error al obtener o crear el carrito:', error);
            return res.status(500).json({ message: 'Hubo un error al obtener o crear el carrito' });
        }

        const query = 'INSERT INTO Carrito_Items (id_carrito, id_tatuaje, id_ilustracion, cantidad) VALUES (?, ?, ?, ?)';
        connection.query(query, [id_carrito, id_tatuaje, id_ilustracion, cantidad], (error, result) => {
            if (error) {
                console.error('Error al agregar al carrito:', error);
                return res.status(500).json({ message: 'Hubo un error al agregar al carrito' });
            }
            res.json({ message: 'Producto agregado al carrito correctamente' });
        });
    });
};

// Obtener carrito por usuario
const getCart = (req, res) => {
    const { id_user } = req.params;
    const query = `
        SELECT CI.id_carrito_item, 
               T.nombre AS tatuaje, 
               I.nombre AS ilustracion, 
               CI.cantidad,
               COALESCE(T.src, I.src) AS src, 
               COALESCE(T.precio, I.precio) AS precio
        FROM Carrito_Items CI
        LEFT JOIN Tatuajes T ON CI.id_tatuaje = T.id_tatuaje
        LEFT JOIN Ilustraciones I ON CI.id_ilustracion = I.id_ilustracion
        WHERE CI.id_carrito = (SELECT id_carrito FROM Carrito WHERE id_user = ?)
    `;
    connection.query(query, [id_user], (error, result) => {
        if (error) {
            console.error('Error al obtener el carrito:', error);
            return res.status(500).json({ message: 'Hubo un error al obtener el carrito' });
        }
        res.json(result);
    });
};

// Eliminar item del carrito
const removeItemFromCart = (req, res) => {
    const { id_item } = req.params;
    const query = 'DELETE FROM Carrito_Items WHERE id_carrito_item = ?';
    connection.query(query, [id_item], (error, result) => {
      if (error) {
        console.error('Error al eliminar el item del carrito:', error);
        return res.status(500).json({ message: 'Hubo un error al eliminar el item del carrito' });
      }
      res.json({ message: 'Item eliminado del carrito correctamente' });
    });
  };

// Vaciar el carrito
const emptyCart = (req, res) => {
    const { id_user } = req.params;
    const query = 'DELETE FROM Carrito_Items WHERE id_carrito = (SELECT id_carrito FROM Carrito WHERE id_user = ?)';
    connection.query(query, [id_user], (error, result) => {
        if (error) {
            console.error('Error al vaciar el carrito:', error);
            return res.status(500).json({ message: 'Hubo un error al vaciar el carrito' });
        }
        res.json({ message: 'Carrito vaciado correctamente' });
    });
};

module.exports = {
    addItemToCart,
    getCart,
    removeItemFromCart,
    emptyCart
};