export default function Footer() {
    return (
    <footer className="bg-green-500 text-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="/" className="flex items-center">
                    <img src="/LOGO KKN 115.png" className="h-8 me-3" alt=" Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alassumur</span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Ikuti Kami</h2>
                    <ul className=" font-medium">
                        <li className="mb-4">
                            <a href="https://www.instagram.com/kkn115.alassumur" target="_blank" className="hover:underline ">Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@KKN115ALASSUMUR" target="_blank" className="hover:underline">YouTube</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Halaman</h2>
                    <ul className="font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Tentang</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-white text-center">
            © 2024 <a href="" className="hover:underline">Alassumur</a>. All Rights Reserved.
        </div>
        </div>
    </footer>


    )
}