const mongoose = require("mongoose");

const encryptionLogSchema = new mongoose.Schema(
  {
    action: String,
    key: String,
    ip: String,
  },
  {
    timestamps: true,
  },
);

const EncryptionLog = mongoose.model("EncryptionLog", encryptionLogSchema);

module.exports = EncryptionLog;
