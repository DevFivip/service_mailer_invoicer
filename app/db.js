const Sequelize = require("sequelize");
const VentasModel = require("./models/ventas");
const EmpresaModel = require("./models/empresa");
console.log(process.env.APP_INVOICE_DATABASE)

const sequelize = new Sequelize(process.env.APP_DATABASE_NAME, process.env.APP_DATABASE_USER, process.env.APP_DATABASE_PASSWORD, {
    host: process.env.APP_DATABASE_DEVELOPER,
    dialect: "mysql",
    define: {
        timestamps: false,
    },

});

const Venta = VentasModel(sequelize, Sequelize);
const Empresa = EmpresaModel(sequelize, Sequelize);


module.exports = {
    Venta,
    Empresa,
};
