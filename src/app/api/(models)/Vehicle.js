import mongoose from "mongoose";

// mongodb veritbanına bağlan
mongoose.connect(process.env.MONGO_URL);

// ayar
mongoose.Promise = global.Promise;

// şema oluşturma
const VehicleSchema = new mongoose.Schema({
    make: String,
    model: String,
    year: Number,
    price: Number,
    color: String,
    mileage: Number,
    fuelType: String,
    transmission: String,
    condition: String,
    imageUrl: String,
});

// model oluştur
// performanc açısından her importta yeni model oluşturmamak için önce mevcut modellerin arasında Vehicle modeli varmı kontrol ediyor varsa onu export ediyor yoksa yenisini oluşturup export eder
const Vehicle =
    mongoose.models?.Vehicle || mongoose.model("Vehicle", VehicleSchema);

export default Vehicle;