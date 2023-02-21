module.exports = mongoose => {
    const schema = new mongoose.Schema(
        {
            nama_lengkap: String,
            tanggal_lahir: Date,
            jenis_kelamin: String,
            alamat: String,
            mata_kuliah: String,
        }, 
        {
            timestamps: true
        }
    )

    schema.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;

        return object;
    })

    return mongoose.model("dosen", schema);
}