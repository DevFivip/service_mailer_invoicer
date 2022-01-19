const Sequelize = require("sequelize");
const VentasModel = require("./models/ventas");
const EmpresaModel = require("./models/empresa");

const sequelize = new Sequelize(process.env.APP_INVOICE_DATABASE_NAME, process.env.APP_INVOICE_DATABASE_USER, process.env.APP_INVOICE_DATABASE_PASSWORD, {
    host: process.env.APP_INVOICE_DATABASE,
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
