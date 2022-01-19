module.exports = (sequelize, type) => {
    return sequelize.define("ventas", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        local_id: type.INTEGER,
        empresa_id: type.INTEGER,
        tipo_operacion_id: type.INTEGER,
        serie_id: type.INTEGER,
        correlativo: type.STRING,
        fecha_registro: type.STRING,
        fecha_emision: type.STRING,
        cliente_id: type.INTEGER,
        almacen_id: type.INTEGER,
        total_afecto: type.INTEGER,
        total_inafecto: type.INTEGER,
        total_isc: type.INTEGER,
        total_igv: type.INTEGER,
        total_exonerado: type.INTEGER,
        total_descuento_global: type.INTEGER,
        total_descuento_lineal: type.INTEGER,
        total_documento: type.INTEGER,
        total_percepcion: type.INTEGER,
        total_detraccion: type.INTEGER,
        total_documento_fin: type.INTEGER,
        total_peso: type.INTEGER,
        is_free: type.INTEGER,
        is_export: type.INTEGER,
        is_exonerada: type.INTEGER,
        is_nulled: type.INTEGER,
        check_detraccion_amount: type.STRING,
        moneda_id: type.INTEGER,
        forma_pago_id: type.INTEGER,
        transportista_id: type.INTEGER,
        vehiculo_id: type.INTEGER,
        ubigeo_partida_id: type.INTEGER,
        direccion_partida: type.STRING,
        ubigeo_destino_id: type.INTEGER,
        direccion_destino: type.STRING,
        user_id: type.INTEGER,
        vendedor_id: type.INTEGER,
        sunat_respuesta: type.STRING,
        sunat_xml: type.STRING,
        documentos_relacion_id: type.INTEGER,
        estatus: type.STRING,
        numero_expediente: type.STRING,
        orden_compra: type.STRING,
        codigo_unidad_ejecutora: type.STRING,
        numero_proceso_seleccion: type.STRING,
        numero_contrato: type.STRING,
        detalle: type.STRING,
        uniqueserie: type.STRING,
        sunat_status: type.STRING,
        sunat_documento: type.STRING,
        sunat_cdr: type.STRING,
        sunat_notes: type.STRING,
        sunat_code: type.STRING,
        created_at: type.STRING,
        updated_at: type.STRING,
        motivos_sunat_guia_remision_id: type.INTEGER,
    });
};
