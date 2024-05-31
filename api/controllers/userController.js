const connection = require('../database');
const bcrypt = require('bcrypt');
const { generateToken } = require('./authController');
const { verifyToken } = require('./authController');  



// Función para obtener un usuario por ID
const getUserById = (req, res, next) => {
  connection.query('SELECT * FROM usuarios WHERE id_user = ?', [req.params.id], (err, rows) => {
    if (err) return next(err);
    res.json(rows);
  });
};

const addUser = async (req, res, next) => {
  try {
    const { nombre, email, password } = req.body;

    // Validar entrada
    if (!nombre || !email || !password) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Verificar si el nombre de usuario ya existe en la base de datos
    connection.query('SELECT * FROM usuarios WHERE nombre = ?', [nombre], async (err, rows) => {
      if (err) {
        console.error('Error al verificar el nombre de usuario:', err);
        return next(err);
      }
      if (rows.length > 0) {
        return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
      }

      // Verificar si el correo electrónico ya existe en la base de datos
      connection.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, rows) => {
        if (err) {
          console.error('Error al verificar el correo electrónico:', err);
          return next(err);
        }
        if (rows.length > 0) {
          return res.status(400).json({ message: 'El correo electrónico ya está en uso' });
        }

        // Verificar longitud de la password
        if (password.length < 8) {
          return res.status(400).json({ message: 'La password debe tener al menos 8 caracteres' });
        }

        // Hashear la password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Obtener el id_rol del rol 'user'
        connection.query('SELECT id_rol FROM roles WHERE nombre = ?', ['user'], (err, rows) => {
          if (err) {
            console.error('Error al obtener el id_rol del rol user:', err);
            return next(err);
          }
          if (rows.length === 0) {
            return res.status(500).json({ message: 'Rol user no encontrado' });
          }

          const id_rol = rows[0].id_rol;

          // Insertar el nuevo usuario con id_rol
          const insertUserQuery = 'INSERT INTO usuarios (nombre, email, password, id_rol) VALUES (?, ?, ?, ?)';
          connection.query(insertUserQuery, [nombre, email, hashedPassword, id_rol], (err, result) => {
            if (err) {
              console.error('Error al registrar el usuario:', err);
              return next(err);
            }

            const userId = result.insertId;
            const token = generateToken(userId);
            res.status(201).json({ message: 'Usuario registrado exitosamente', token });
          });
        });
      });
    });
  } catch (err) {
    next(err);
  }
};

// Función para loguear un usuario
const loginUser = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Correo electrónico y password son obligatorios' });
  }

  connection.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, rows) => {
    if (err) return next(err);
    if (rows.length === 0) return res.status(401).json({ message: 'Correo electrónico o password incorrectos' });

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ message: 'Correo electrónico o password incorrectos' });

    const userId = user.id_user;
    const rolId = user.id_rol; 
    const token = generateToken(userId);

    res.json({ token, id_user: userId, id_rol: rolId }); // Envía el token y id_user al cliente como parte de la respuesta
  });
};

// Función para obtener todos los usuarios
const getAllUsers = (req, res, next) => {
  connection.query('SELECT * FROM usuarios', (err, rows) => {
    if (err) return next(err);
    res.json(rows);
  });
};

const isAdmin = (req, res, next) => {
  connection.query('SELECT id_rol FROM usuarios WHERE id_user = ?', [req.params.id], (err, rows) => {
    if (err) return next(err);
    if (rows.length > 0) {
      const idRol = rows[0].id_rol;
      res.json({ id_rol: idRol });
    } else {
      // No se encontraron filas para el id_user proporcionado
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  });
};


const handleSignOut = (req, res) => {
  // Lógica para eliminar el token de sesión del usuario
  // Se asume que el token se valida y se encuentra en el encabezado de autorización
  // Utiliza la función verifyToken para validar y extraer el token del encabezado de autorización
  const jwtToken = req.headers['authorization'];
  const token = jwtToken.substring(7); // Elimina 'Bearer ' del principio del token

  // Lógica para eliminar el token del almacenamiento local del servidor o de la base de datos si es necesario
  // Luego, envía el token de vuelta como parte de la respuesta
  res.status(200).json({ message: 'Sesión cerrada exitosamente', token });
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  loginUser,
  isAdmin,
  handleSignOut

};