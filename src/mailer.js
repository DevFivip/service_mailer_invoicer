const nodemailer = require('nodemailer');
const { Trasporter } = require("./transporter")
const { Empresa } = require("../app/db");


const setMessage = (body, empresa, files) => {
    body.cliente = JSON.parse(body.cliente);
    body.files = JSON.parse(body.files);
    body.serie = JSON.parse(body.serie);
    let nombre = !!body.sunat_documento ? body.serie.descripcion + "-" + body.serie.serie + "-" + body.correlativo : body.sunat_documento;

    let msg = {};
    msg.to = `${body.cliente.nombre_comercial} <${body.cliente.email}>`;
    msg.subject = `Documento ${nombre}`;
    if (!!body.message && body.message !== 'undefined') {
        msg.text = `${body.message}`;
        msg.html = `<span>${body.message}</span>`;
    } else {
        msg.text = " ";
        msg.html = " ";
    }
    msg.html += `
    <p><strong>${empresa.nombre_comercial}</strong></p>
    <p><em>direccion: ${empresa.direccion}</em></p>
    <p><em><strong>celular: </strong>${empresa.celular || ""}</em></p>
    <p><em><strong>telefono:</strong> ${empresa.telefono || ""}</em></p>
    <p><em><strong>Email</strong>: <a href="mailto:${empresa.email}">${empresa.email}</a></em></p>
    <p><em><img src="http://18.207.214.15/storage/${empresa.id}/${empresa.logo}" alt="Logo de ${empresa.nombre}" width="180" height="75" /></em></p>

    <p><a href="mailto:ventas@fivip.net">Power By FivipSistem.net</a></p>
    <p><em><img src="http://18.207.214.15/storage/1/FIVIP_LOGO.jpg" alt="logo mi empresa" width="45" height="20" /></em></p>`;

    msg.attachments = [];

    if (!!body.files.length) {

        for (let i = 0; i < body.files.length; i++) {
            const v = body.files[i];
            if (v.path) {
                let file = {
                    filename: v.name, path: `${process.env.APP_INVOICER_ROUTE_FILE}${v.path}`
                }
                msg.attachments.push(file)
            }
        }
    }

    if (!!files) {
        keys = Object.keys(files)
        for (let i = 0; i < keys.length; i++) {
            const e = files[keys[i]];
            // console.log(msg.attachments);
            msg.attachments.push({
                filename: e.name,
                content: new Buffer(e.data),
                contentType: e.mimetype
            })

        }
    }



    return msg
}

const mailer = (body, files) => new Promise(async (res, rej) => {
    const empresa = await Empresa.findByPk(body.empresa_id);

    const transporter = new Trasporter(
        empresa.smtp_mail_host,
        empresa.smtp_mail_port,
        empresa.smtp_mail_service,
        empresa.smtp_mail_auth_user,
        empresa.smtp_mail_auth_password
    ).transporter

    const msg = setMessage(body, empresa, files);
    transporter.sendMail(msg, (error, info) => {
        if (error) {
            console.log('Error occurred');
            console.log(error.message);
            return rej({ success: false, message: "correo no enviado" })
        }
        console.log('Message sent successfully!');
        console.log(nodemailer.getTestMessageUrl(info));
        // only needed when using pooled connections
        transporter.close();
        return res({ "success": true, message: "correo enviado" })
    });

})

module.exports = {
    mailer
}

