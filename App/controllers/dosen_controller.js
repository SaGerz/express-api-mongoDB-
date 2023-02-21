const db = require('../models');
const dosen = db.dosen;

exports.create = (req, res) => {
    req.body.tanggal_lahir = new Date;
    dosen.create(req.body)
        .then(() => res.send({message: "Berhasil menyimpan data"}))
        .catch((err) => res.status(500).send(err))
}

exports.findAll = async (req, res) => {
    await dosen.find()
        .then(data => res.send({
            message: "Get all data",
            data: data
        }))
        .catch(err => res.status(500).send({mesage: err}))
}

exports.show = (req, res) => {
    const id = req.params.id;
    dosen.findById(id)
        .then(data => res.send({
            data
        }))
        .catch(err => res.status(404).send({message: err.mesage}))
}

exports.update = (req, res) => {
    const id = req.params.id;
    req.body.tanggal_lahir = new Date;
    dosen.findByIdAndUpdate(id, req.body)
        .then(data => res.send({
            message: "Data berhasil diUpdate",
            data
        }))
        .catch(err => res.status(404).send({message: err}))
}

exports.delete = (req, res) => { 
    const id = req.params.id;
    console.log(id);    

    dosen.findByIdAndRemove(id)
        .then(data => res.send({
            mesage: "Data berhasil dihapus"
        }))
        .catch(err => res.status(404).send({message: err}));
}
