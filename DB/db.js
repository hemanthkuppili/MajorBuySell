const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose
            .connect(
               "mongodb+srv://kuppilihemanth450:rHZ8WWPIVEtekTbz@reservationdb.pqa6ydm.mongodb.net/?retryWrites=true&w=majority&appName=ReservationDB"
        )
            .then(() => console.log("🔥 DB Connected Successfully"))
            .catch((err) => console.error("DB Error:", err));
    } catch (err) {
        console.error("DB Error:", err);
    }
};

module.exports = connectDB;