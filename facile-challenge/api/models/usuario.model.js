const mongoose = require('mongoose');
const crypto = require('crypto')
const secret = 'testetestetestetestetestetesteaq';

//função para enviar o usuario para o banco
const DataSchema = new mongoose.Schema({
    nome_usuario: String,
    email_usuario: String,
    comentario_usuario: String,
}, {
    timestamps:true
});

//função para criptografar a senha

const crypt = value => {
    const iv = Buffer.from(crypto.randomBytes(16))
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv) 
    let encrypted = cipher.update(value)
    encrypted = Buffer.concat([encrypted, cipher.final()])

    return `${iv.toString('hex')}:${encrypted.toString('hex')}`; 
}

const dcrypt = value => {
    const iv = Buffer.from(crypto.randomBytes(16))
    const dcipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv) 
    let dcrypted = dcipher.update(value)
    dcrypted = Buffer.concat([dcrypted, cipher.final()])

    return `${iv.toString('hex')}:${dcrypted.toString('hex')}`; 
}




DataSchema.pre('save',function(next){
    if(!this.isModified("comentario_usuario")){
        return next();
    }
    this.comentario_usuario = crypt(this.comentario_usuario);
    next();
});



const usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = usuarios;

