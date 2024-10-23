const db = require("../models");
const Student = db.student;

exports.create = (req, res) => {
  req.body.dateOfBirth = new Date(req.body.dateOfBirth);

  Student.create(req.body)
    .then(() => {
      res.send({ message: "Data berhasil disimpan" });
    })
    .catch((e) => {
      res.status(500).send({ message: e.message });
    });
};

exports.findAll = (req, res) => {
  Student.find()
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({ message: e.message });
    });
};

exports.show = (req, res) => {
  const id = req.params.id;
  Student.findById(id)
    .then((data) => {
      res.send(data);
    })
    .catch((e) => {
      res.status(500).send({ message: e.message });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  req.body.dateOfBirth = new Date(req.body.dateOfBirth);

  Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Data not found" });
      }
      res.send({ message: "Data berhasil diupdate" });
    })
    .catch((e) => {
      res.status(500).send({ message: e.message });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Student.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Data not found" });
      }
      res.send({ message: "Data berhasil dihapus" });
    })
    .catch((e) => {
      res.status(500).send({ message: e.message });
    });
};
