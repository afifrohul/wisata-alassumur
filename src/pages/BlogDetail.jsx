import React from 'react';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default function BlogDetail() {

  return (
    <>
      <div className="bg-white dark:bg-gray-800 py-4 px-4 md:px-12">
        <div>
          <div className="pt-12 md:pt-20 pb-5">
            <div className="container flex flex-wrap">
                <span className="relative hidden lg:inline-block lg:animate-pulse">
                  <svg viewBox="0 0 52 24" fill="#34d399" className="absolute top-0 left-0 z-0 hidden w-32 mt-8 ml-20 text-blue-gray-100 lg:w-32 lg:ml-[720px] lg:mt-10 sm:block">
                      <defs>
                      <pattern id="b039bae0-fdd5-4311-b198-8557b064fce0" x="0" y="0" width=".135" height=".30">
                          <circle cx="1" cy="1" r=".7" />
                      </pattern>
                      </defs>
                      <rect fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)" width="52" height="24" />
                  </svg>
                </span>
                <div className='py-4 lg:py-28'>
                  <p className='text-gray-700 dark:text-white text-sm lg:text-lg'>Blog Wisata Alassumur</p>
                  <h1 className="font-bold text-xl lg:text-4xl leading-snug text-gray-700 dark:text-white max-w-5xl">
                  Revolusi Hijau di Desa Alassumur: Mengubah Kotoran Sapi dan Tanaman Apu-Apu Menjadi Solusi Lingkungan Berkelanjutan
                  </h1>
                  <div className='flex items-center my-2 gap-1 font-mono italic'>
                      <MdOutlineAccessTimeFilled className='text-green-500 text-sm lg:text-xl' />
                      <p className='text-sm font-semibold lg:text-xl text-gray-500 dark:text-gray-300'>27 Juli 2024</p>
                  </div>
                  <div className="mt-2 flex gap-1 lg:gap-2 flex-wrap">
                      <span className='inline-block rounded-full py-1 px-2 lg:px-4 bg-green-500 text-[10px] lg:text-sm font-semibold text-gray-200'>#kknunejumd</span>
                      <span className='inline-block rounded-full py-1 px-2 lg:px-4 bg-green-500 text-[10px] lg:text-sm font-semibold text-gray-200'>#universitasjember</span>
                      <span className='inline-block rounded-full py-1 px-2 lg:px-4 bg-green-500 text-[10px] lg:text-sm font-semibold text-gray-200'>#desaalassumur</span>
                      <span className='inline-block rounded-full py-1 px-2 lg:px-4 bg-green-500 text-[10px] lg:text-sm font-semibold text-gray-200'>#lp2munej</span>
                      <span className='inline-block rounded-full py-1 px-2 lg:px-4 bg-green-500 text-[10px] lg:text-sm font-semibold text-gray-200'>#unejtoday</span>
                      <span className='inline-block rounded-full py-1 px-2 lg:px-4 bg-green-500 text-[10px] lg:text-sm font-semibold text-gray-200'>#desawisata</span>
                  </div>
                </div>
            </div>
          </div>
          <hr />
          <div className="container flex items-center justify-between w-full">
            <div className="flex flex-col lg:flex-row w-full items-start">
              <div className="w-full lg:w-2/3 py-5 lg:pr-5">
                <div className="pt-4">
                <img src='/blog/herokkn.jpeg' alt="" className="h-32 md:h-96 mx- object-cover w-full rounded-md" />
                <div className="text-gray-500 dark:text-gray-300 mt-8 text-sm md:text-base">
                    <p>Jember, 10 Juli 2024 - Rektor Universitas Jember secara resmi melepas peserta Kuliah Kerja Nyata (KKN) angkatan 2024 di Lapangan kampus pagi ini. Sebanyak 3.648 mahasiswa akan disebar ke berbagai daerah, yaitu Banyuwangi, Bondowoso sebanyak 1.122 mahasiswa, Lumajang, Jember, dan Situbondo untuk melaksanakan program pengabdian kepada masyarakat selama 45 hari.Program KKN tahun ini mengusung tema "Unej Membangun Desa". Mahasiswa akan dihadapkan pada beberapa bidang, termasuk pendidikan, kesehatan, pertanian, dan pemberdayaan ekonomi lokal. Dengan semangat dan dedikasi, diharapkan para mahasiswa dapat memberikan dampak positif dan meningkatkan kualitas hidup masyarakat di lokasi KKN mereka.</p>
                    <br />
                    <p>Kelompok 115 dengan penempatan di Desa Alassumur, Kec. Pujer, Kab. Bondowoso ini telah melakukan survey untuk melihat potensi Desa. Di Desa Alassumur terdapat sebuah rawa yang ditumbuhi dengan tanaman apu-apu yang belum diketahui pemanfaatannya bagi masyarakat sekitar. Selain itu, mayoritas warga sekitar sebagai peternak sapi. Kotoran yang dihasilkan dari hewan ternaknya dibuang sembarangan. Sehingga, kami mencari manfaat 2 hal yang kami temukan agar memiliki potensi untuk dikembangkan. Melalui potensi desa tersebut, kami mempertimbangkan rencana program kerja dengan memanfaatkan tanaman apu-apu dan kotoran sapi.</p>
                    <br />
                    <p>Program utama yang kami usung ialah Tumbuh Kotapu (Tanaman Tumbuh Subur Dengan Kotoran Sapi dan Apu-apu) yang merupakan penggabungan kotoran sapi dengan tumbuhan apu-apu sebagai pupuk organik untuk meningkatkan kesuburan tanah, hasil panen, dan daya tahan tanaman terhadap hama serta penyakit. Program yang kami rancang telah mendapatkan respon positif dari berbagai pihak yakni kepala desa, Penyuluh Pertanian Lapangan Alassumur, dan petani hingga peternak. Hal ini disampaikan oleh Bapak Hasani selaku PPL Desa Alassumur (Balai Desa, 24 Juli 2024), "Progam ini sangat menarik, sebab melihat kondisi tanah yang terlalu banyak menggunakan pupuk kimia".</p>
                    <br />
                    <p>Sehingga dengan adanya pupuk Kotapu dapat memperbaiki struktur tanah dan menjaga mikroorganisme tanah dalam mendukung pertumbuhan tanaman. Kegiatan yang akan kami lakukan antara lain; melakukan penyuluhan dan pelatihan untuk pembuatan pupuk organik, pengumpulan bahan baku seperti kotoran sapi dan tanaman apu-apu, pembuatan pupuk organik bersama masyarakat serta melakukan uji coba pengaplikasian pupuk pada lahan. Program tumbuh kotapu ini ditujukan kepada masyarakat dengan usia produktif, masyarakat yang memelihara sapi, dan kelompok tani Desa Alassumur.</p>
                    <br />
                    <p>Dengan adanya pupuk organik diharapkan dapat mengatasi masalah akan limbah kotoran sapi dan tanaman apu-apu serta mewujudkan desa yang ramah lingkungan. Selain itu, program ini dapat meningkatkan kesadaran masyarakat akan pentingnya pertanian berkelanjutan yang akan memicu permintaan terhadap pupuk ramah lingkungan di Desa Alassumur.</p>
                    <br />
                    <p>Kelompok mahasiswa KKN 115 UMD UNEJ Tahun 2024 di Desa Alassumur beranggotakan 12 orang diantaranya yaitu Reyzal Narendra R (Kordes); Risalah Alifatus Z; Amelia Ayu Agustin; Wildan Ilhafa A; Siska Ainun R; Siti Hotimatul H; Rana Saffanah; Afif Rohul A; Lintang Aura S; Mohamad Amar A; Hanifa Eka Y; dan  Yuniar Tri A. Kelompok KKN UMD 115 didampingi oleh Dosen Pendamping Lapangan (DPL) bernama Emi Zulaikha, S.H., M.H. yang memberikan arahan dan bimbingan dalam membuat program kerja selama program KKN berlangsung.</p>
                </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 lg:pl-16 mt-8 lg:sticky lg:top-20">
                <div className="bg-white dark:bg-gray-800 w-full lg:max-w-sm md:flex md:gap-2 lg:block">
                  <div className='md:w-1/2 lg:w-full'>
                    <h5 className="text-gray-900 dark:text-white text-xl leading-tight font-medium">Postingan Terbaru</h5>
                      <NavLink to='/blog/revolusi-hijau-di-desa-alassumur-mengubah-kotoran-sapi-dan-tanaman-apu-apu-menjadi-solusi-lingkungan-berkelanjutan'>
                        <div className='flex flex-row w-full mt-6 hover:scale-[1.010] transition-all duration-200' >
                          <div className="h-20 w-32">
                            <img src='/blog/herokkn.jpeg' alt='img' className="w-full h-full border object-cover rounded-lg" />
                          </div>
                          <div className="px-6 py-2 flex flex-col justify-start">
                            <h5 className="text-gray-900 dark:text-white md:text-base text-base md:font-medium font-normal mb-1">Revolusi Hijau di Desa Alassumur: Mengubah...</h5>
                            <p className='text-gray-600 dark:text-gray-200 text-md italic'></p>
                          </div>
                        </div>
                      </NavLink>
                  </div>

                  <div className='md:w-1/2 lg:w-full'>
                    <h5 className='text-gray-900 dark:text-white text-xl leading-tight font-medium pb-2 lg:my-4'>Tags</h5>
                        <span className='inline-block cursor-pointer bg-gray-200 dark:bg-gray-700 hover:border-green-500 transition border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2 lowercase'>#kknunejumd</span>
                        <span className='inline-block cursor-pointer bg-gray-200 dark:bg-gray-700 hover:border-green-500 transition border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2 lowercase'>#universitasjember</span>
                        <span className='inline-block cursor-pointer bg-gray-200 dark:bg-gray-700 hover:border-green-500 transition border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2 lowercase'>#desaalassumur</span>
                        <span className='inline-block cursor-pointer bg-gray-200 dark:bg-gray-700 hover:border-green-500 transition border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2 lowercase'>#lp2munej</span>
                        <span className='inline-block cursor-pointer bg-gray-200 dark:bg-gray-700 hover:border-green-500 transition border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2 lowercase'>#unejtoday</span>
                        <span className='inline-block cursor-pointer bg-gray-200 dark:bg-gray-700 hover:border-green-500 transition border-2 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2 lowercase'>#desawisata</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='w-full mt-8 lgmt-4'>
            <h2 className="font-bold text-3xl leading-snug text-gray-700 dark:text-white">
              Galeri
            </h2>
            <p className='text-gray-500 dark:text-gray-300 text-base mt-2'>Kumpulan dokumentasi terkait program kerja</p>
            <div className="my-4">
              <span className="inline-block w-40 h-1 rounded-full bg-green-500"></span>
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-green-500"></span>
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-green-500"></span>
            </div>
            <div>
            </div>
          </div>
          <div className='flex flex-wrap gap-4'>
            <img src="/blog/1.jpg" alt="" className='rounded w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover' />
            <img src="/blog/4.png" alt="" className='rounded w-32 h-32 md:w-48 md:h-48 lg:w-56  lg:h-56 object-cover' />
            <img src="/blog/2.jpeg" alt="" className='rounded w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover' />
            <img src="/blog/3.jpg" alt="" className='rounded w-32 h-32 md:w-48 md:h-48 lg:w-56  lg:h-56 object-cover' />
          </div>
        </div>
      </div>
    </>
  );
}