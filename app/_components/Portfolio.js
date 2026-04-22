import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Page() {
  const portfolioData = [
    {
      id: 1,
      imageUrl: "portfolio-1.png",
      category: "DEVOPS / CI-CD",
      title: "CI/CD Pipeline with Jenkins, Docker & GitHub ",
      description:
        "Implemented a fully automated CI/CD pipeline using Jenkins, Docker, and GitHub for continuous integration and deployment on AWS EC2.",
      link: "https://github.com/gayatrisonawane942/CI-CD-Pipeline-Jenkins-Docker",
    },
    {
      id: 2,
      imageUrl: "portfolio-2.png",
      category: "CLOUD / TERRAFORM",
      title: "AWS Infrastructure Provisioning using Terraform",
      description:
        "Provisioned and managed scalable AWS infrastructure using Terraform, automating resource creation such as EC2 instances, VPC, and networking components following Infrastructure as Code (IaC) best practices.",
      link: "https://github.com/gayatrisonawane942/aws-terraform-infrastructure",
    },
    {
      id: 3,
      imageUrl: "portfolio-3.jpg",
      category: "MERN STACK DEVELOPMENT",
      title: "Restaurant Reservation System",
      description:
        "Developed a web-based restaurant reservation system that allows users to book tables, manage reservations, and improve customer experience with a streamlined booking interface.",
      link: "https://github.com/gayatrisonawane942/Restaurant_Reservation_System",
    },
    {
      id: 4,
      imageUrl: "portfolio-4.png",
      category: "MACHINE LEARNING",
      title: "Crop Diseases Detection Using Deep Learning",
      description:
        "Developed a deep learning-based system to detect crop diseases from images, helping farmers identify plant health issues early and improve agricultural productivity.",
      link: "https://github.com/gayatrisonawane942/Crop-Diseases-Detection-Using-Deep-Learning-main",
    },
    {
      id: 5,
      imageUrl: "portfolio-5.png",
      category: "WEB DEVELOPMENT",
      title: "Notes Making Application System",
      description: "Developed a simple and efficient notes-making application that allows users to create, edit, and delete notes with an intuitive user interface for better productivity and organization.",
      link: "https://github.com/gayatrisonawane942/Notes-Making-Application-System",
    },
    {
      id: 6,
      imageUrl: "portfolio-6.png",
      category: "MACHINE LEARNING",
      title: "Disease Prediction System using Machine Learning",
      description:
        "Built a machine learning model that predicts possible diseases based on user-input symptoms, assisting in early diagnosis and improving healthcare accessibility through intelligent predictions.",
      link: "https://github.com/gayatrisonawane942/Diseases-prediction-system-using-machine-learning-main#",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
        {portfolioData.map((portfolio) => (
          <div
            key={portfolio.id}
            className="bg-white rounded-lg border border-solid border-[#E6E8EB] overflow-hidden "
          >
            <div className="relative h-[248px]">
              <Image
                src={`portfolio/${portfolio.imageUrl}`}
                fill
                className="object-cover"
                alt="blog"
              />
            </div>
            <div className="p-8">
              <div className="text-gray-400 text-xs font-medium">
                {portfolio.category}
              </div>
              <div className="text-gray-900 text-lg font-semibold mb-1">
                {portfolio.title}
              </div>
              <div className="text-gray-600 text-sm mt-3">
                {portfolio.description}
              </div>

              <Link
  href={portfolio.link}
  target="_blank"
  rel="noopener noreferrer"
>
                Case Study
                <ArrowRightIcon className="size-6 text-primary-500 ml-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
