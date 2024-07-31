import React, { useEffect, useRef } from "react";

export default function Homepage(){
    return (

    <div className="mt-20 lg:mt-4 w-full bg-gradient-to-t from-green-50 to-white pb-12">
        <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                <div className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-green-700 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300">
                    <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 me-3">Temukan Destinasi Baru</span> <span className="text-sm font-medium">Amour Ecopark!</span> 
                </div>
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Amour Ecopark!</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Enjoy Nature and Adventure!</p>
            </div>
            <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0"></div>
        </section>
        <section className="px-4 md:px-8 lg:px-24 md:mt-12" data-aos="fade-up" data-aos-duration="800">
            <div className="flex gap-3 items-center">
                <div className="w-12 lg:w-24 h-1 bg-green-700 rounded-lg"></div>
                <p className="font-semibold text-green-700">TENTANG AMOUR ECOPARK</p>
            </div>
            <div className="mt-3 flex flex-col lg:flex-row gap-4 lg:items-center justify-between text-slate-800">
                <div className="lg:w-1/2">
                    <h1 className="font-black text-2xl md:text-5xl">FILOSOFI LOGO</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="flex justify-center items-center border-8 border-white shadow-md p-3">
                    <img className="object-cover md:h-48 lg:h-56" src="/amour/AMOUR ECOPARK 1.png" alt="" />
                </div>
                <div className="flex justify-center items-center border-8 border-white shadow-md p-3">
                    <img className="object-cover md:h-48 lg:h-full" src="/amour/AMOUR ECOPARK.png" alt="" />
                </div>
            </div>
            <div className="mt-6">
                <p className="text-base md:text-xl">Nama <span className="italic">Amour Ecopark</span> mengandung kata <span className="italic">Amour</span>. Kata <span className="italic">Amour</span> berasal dari bahasa Prancis Kuno yang berarti cinta atau kasih sayang. Logo Amour Ecopark terdiri dari tiga warna yaitu biru, hijau, dan merah. Ketiga warna ini melambangkan unsur air, udara, dan tanah. Selain itu tiga warna ini juga mewakili makna <span className="italic font-medium"> Hablum minALLAH, Hablum Minannaas, Hablum Minal Aalamiin.</span> Makna ini berarti hubungan vertikal antara manusia dengan ALLAH, hubungan horizontal antara manusia dengan manusia, dan hubungan manusia dengan alam.</p>
            </div>
        </section>
        <section className="px-4 md:px-8 lg:px-24 mt-12" data-aos="fade-up" data-aos-duration="800">
            <div className="flex gap-3 items-center">
                <div className="w-12 lg:w-24 h-1 bg-green-700 rounded-lg"></div>
                <p className="font-semibold text-green-700">INISIASI TRANSFORMASI LAHAN</p>
            </div>
            <div className="mt-3 flex flex-col lg:flex-row gap-4 lg:items-center justify-between text-slate-800">
                <div className="lg:w-1/2">
                    <h1 className="font-black text-2xl md:text-5xl">TRANSFORMASI LAHAN SELUAS 6 HA</h1>
                </div>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                <div className="">
                    <img className="object-cover border-8 md:h-52 border-white shadow-md" src="/amour/1.png" alt="" />
                </div>
                <div className="">
                    <img className="object-cover border-8 md:h-52 border-white shadow-md" src="/amour/2.png" alt="" />
                </div>
                <div className="">
                    <img className="object-cover border-8 md:h-52 border-white shadow-md" src="/amour/3.png" alt="" />
                </div>
                <div className="">
                    <img className="object-cover border-8 md:h-52 border-white shadow-md" src="/amour/4.png" alt="" />
                </div>
                <div className="">
                    <img className="object-cover border-8 md:h-52 border-white shadow-md" src="/amour/5.png" alt="" />
                </div>
                <div className="">
                    <img className="object-cover border-8 md:h-52 border-white shadow-md" src="/amour/6.png" alt="" />
                </div>
                <div className="">
                    <img className="object-cover border-8 md:h-52 border-white shadow-md" src="/amour/7.png" alt="" />
                </div>
                <div className="">
                    <img className="object-cover border-8 md:h-52 border-white shadow-md" src="/amour/8.png" alt="" />
                </div>
            </div>
            <div className="mt-6">
                <p className="text-base md:text-xl">Wisata Amour Ecopark adalah proyek yang akan mengubah lahan seluas 6 hektar di Desa Alassumur menjadi destinasi wisata ekologi yang memadukan tema alam dan petualangan. Dengan visi untuk menciptakan wisata alami yang dapat dinikmati semua kalangan untuk menghadirkan pengalaman yang memukau, di mana pengunjung dapat meresapi keindahan alam sembari menikmati berbagai aktivitas petualangan yang mendebarkan seperti outbond, track ATV, Trail Circuit, dan Horse Riding.</p>
                <br />
                <p className="text-base md:text-xl">Amour Ecopark dirancang untuk menjadi tempat wisata yang menawarkan pengalaman unik dan mendalam tentang pentingnya menjaga dan menghargai alam. Dengan konsep yang menggabungkan keindahan alam dan kegiatan petualangan, kami berharap dapat memberikan edukasi sekaligus rekreasi bagi pengunjung dari segala usia.</p>
            </div>
        </section>
        <section className="px-4 md:px-8 lg:px-24 mt-12" data-aos="fade-up" data-aos-duration="800">
            <div className="flex gap-3 items-center">
                <div className="w-12 lg:w-24 h-1 bg-green-700 rounded-lg"></div>
                <p className="font-semibold text-green-700">GAMBARAN AWAL WISATA</p>
            </div>
            <div className="mt-3 flex flex-col lg:flex-row gap-4 lg:items-center justify-between text-slate-800">
                <div className="lg:w-1/2">
                    <h1 className="font-black text-2xl md:text-5xl">DENAH WISATA</h1>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="flex justify-center items-center p-3">
                    <img className="object-cover lg:w-2/3" src="/amour/map.jpeg" alt="" />
                </div>
            </div>
            <div className="mt-6">
                <p className="text-base md:text-xl">Gambar di atas adalah sketsa denah Wisata Amour Ecopark, sebuah proyek yang akan mengubah lahan seluas 6 hektar di Desa Alassumur menjadi destinasi wisata ekologi. Denah ini menunjukkan berbagai area dan fasilitas yang akan disediakan untuk pengunjung.</p>
                <br />
                <p className="text-base md:text-xl font-semibold">Area dan Fasilitas di Wisata Amour Ecopark:</p>
                <ol className="text-base md:text-xl">
                    <li className=""> <span className="font-medium">Gerbang Masuk.</span> Gerbang utama untuk masuk ke kawasan Amour Ecopark, yang menyambut pengunjung dengan desain yang unik berbentuk simbol hati  dan ramah lingkungan.</li>
                    <li className=""> <span className="font-medium">Area Parkir Roda 2.</span> Area parkir khusus untuk kendaraan roda dua seperti sepeda motor dan sepeda.</li>
                    <li className=""> <span className="font-medium">Area Parkir Roda 4.</span> Area parkir luas untuk kendaraan roda empat seperti mobil dan minibus.</li>
                    <li className=""> <span className="font-medium">Camper Van Area.</span> Area khusus untuk pengunjung yang datang dengan camper van, menyediakan fasilitas parkir dan kebutuhan dasar.</li>
                    <li className=""> <span className="font-medium">Pujasera & Musholla.</span> Pusat kuliner yang menawarkan berbagai makanan dan minuman, serta musholla untuk kebutuhan ibadah pengunjung.</li>
                    <li className=""> <span className="font-medium">Camping Ground & Outbond Area.</span> Area perkemahan yang dilengkapi dengan fasilitas outbond untuk kegiatan kelompok dan keluarga.</li>
                    <li className=""> <span className="font-medium">Track ATV & Trail Circuit.</span> Jalur khusus untuk aktivitas ATV dan trail, menawarkan pengalaman berkendara yang menantang dan menyenangkan.</li>
                    <li className=""> <span className="font-medium">Arena Berkuda / Horse Riding.</span> Area untuk kegiatan berkuda, di mana pengunjung dapat belajar dan menikmati pengalaman menunggang kuda.</li>
                    <li className=""> <span className="font-medium">Pertenakan Kambing & Pet Zoo.</span> Kebun binatang mini dan peternakan kambing, tempat edukatif bagi anak-anak untuk belajar tentang hewan.</li>
                    <li className=""> <span className="font-medium">Agro Wisata Cabe Jamu / Long Pepper.</span> Area pertanian yang fokus pada budidaya tanaman cabe jamu, memberikan edukasi tentang pertanian organik dan penggunaan tanaman herbal.</li>
                    <li className=""> <span className="font-medium">Bank Pakan / Rumput Hewan.</span> Area penyimpanan dan pengelolaan pakan hewan, menyediakan rumput segar dan makanan lainnya untuk kebutuhan hewan-hewan di Amour Ecopark.</li>
                </ol>
                <br />
                <p className="text-base md:text-xl">Denah ini dirancang untuk memaksimalkan pengalaman pengunjung dengan menawarkan berbagai kegiatan alam dan petualangan, sembari mendukung konsep ekowisata yang berkelanjutan. Wisata Amour Ecopark bertujuan untuk menjadi destinasi wisata yang edukatif, rekreatif, dan ramah lingkungan bagi semua kalangan.</p>
            </div>
        </section>
    </div>
    )
}