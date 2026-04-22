import Image from "next/image";
import profle from "@/public/profile.jpeg";
import Link from "next/link";

import Certifications from "./_components/Certifications";
import Clients from "./_components/Clients";
import Testimonial from "./_components/Testimonial";
import ContactForm from "./_components/ContactForm";
import Portfolio from "./_components/Portfolio";
import Internship from "./_components/Internship";
import Education from "./_components/Education";
import Skills from "./_components/Skills";


import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  CodeBracketSquareIcon,
  NewspaperIcon,
  PencilSquareIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <div
        className="py-8 lg:py-12 bg-gradient-to-bl from-[#EADFF8] via-[#fff] to-[#E5F8F7]"
        id="home"
      >
        <div className="container mx-auto mb-32">
          <div className="flex flex-col lg:flex-row lg:gap-x-32">
            <div className="lg:w-3/5 grid content-between">
              <div className="lg:mb-32">
                <h1 className="text-gray-900 font-semibold text-5xl lg:text-7xl">
                  Hello, I&apos;m
                  <br />
                  Gayatri Sonawane
                </h1>
                <div className="text-lg text-gray-600 my-6">
                  I&apos;m a Computer Science Engineering student with hands-on experience in DevOps, Cloud (AWS), and Full Stack Development. Passionate about building scalable, secure, and user-focused applications using modern tools and technologies.
                </div>
                <Link
                  href="https://www.linkedin.com/in/gayatri-sonawane-5163ab286"
                  className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
                >
                  Say Hello!
                </Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-4 lg:my-0">
                <div className="flex justify-center flex-col items-center gap-y-2 p-6 bg-[#edd8ff80]">
                  <div className="font-semibold text-2xl">Fresher(EntryLevel)</div>
                  <div className="">Experience</div>
                </div>
                <div className="flex justify-center flex-col items-center gap-y-2 p-6 bg-[#edd8ff80]">
                  <div className="font-semibold text-2xl">5+</div>
                  <div className="">Project Completed</div>
                </div>
                <div className="flex justify-center flex-col items-center gap-y-2 p-6 bg-[#edd8ff80]">
                  <div className="font-semibold text-2xl">5</div>
                  <div className="">Happy Client</div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/4  rounded-full flex justify-center items-center">
              <div className="w-72 h-72 relative rounded-full overflow-hidden mx-auto">
  <Image
    src={profle}
    alt="profile"
    fill
    className="object-cover"
  />
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 lg:py-12 bg-gray-50" id="education">
  <div className="container mx-auto">

    <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
      Education
    </h2>

    <div className="text-gray-400 text-center text-lg w-full lg:w-1/2 mx-auto">
      My academic background and qualifications.
    </div>

    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Degree */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900">
          Amrutvahini College of Engineering, Sangamner
        </h3>

        <p className="text-gray-600 mt-2">
          B.E in Computer Science and Engineering | 2021 – 2025
        </p>

        <p className="text-gray-800 font-medium mt-3">
          CGPA: 8.75
        </p>
      </div>

      {/* HSC */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-gray-900">
          P.V.P. College of Arts, Science and Commerce, Loni Kd
        </h3>

        <p className="text-gray-600 mt-2">
          Higher Secondary Education (Class XII) | 2020 – 2021
        </p>

        <p className="text-gray-800 font-medium mt-3">
          Percentage: 82.33%
        </p>
      </div>

    </div>
  </div>
</div>
        <div
          className="container mx-auto bg-white rounded-2xl shadow-[0_36px_105px_0_rgba(43,56,76,0.10)] relative -mb-16"
          id="about"
        >
          <div className="flex items-center flex-col lg:flex-row lg:gap-x-32 p-4 lg:p-28">
            <div className="lg:w-2/5 flex justify-center items-center bg-[] rounded-xl object-cover">
              <div className="relative inline-block">
  <Image
    src={profle}
    alt="profile"
    width={250}
    height={250}
    className="rounded-xl object-cover"
  />
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-9 flex gap-1 bg-white w-auto mx-auto  p-3 rounded shadow-[0_12px_64px_0_rgba(28,25,25,0.12)]">
                  
                  <Link
                    href="https://www.linkedin.com/in/gayatri-sonawane-5163ab286"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                  >
                    <i className="pi pi-linkedin group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                  <Link
                    href="https://github.com/gayatrisonawane942"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                  >
                    <i className="pi pi-github group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                  <Link
                    href="https://www.instagram.com/gayos_02?igsh=MjRuZGtvcm0zajZt"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                  >
                    <i className="pi pi-instagram group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                  >
                    <i className="pi pi-twitter group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                  
                </div>
              </div>
            
            </div>
            
            <div className="lg:w-3/5 grid mt-16 lg:mt-0">
              <div>
                <h1 className="text-gray-900 font-semibold text-4xl">
                  I am a fresher Entry-Level DevOps, Cloud, and Web Developer
                </h1>
                <div className="text-lg text-gray-600 my-6">
                  <p className="mb-3">
                    I develop services for clients, specializing in building scalable web applications, cloud solutions, and automation systems. My passion is to create efficient and reliable digital experiences using modern technologies like AWS, Docker, Kubernetes, and web development.
                  </p>
                  <p>
                    I develop services for customers specializing creating
                    stylish, modern websites, web services.
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <Link
                    href="https://github.com/gayatrisonawane942"
                    className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
                  >
                    My Projects
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1uF_-5WvBwa4sCIDXaEFOfqeQuOLwMCb-/view?usp=drivesdk"
                    className="p-button p-button-outlined text-primary-500 font-bold no-underline"
                  >
                    <ArrowDownTrayIcon className="size-6 text-primary-500 mr-3" />
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
<div className="py-8 lg:py-12 bg-gray-50" id="skills">
  <div className="container mx-auto">
    
    <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
      Technical Skills
    </h2>

    <div className="text-gray-400 text-center text-lg lg:w-1/2 mx-auto mb-12">
      My technical expertise and tools I use to build scalable applications.
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Column 1 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-3">Operating Systems</h3>
        <p>Windows, Linux</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-3">Programming</h3>
        <p>Python, Core Java, Object-Oriented Programming (OOP)</p>
      </div>

      

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-3">Database</h3>
        <p>SQL, MySQL</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-3">Web Technologies</h3>
        <p>HTML, CSS</p>
      </div>

      {/* Column 2 */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-3">DevOps & Automation</h3>
        <p>Jenkins, SonarQube, Maven, Terraform, AWS DevOps</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-3">Containers and Orchestration Tool</h3>
        <p>Docker, Kubernetes</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-3">Cloud Platform</h3>
        <p>AWS (EC2, VPC, IAM, S3, Route 53)</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold text-lg mb-3">Tools</h3>
        <p>VS Code, Jupyter Notebook, Git, GitHub</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow lg:col-span-2">
        <h3 className="font-semibold text-lg mb-3">Soft Skills</h3>
        <p>Problem Solving, Team Collaboration, Adaptability, Time Management</p>
      </div>

    </div>
  </div>
</div>

{/* ✅ Internship Section HERE */}
<Internship />

      <div className="bg-gray-50 py-8 lg:py-12" id="process">
        <div className="container mx-auto">
          <div className="flex items-center flex-col lg:flex-row lg:gap-x-32">
            <div className="lg:w-1/2">
              <div className="">
                <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6">
                  Work Process
                </h2>
                <div className="text-gray-500 text-lg">
                  <p className="mb-4">
                    I follow a systematic and structured approach for all my projects to ensure scalability, efficiency, and high performance. My process focuses on understanding requirements, selecting the right technologies, and delivering reliable solutions.
                  </p>
                  <p>
                    I specialize in designing and deploying scalable cloud-based applications with automation, reliability, and performance in mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2">
                <div className="flex flex-col gap-6 mt-8 lg:-mt-6">
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <a href="https://github.com/gayatrisonawane942/CI-CD-Pipeline-Jenkins-Docker/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group/icon no-underline">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover/icon:bg-primary-500 mb-8 cursor-pointer transition-colors duration-200">
                      <NewspaperIcon className="size-6 text-primary-500 group-hover/icon:text-white transition-colors duration-200" />
                    </div>
                    </a>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      1. Research
                    </div>
                    <p className="text-gray-600">
                        I understand the project requirements, analyze the problem statement, and explore the best technologies and approaches suitable for the project (Web, DevOps, or Machine Learning).


                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <a href="https://github.com/gayatrisonawane942/CI-CD-Pipeline-Jenkins-Docker/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group/icon no-underline">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover:bg-primary-500 mb-8">
                      <CodeBracketSquareIcon className="size-6 text-primary-500 group-hover:text-white" />
                    </div>
                    </a>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      2. Plan & Analyze
                    </div>
                    <p className="text-gray-600">
I design the system architecture, define workflows, and select appropriate tools and technologies to ensure smooth and efficient development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex flex-col gap-6">
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <a href="https://github.com/gayatrisonawane942/CI-CD-Pipeline-Jenkins-Docker/blob/main/architecture-diagram.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group/icon no-underline">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover:bg-primary-500 mb-8">
                      <PencilSquareIcon className="size-6 text-primary-500 group-hover:text-white" />
                    </div>
                    </a>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      3. Design
                    </div>
                    <p className="text-gray-600">
I develop the solution by building applications or models using clean code practices, modern frameworks, and scalable design principles.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <a href="https://github.com/gayatrisonawane942/CI-CD-Pipeline-Jenkins-Docker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block group/icon no-underline">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover:bg-primary-500 mb-8">
                      <PresentationChartLineIcon className="size-6 text-primary-500 group-hover:text-white" />
                    </div>
                    </a>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      4. Launch
                    </div>
                    <p className="text-gray-600">
                      I deploy the project on suitable platforms (such as cloud services), ensure proper testing, and optimize performance for real-world use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      
      <div className="py-8 lg:py-12 bg-white" id="portfolio">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
            Portfolio
          </h2>
          <div className="text-gray-400 text-center text-lg lg:w-1/2 mx-auto">
            <p>
               A collection of my projects demonstrating expertise in full-stack development, Machine Learning and DevOps practices. 
               These projects include CI/CD pipelines using Jenkins, containerized applications with Docker, and 
               cloud deployments on AWS, focusing on automation, scalability, and production readiness.
            </p>
          </div>
          <Portfolio />
          <div className="mt-12 text-center">
            <Link
              href="https://github.com/gayatrisonawane942"
              className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
            >
              More Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="py-8 lg:py-12 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-white font-semibold text-4xl lg:text-5xl mb-6 text-center w-full lg:w-1/2 mx-auto">
            Do you have Project Idia? Let&apos;s discuss your project!
          </h2>
          <div className="text-gray-300 text-center text-lg w-full lg:w-1/2 mx-auto">
            <p>
              Let’s collaborate to design and build scalable, real-world solutions.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="http://localhost:3000/#contact"
              className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
            >
              <span className="inline-block mr-3"> Let’s work Together</span>
              <ArrowRightIcon className="size-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="py-8 lg:py-12 bg-gradient-to-bl from-[#E5F8F7] via-[#fff] to-[#EADFF8]"
        id="Certifications"
      >
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-4xl lg:text-5xl mb-6 text-center">
            Certifications
          </h2>
          <div className="text-gray-400 text-center text-lg w-full lg:w-1/2 mx-auto">
            Explore my articles on DevOps practices, project experiences, and technical knowledge about Cloud, Machine Learning, and Web Development.
          </div>
          <div className="mt-16">
            <Certifications />
          </div>
        </div>
      </div>
      <div className="py-8 lg:py-12 bg-gray-50" id="services">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32 items-center">
            <div>
              <h3 className="text-gray-950 text-4xl lg:text-5xl font-semibold">
                What I do?
              </h3>
              <div className="text-gray-400 text-lg mt-6">
                I specialize in building scalable web applications, automating CI/CD pipelines, and 
                developing intelligent machine learning solutions to solve real-world problems.
              </div>
              <div className="text-gray-400 text-lg mt-4">
                I am passionate about designing efficient systems that combine development, 
                automation, and AI to deliver impactful and production-ready solutions.
              </div>

              <Link
                href="https://www.linkedin.com/in/gayatri-sonawane-5163ab286"
                className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline mt-12"
              >
                Say Hello!
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-md border-0 border-white hover:border-primary-500 hover:shadow-[0_32px_96px_0_rgba(28,25,25,0.16)] border-l-4 border-solid p-8">
                <h3>DevOps(CI/CD Automation)</h3>
                <div className="text-gray-700 mt-4">
                  I design and implement automated CI/CD pipelines using Jenkins, Docker, 
                  and GitHub to enable fast, reliable, and scalable software delivery.
                </div>
              </div>
              <div className="bg-white rounded-md border-0 border-white hover:border-primary-500 hover:shadow-[0_32px_96px_0_rgba(28,25,25,0.16)] border-l-4 border-solid p-8">
                <h3>Cloud Platform(AWS)</h3>
                <div className="text-gray-700 mt-4">
                  I work with AWS services like EC2 and VPC to deploy and manage scalable cloud-based applications.
                </div>
              </div>
              <div className="bg-white rounded-md border-0 border-white hover:border-primary-500 hover:shadow-[0_32px_96px_0_rgba(28,25,25,0.16)] border-l-4 border-solid p-8">
                <h3>Web Development</h3>
                <div className="text-gray-700 mt-4">
                  I build responsive and user-friendly web applications using modern frameworks 
                  like HTML5 and CSS3 with a focus on performance and usability.
                </div>
              </div>
              <div className="bg-white rounded-md border-0 border-white hover:border-primary-500 hover:shadow-[0_32px_96px_0_rgba(28,25,25,0.16)] border-l-4 border-solid p-8">
                <h3>Machine Learning</h3>
                <div className="text-gray-700 mt-4">
                  I develop intelligent ML models for prediction and classification tasks such as disease detection, using Python and deep learning techniques.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12" id="contact">
        <div className="p-8 lg:p-20 bg-white rounded-2xl shadow-[0_59px_124px_0_rgba(0,0,0,0.12)] relative z-10 -mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32 items-center">
            <div>
              <h3 className="text-gray-900 text-4xl font-semibold">
                Let’s discuss your Project
              </h3>
              <div className="text-gray-400 text-lg mt-4 mb-4 lg:mb-0">
                There are many variations of ideas for digital solutions, but every project becomes unique when we design it with the right architecture, scalability, and user experience in mind.
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-map-marker group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">Address:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      At Post Loni Khurd, Taluka-Rahata, District-Ahilyanagar, 413713
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-at group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">My Email:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      gayatrisonawane942@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-phone group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">Call Me Now:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      +91 00000 00000      
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mt-8">
                
                <Link
                  href="linkedin.com/in/gayatri-sonawane-5163ab286"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-linkedin group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="github.com/gayatrisonawane942"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                >
                  <i className="pi pi-github group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/gayos_02?igsh=MjRuZGtvcm0zajZt"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-instagram group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-twitter group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
               
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-lg">
                I am always open to discussing new opportunities, collaborations, and innovative project ideas in DevOps, Cloud, and Web Development.
              </div>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
