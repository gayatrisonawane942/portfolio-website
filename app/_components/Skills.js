"use client";

export default function Skills() {
  return (
    <section id="skills" className="py-8 lg:py-12 bg-gradient-to-bl from-[#E5F8F7] via-[#fff] to-[#EADFF8]">
      <div className="container mx-auto px-4">

        <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
          Technical Skills
        </h2>

        <p className="text-gray-400 text-center text-lg lg:w-1/2 mx-auto mb-12">
          My technical expertise and tools I use to build scalable applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* OS */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Operating System</h3>
            <p className="text-gray-600">Windows, Linux</p>
          </div>

          {/* Languages */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Languages</h3>
            <p className="text-gray-600">
              Python, Core Java, Object-Oriented Programming (OOP)
            </p>
          </div>

          {/* Database */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Database</h3>
            <p className="text-gray-600">SQL, MySQL</p>
          </div>

          {/* Web */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Web Technologies</h3>
            <p className="text-gray-600">HTML, CSS</p>
          </div>

          {/* DevOps */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-gray-900 mb-2">DevOps & Automation</h3>
            <p className="text-gray-600">
              Jenkins, SonarQube, Maven, AWS DevOps, Terraform
            </p>
          </div>

          {/* Containers */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-gray-900 mb-2">
              Containers & Orchestration
            </h3>
            <p className="text-gray-600">Docker, Kubernetes</p>
          </div>

          {/* Version Control */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-gray-900 mb-2">
              Version Control
            </h3>
            <p className="text-gray-600">Git, GitHub</p>
          </div>

          {/* Cloud */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Cloud Platform</h3>
            <p className="text-gray-600">
              AWS (VPC, EC2, IAM, S3, Route 53)
            </p>
          </div>

          {/* Tools */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Tools</h3>
            <p className="text-gray-600">
              VS Code, Jupyter Notebook
            </p>
          </div>

          {/* Soft Skills */}
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Soft Skills</h3>
            <p className="text-gray-600">
              Problem Solving, Team Collaboration, Adaptability
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}