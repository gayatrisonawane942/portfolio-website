import Link from "next/link";
export default function Internship() {
  return (
    <section id="experience" className="ppy-10 lg:py-24 bg-gradient-to-bl from-[#E5F8F7] via-[#fff] to-[#EADFF8]">
      <div className="container mx-auto">

        <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
          Internship Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">

          {/* Internship 1 */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900">
              Sumago Infotech Pvt Ltd
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              MERN Stack Developer Intern | May 2024 – June 2024
            </p>

            <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
              <li>Gained hands-on experience in full-stack development</li>
              <li>Led a team of 4 members for Restaurant Reservation System</li>
              <li>Worked with React.js, Node.js, Express.js, MongoDB</li>
            </ul>
            <Link
                href="https://github.com/gayatrisonawane942/Restaurant_Reservation_System"
                target="_blank"
                className="text-blue-600 font-medium inline-block mt-4 hover:underline" >
                View Project →
            </Link>
          </div>

          {/* Internship 2 */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900">
              Proazure Software Solution Pvt. Ltd.
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Web Developer Intern | Dec 2023 – Jan 2024
            </p>

            <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
              <li>Developed web applications with CRUD functionality</li>
              <li>Implemented authentication system</li>
              <li>Worked with HTML, CSS, PHP, MySQL</li>
            </ul>
             <Link
                href="https://github.com/gayatrisonawane942/Notes-Making-Application-System"
                target="_blank"
                className="text-blue-600 font-medium inline-block mt-4 hover:underline">
                View Project →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}