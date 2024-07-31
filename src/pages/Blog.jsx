import { NavLink } from "react-router-dom";

export default function Blog(){
    return (
        <div className="mt-20 lg:mt-4 w-full">
            <section className="dark:bg-gray-900 bg-gradient-to-b from-white to-green-50">
                <div className="py-8 pt-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <h1 className="mb-4 mt-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Blog Kami</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Jelajahi blog mengenai wisata desa alassumur</p>
                </div>
            </section>
            <section className="px-4 md:px-8 lg:px-24 py-12" data-aos="fade-up" data-aos-duration="800">
                <div className="flex gap-3 items-center justify-center">
                    <div className="w-4 md:w-8 lg:w-16 h-1 bg-green-700 rounded-lg"></div>
                    <p className="font-semibold text-green-700">BLOG ALASUMUR</p>
                </div>
                <div className="mt-3 flex flex-col gap-4 items-center justify-between text-slate-800 text-center">
                    <div className="">
                        <h1 className="font-black text-2xl lg:text-5xl">BLOG DAN BERITA</h1>
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