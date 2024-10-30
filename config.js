module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || "notasecret!",
  },
  mysql: {
    host: process.env.MYSQL_HOST || "localhost", // Cambia aquí, solo 'localhost' sin el puerto
    port: process.env.MYSQL_PORT || 3306, // Define el puerto como una propiedad separada
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASS || "admin123",
    database: process.env.MYSQL_DB || "my_store",
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || "localhost",
    port: process.env.MYSQL_SRV_PORT || 3001,
  },
};
