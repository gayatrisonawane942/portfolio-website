import Link from "next/link";
import Image from "next/image";


export default function Page() {
  return (
    <footer className="bg-gray-800 py-12 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
          <Link href="/">
  <span className="sr-only">Gayatri Sonawane</span>
  
</Link>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-12">
              <Link href="#" className="text-gray-50 no-underline">
                Home
              </Link>
              <Link href="#" className="text-gray-50 no-underline">
                Education
              </Link>
              <Link href="#" className="text-gray-50 no-underline">
                About
              </Link>
              <Link href="#" className="text-gray-50 no-underline">
                Skills
              </Link>
              <Link href="#" className="text-gray-50 no-underline">
                Internship
              </Link>
              <Link href="#" className="text-gray-50 no-underline">
                Process
              </Link>
              
              <Link href="#" className="text-gray-50 no-underline">
                Portfolio
              </Link>
              <Link href="#" className="text-gray-50 no-underline">
                Certifications
              </Link>
              <Link href="#" className="text-gray-50 no-underline">
                Services
              </Link>
            
              <Link href="#" className="text-gray-50 no-underline">
                Contact
              </Link>
            </div>
          </div>
          <div className="text-white">
            Copyright © 2026{" "}
            <a
              href="#"
              className="text-white no-underline"
              target="_blank"
            >
              
            </a>
            .
          </div>
        </div>
      </div>
      <div className="text-gray-50 text-[11px] absolute left-0 right-0 bottom-3 text-center">
        Designed by{" "}
        <a
          href="#"
          className="text-gray-400"
          target="_blank"
        >
          @Gayatri Sonawane
        </a>
      </div>
    </footer>
  );
}
