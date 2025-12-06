import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Image
                  src="/logo.webp"
                  alt="WEBNOME Logo"
                  width={200}
                  height={32}
                  className="object-contain"
                />
              </div>
              {/* <span className="text-xl font-bold">
                <span className="text-[#00AEEF]">WEB</span>
                <span className="text-[#F7931E]">NOME</span>
              </span> */}
            </Link>
            <p className="text-gray-400">
              Transforming businesses with innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#00AEEF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Web Development</span>
              </li>
              <li>
                <span className="text-gray-400">Mobile Apps</span>
              </li>
              <li>
                <span className="text-gray-400">Cloud Solutions</span>
              </li>
              <li>
                <span className="text-gray-400">AI & ML</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00AEEF] hover:to-[#F7931E] transition-all duration-300">
                <span className="text-white">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00AEEF] hover:to-[#F7931E] transition-all duration-300">
                <span className="text-white">t</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00AEEF] hover:to-[#F7931E] transition-all duration-300">
                <span className="text-white">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00AEEF] hover:to-[#F7931E] transition-all duration-300">
                <span className="text-white">@</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} WEBNOME Tech Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


