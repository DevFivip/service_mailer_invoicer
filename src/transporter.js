const nodemailer = require('nodemailer');

class Trasporter {
    constructor(host, port, service, user, pass) {
        this.host = host;
        this.port = port;
        this.service = service;
        this.user = user;
        this.pass = pass;
    }
    get transporter() {
        return this.setTransporter()
    }

    setTransporter() {
        return nodemailer.createTransport({
            host: this.host,
            port: this.port,
            service: this.service,
            auth: {
                user: this.user,
                pass: this.pass
            },
        });
    }
}


module.exports = {
    Trasporter
}