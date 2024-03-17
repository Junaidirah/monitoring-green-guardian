import React from "react";
import foto from "../components/asset/foto.webp";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-green-600">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 text-white">
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-4xl font-bold">Green Guardian</h1>
          <p className="text-lg mt-4">
            Perangkat ini adalah sistem monitoring dan kontrol berbasis IoT yang
            dirancang khusus untuk meningkatkan efisiensi dan produktivitas
            dalam perkebunan hidroponik. Dengan menggunakan sensor-sensor yang
            terpasang pada sistem ini, para petani dapat memantau kondisi
            lingkungan pertumbuhan tanaman secara real-time dan mengambil
            tindakan yang diperlukan untuk menjaga kesehatan dan pertumbuhan
            optimal tanaman hidroponik.
          </p>
        </div>
        <div className="relative">
          <img
            src={foto} // Ubah path gambar sesuai dengan lokasi gambar di folder public
            alt="Green Guardian"
            className="w-96 h-auto border-4 border-green-700 rounded-lg shadow-lg transition-transform duration-300 transform hover:translate-y-[-10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
