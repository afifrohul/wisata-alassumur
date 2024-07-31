import React, { useEffect, useRef } from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuMountainSnow } from "react-icons/lu";
import { FaMedal } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { GiFishingLure } from "react-icons/gi";
import { GiColombianStatue } from "react-icons/gi";
import { GiCampingTent } from "react-icons/gi";
import { GiFlyingFox } from "react-icons/gi";
import { GiPlasticDuck } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiKidSlide } from "react-icons/gi";
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

export default function Homepage(){
    const buttonRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            buttonRef.current.click();
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (

    <div className="mt-20 lg:mt-4 w-full bg-gradient-to-t from-green-50 to-white">
        <section className="dark:bg-gray-900 px-4 md:px-12">
            <div className="mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <NavLink to="/amour-ecopark" className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-green-700 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800 w-fit">
                        <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 me-3">Baru!</span> <span className="text-xs md:text-sm font-medium">Perencanaan Wisata Ekologi Amour Ecopark!</span> 
                        <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                    </NavLink>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-800 md:text-5xl lg:text-6xl dark:text-white">Rawa Indah Almour</h1>
                    <p className="mb-8 text-sm font-normal text-gray-500 lg:text-xl dark:text-gray-400">Wisata Alam yang Natural dan Asri</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
                            Jelajahi lebih jauh
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <div id="animation-carousel" className="relative w-full" data-carousel="static">
                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                            <div className=" duration-700 ease-in-out" data-carousel-item="active">
                                <img src="https://ilkom.upnjatim.ac.id/wp-content/uploads/2021/07/ALAS-SUMUR.jpg" className="absolute object-cover h-56 md:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://ilkom.upnjatim.ac.id/wp-content/uploads/2021/08/IMG_20210730_153236-1536x866.jpg" className="absolute object-cover h-56 md:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://ilkom.upnjatim.ac.id/wp-content/uploads/2021/08/IMG_20210730_164129-1-1536x864.jpg" className="absolute object-cover h-56 md:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/803/2023/10/22/IMG_20231022_210437_700_x_465_piksel-3883211530.jpg" className="absolute object-cover h-56 md:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/182/2024/04/17/wisata-rawa-indah-almour-1016417534.png" className="absolute object-cover h-56 md:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                            </div>
                        </div>
                        <button type="button" className="absolute top-1/2 start-0 z-30 flex items-center justify-center h-fit px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-2 h-2 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" ref={buttonRef} className="absolute top-1/2 end-0 z-30 flex items-center justify-center h-fit px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-2 h-2 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <Marquee pauseOnHover='true' gradient='true' className="mt-8 lg:mt-0">
            {/* <div className="flex gap-8 justify-evenly"> */}

                <img src="/media-ikmpb-regency-village-cdr-jember-40b12273c6282905e8001753b5eca295.png" alt="logo" className="h-4 md:h-10 mx-4 md:mx-12"/>
                <img src="/Logo UNEJ 2020.png" alt="logo" className="h-4 md:h-10 mx-4 md:mx-12"/>
                <img src="/LOGO KKN 115.png" alt="logo" className="h-4 md:h-10 mx-4 md:mx-12"/>
                <img src="/kkn115.png" alt="logo" className="h-4 md:h-10 mx-4 md:mx-12"/>
                <img src="https://www.react-fast-marquee.com/static/media/microsoft.4a9a93f0.png" alt="logo" className="h-4 md:h-8 mx-4 md:mx-12"/>
                <img src="https://www.react-fast-marquee.com/static/media/ibm.bcec6b9a.png" alt="logo" className="h-4 md:h-8 mx-4 md:mx-12"/>
                <img src="https://www.react-fast-marquee.com/static/media/princeton.5d0a5006.png" alt="logo" className="h-4 md:h-8 mx-4 md:mx-12"/>
                <img src="https://www.react-fast-marquee.com/static/media/mit.1af911d7.png" alt="logo" className="h-4 md:h-8 mx-4 md:mx-12"/>
                <img src="https://www.react-fast-marquee.com/static/media/dell.09332c44.png" alt="logo" className="h-4 md:h-8 mx-4 md:mx-12"/>
                <img src="https://www.react-fast-marquee.com/static/media/lucasfilm.ef28c5a6.png" alt="logo" className="h-4 md:h-8 mx-4 md:mx-12"/>
                <img src="https://www.react-fast-marquee.com/static/media/boeing.3037b0a6.png" alt="logo" className="h-4 md:h-8 mx-4 md:mx-12"/>
                
            {/* </div> */}
        </Marquee>
        <section className="px-4 md:px-8 lg:px-24 mt-12" data-aos="fade-up" data-aos-duration="800">
            <div className="flex gap-3 items-center">
                <div className="w-12 lg:w-24 h-1 bg-green-700 rounded-lg"></div>
                <p className="font-semibold text-green-700">DESTINASI POPULER</p>
            </div>
            <div className="mt-3 flex flex-col lg:flex-row gap-4 lg:items-center justify-between text-slate-800">
                <div className="lg:w-1/2">
                    <h1 className="font-black text-2xl lg:text-5xl">DESTINASI TERBAIK</h1>
                </div>
                <div className="lg:w-1/2">
                    <p className="text-xs lg:text-base">Bersantai di tepi Danau Rawa Sejuk yang menenangkan. Danau ini adalah tempat yang sempurna untuk beristirahat, memancing, atau sekadar menikmati ketenangan alam.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="">
                    <img className="border-8 border-white shadow-md h-96 w-full object-cover" src="/alexandra-Yr5fwr6ZHW8-unsplash.jpg" alt="" />
                </div>
                <div className="">
                    <img className="border-8 border-white shadow-md h-96 w-full object-cover" src="/alexandra-Yr5fwr6ZHW8-unsplash.jpg" alt="" />
                </div>
                <div className="flex flex-grow flex-col gap-8 h-96 w-full">
                    <img className="object-cover border-8 border-white shadow-md h-44" src="https://ilkom.upnjatim.ac.id/wp-content/uploads/2021/08/IMG_20210730_153236-1536x866.jpg" alt="" />
                    <img className="object-cover border-8 border-white shadow-md h-44" src="https://ilkom.upnjatim.ac.id/wp-content/uploads/2021/08/IMG_20210730_164129-1-1536x864.jpg" alt="" />
                </div>
            </div>
        </section>
        {/* <section className="px-4 md:px-8 lg:px-24 mt-20" data-aos="fade-up" data-aos-duration="800">
            <div className="flex gap-3 items-center justify-center">
                <div className="w-4 md:w-8 lg:w-16 h-1 bg-green-700 rounded-lg"></div>
                <p className="font-semibold text-green-700">EKSPLOR FASILITAS MENARIK</p>
            </div>
            <div className="mt-3 flex flex-col gap-4 items-center justify-between text-slate-800 text-center">
                <div className="">
                    <h1 className="font-black text-2xl lg:text-5xl">FASILITAS POPULER</h1>
                </div>
                <div className="lg:w-1/2">
                    <p className="text-xs lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis provident ut quas deleniti facilis fugiat quis ad consequatur sunt quaerat!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, error?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3 lg:mt-12">
                    <div className="bg-white border border-gray-200 shadow-md ">
                        <img className="h-44 w-full object-cover" src="/haryad-art-C225UXXh9Uc-unsplash.jpg" alt="" />
                        <div className="p-5 text-left">
                            <h5 className="mb-2 text-sm lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-md ">
                        <img className="h-44 w-full object-cover" src="/haryad-art-C225UXXh9Uc-unsplash.jpg" alt="" />
                        <div className="p-5 text-left">
                            <h5 className="mb-2 text-sm lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 shadow-md ">
                        <img className="h-44 w-full object-cover" src="/haryad-art-C225UXXh9Uc-unsplash.jpg" alt="" />
                        <div className="p-5 text-left">
                            <h5 className="mb-2 text-sm lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        <section className="px-4 md:px-8 lg:px-24 py-12 mt-20 bg-green-500 flex flex-col lg:flex-row" data-aos="fade-up" data-aos-duration="800">
            <div>
                <div className="flex gap-3 items-center">
                    <div className="w-24 h-1 bg-white rounded-lg"></div>
                    <p className="font-semibold text-white">STATISTIK KAMI</p>
                </div>
                <div className="mt-3 flex flex-col gap-4 text-white">
                    <div className="">
                        <h1 className="font-black md:text-3xl">BERPETUALANG, TEMUKAN, KENANG KAMI!</h1>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-xs lg:text-sm">Rawa Indah Almour telah dikunjungi banyak wisatawan. Wisata ini memiliki banyak fasilitas dan penghargaan sejak didirikannya pada tahun 2018.</p>
                    </div>
                </div>
            </div>
            
            <div className="text-white mt-8">
                <div className="flex flex-col md:flex-row">
                    <div className="border-b md:border-r border-white w-60 p-6 flex items-center gap-4">
                        <HiOutlineUserGroup className="text-2xl"/>
                        <div>
                            <p className="font-bold text-sm md:text-xl">500rb+</p>
                            <p className="text-xs lg:text-base">Total Pengunjung</p>
                        </div>
                    </div>
                    <div className="border-b border-white w-60 p-6 flex items-center gap-4">
                        <LuMountainSnow className="text-2xl"/>
                        <div>
                            <p className="font-bold text-sm md:text-xl">10+</p>
                            <p className="text-xs md:text-base">Wahana dan Fasilitas</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="md:border-r border-white w-60 p-6 flex items-center gap-4">
                        <FaMedal className="text-2xl"/>
                        <div>
                            <p className="font-bold text-sm md:text-xl">10+</p>
                            <p className="text-xs md:text-base">Penghargaan</p>
                        </div>
                    </div>
                    <div className="border-t md:border-0 border-white w-60 p-6 flex items-center gap-4">
                        <FaChartArea className="text-2xl"/>
                        <div>
                            <p className="font-bold text-sm md:text-xl">100 m2+</p>
                            <p className="text-xs md:text-base">Luas Wisata</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="px-4 md:px-8 lg:px-24 mt-20" data-aos="fade-up" data-aos-duration="800">
            <div className="flex gap-3 items-center justify-center">
                <div className="w-8 lg:w-16 h-1 bg-green-700 rounded-lg"></div>
                <p className="font-semibold text-sm text-green-700">KEGIATAN DAN PETUALANGAN</p>
            </div>
            <div className="mt-3 flex flex-col gap-4 items-center justify-between text-slate-800 text-center">
                <div className="">
                    <h1 className="font-black text-2xl lg:text-5xl">KEGIATAN BERWISATA</h1>
                </div>
                <div className="lg:w-1/2">
                    <p className="text-xs lg:text-base">Nikmati wisata alam dengan banyak pilihan kegiatan yang menarik </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    <div className="border border-green-500 p-4 flex flex-col items-center">
                        <MdOutlineHolidayVillage className="text-4xl md:text-5xl lg:text-7xl text-green-400"/>
                        <p className="font-semibold text-xs lg:text-lg mt-2">Villa</p>
                    </div>
                    <div className="border border-green-500 p-4 flex flex-col items-center">
                        <GiFishingLure className="text-4xl md:text-5xl lg:text-7xl text-green-400"/>
                        <p className="font-semibold text-xs lg:text-lg mt-2">Pemancingan dan Pemandian</p>
                    </div>
                    <div className="border border-green-500 p-4 flex flex-col items-center">
                        <GiColombianStatue className="text-4xl md:text-5xl lg:text-7xl text-green-400"/>
                        <p className="font-semibold text-xs lg:text-lg mt-2">Situs Peninggalan</p>
                    </div>
                    <div className="border border-green-500 p-4 flex flex-col items-center">
                        <GiCampingTent className="text-4xl md:text-5xl lg:text-7xl text-green-400"/>
                        <p className="font-semibold text-xs lg:text-lg mt-2">Camping Ground</p>
                    </div>
                    <div className="border border-green-500 p-4 flex flex-col items-center">
                        <GiFlyingFox className="text-4xl md:text-5xl lg:text-7xl text-green-400"/>
                        <p className="font-semibold text-xs lg:text-lg mt-2">Flying Fox</p>
                    </div>
                    <div className="border border-green-500 p-4 flex flex-col items-center">
                        <GiPlasticDuck className="text-4xl md:text-5xl lg:text-7xl text-green-400"/>
                        <p className="font-semibold text-xs lg:text-lg mt-2">Perahu Bebek</p>
                    </div>
                    <div className="border border-green-500 p-4 flex flex-col items-center">
                        <MdOutlineFoodBank className="text-4xl md:text-5xl lg:text-7xl text-green-400"/>
                        <p className="font-semibold text-xs lg:text-lg mt-2">Pujasera</p>
                    </div>
                    <div className="border border-green-500 p-4 flex flex-col items-center">
                        <GiKidSlide className="text-4xl md:text-5xl lg:text-7xl text-green-400"/>
                        <p className="font-semibold text-xs lg:text-lg mt-2">Taman Bermain Anak</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="px-4 md:pb-12 md:px-8 lg:px-24 mt-20" data-aos="fade-up" data-aos-duration="800">
            <div className="flex gap-3 items-center justify-center">
                <div className="w-16 h-1 bg-green-700 rounded-lg"></div>
                <p className="font-semibold text-green-700">BLOG KAMI</p>
            </div>
            <div className="mt-3 flex flex-col gap-4 items-center justify-between text-slate-800 text-center">
                <div className="">
                    <h1 className="font-black text-2xl lg:text-5xl">BLOG TERBARU KAMI</h1>
                </div>
                <div className="lg:w-1/2">
                    <p className="text-xs lg:text-base">Berisi kumpulan blog dan berita tentan wisata desa alassumur</p>
                </div>
                <div className="grid mt-3 lg:mt-12 mb-8">
                    <NavLink to="/blog/revolusi-hijau-di-desa-alassumur-mengubah-kotoran-sapi-dan-tanaman-apu-apu-menjadi-solusi-lingkungan-berkelanjutan" className="hover:scale-[1.05] duration-150 md:w-3/5 mx-auto">
                        <div className="bg-white border border-gray-200 shadow-md ">
                            <img className="h-96 w-full object-cover" src="/blog/herokkn.jpeg" alt="" />
                            <div className="p-5 text-left">
                                <h5 className="mb-2 text-sm lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Revolusi Hijau di Desa Alassumur: Mengubah Kotoran Sapi dan Tanaman...</h5>
                                <p className="mb-3 font-normal text-xs lg:text-base text-gray-700 dark:text-gray-400">Jember, 10 Juli 2024 - Rektor Universitas Jember secara resmi melepas peserta Kuliah Kerja Nyata (KKN) angkatan 2024 di Lapangan kampus pagi ini...</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </section>
    </div>
    )
}