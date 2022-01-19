const Sequelize = require("sequelize");
const VentasModel = require("./models/ventas");
const EmpresaModel = require("./models/empresa");

const sequelize = new Sequelize("invoicer", "root", "1234", {
    host: "127.0.0.1",
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
