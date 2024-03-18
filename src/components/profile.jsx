import React from "react";
import ilham from "../components/asset/ilham.jpg";
import juna from "../components/asset/Junaidi Rahmat.png";
import dini from "../components/asset/dini.jpg";

function ProfileCard() {
  return (
    <div className="text-[#00df9a] text-center">
      <h1 className="text-md text-2xl md:text-4xl lg:text-5xl font-bold">
        OUR MEMBER
      </h1>
      <div className="w-full py-[10rem] px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:shadow-2xl transition duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={juna}
              alt="/"
            />
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8 text-[#00df9a]">Junaidi</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">1104220015</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">TF4602</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">
                semua akan saya hadapi tapi dengan makan dulu
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:shadow-2xl transition duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-black"
              src={dini}
              alt="/"
            />
            <div className="text-center font-medium text-[#00df9a]">
              <p className="py-2 border-b mx-8 mt-8 text-[#00df9a]"> Dini</p>
              <p className="py-2 border-b mx-8text-[#00df9a]">1101</p>
              <p className="py-2 border-b mx-8text-[#00df9a]">TT</p>
              <p className="py-2 border-b mx-8text-[#00df9a]">
                suka mengajarkan ilmu
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:shadow-2xl transition duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={ilham}
              alt="/"
            />
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8 text-[#00df9a]"> ilham</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">1101</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">TT</p>
              <p className="py-2 border-b mx-8 text-[#00df9a]">
                Seorang mahasiswa yang senang untuk meng-eksplor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
