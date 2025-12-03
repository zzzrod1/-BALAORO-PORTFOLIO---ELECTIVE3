"use client"

import { PortfolioCard } from "@/components/portfolio-card"

const portfolioItems = [
  {
    number: "01",
    title: "Assignment 1 - REST API",
    description:
      'The assignment includes screenshots illustrating the creation of a new user entry using Spring Initializr and Postman for POST requests, reading data via GET requests in Postman and phpMyAdmin showing the user table with entries like "Rod Balaoro", updating user information through PUT requests, and deleting entries with DELETE requests, showcasing practical implementation of backend web services with database integration.',
    documentUrl: "https://drive.google.com/file/d/1-WSryTBGBwrUA6HkzWT4K0xXUbS2Y5_N/preview",
    repositoryUrl: "https://github.com/zzzrod1/springboot-restful-webservices.git",
    isPrimary: true,
  },
  {
    number: "02",
    title: "Assignment 2 - AWS",
    description:
      'The document explains AWS as a comprehensive cloud platform offering scalable servers, pay-as-you-go pricing, and services like AI and analytics, with key benefits including performance and global reach. It details free account signup steps, setting a goal to host a sample bakery website "Mike\'s Macaroon Market" using EC2 for compute, S3 for storage, and RDS for databases.',
    documentUrl: "https://drive.google.com/file/d/1mCFH43wAJ9Dlah4Tc_eq7gfotzEbux7m/preview",
    isPrimary: true,
  },
  {
    number: "03",
    title: "Assignment 3 - Docker and Containerization",
    description:
      "The goal is understanding Docker's concepts and architecture via an 8-week plan covering introduction, installation, images/containers, Dockerfiles, networking/volumes, Compose, security/optimization, and a capstone project deploying a web app, requiring a Docker-capable computer and internet.",
    documentUrl: "https://drive.google.com/file/d/1vvLhyrMbsijdDrO97XYgflyG8jKcWEiP/preview",
    isPrimary: true,
  },
  {
    number: "04",
    title: "Lab Activity - Docker Image",
    description:
      "The summary concludes both technologies are essential, but containerization excels for scalable, modern systems in edge environments.",
    documentUrl: "https://drive.google.com/file/d/1VxVGj_vkoxGJ2MnDlkMxOZlZalOj2SUT/preview",
    repositoryUrl: "https://github.com/Qoqqa/DockerActivity.git",
    isPrimary: false,
  },
  {
    number: "05",
    title: "Assignment 4 - Comparative Report",
    description:
      "It details deploying WordPress and MySQL with persistent volumes using kustomization.yaml for secrets, downloading manifests, applying configurations, verifying secrets/PVCs/pods/services, accessing WordPress, and cleaning up, demonstrating practical Kubernetes skills.",
    documentUrl: "https://drive.google.com/file/d/1nt105mtTgZaBdof1Hvm-mSQcR7PrhlTA/preview",
    isPrimary: false,
  },
  {
    number: "06",
    title: "Assignment 5 - Kubernetes Lab",
    description:
      'The "Docker Activity 10/18/2025" document details a team lab for IV-ACSAD\'s TEAM KRUSINI, including members Rod Anthony Balaoro, Ricardo Jose Colarina, Joshua Fernandez, and Kurt Rhycell Ortega. It provides a GitHub link for the activity, focusing on Docker image work.',
    documentUrl: "https://drive.google.com/file/d/1pkQsw-DtOwFMOnqAsDuQ3JjHNDxEZGc3/preview",
    isPrimary: false,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8" style={{ backgroundColor: "#121016" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header/Navigation */}
        <header className="flex justify-between items-center py-4 mb-12">
          <div className="text-lg font-semibold text-gray-300">
            <span
              style={{
                background: "linear-gradient(90deg, #8B5CF6, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ELECTIVE 3
            </span>{" "}
            Cloud Computing
          </div>
          <div className="h-8 w-8 rounded-full bg-violet-600/30 border border-violet-500/50"></div>
        </header>

        {/* Hero Section */}
        <section className="mb-20 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight text-white">
              <span
                style={{
                  background: "linear-gradient(90deg, #8B5CF6, #3B82F6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Finals
              </span>
              <br /> 2nd Semester
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mb-6">
              A Consolidation of all my works for Cloud Computing this Semester.
            </p>

            {/* Profile Card */}
            <div className="flex items-center space-x-4 bg-violet-700/20 p-4 rounded-xl max-w-xs border border-violet-500/30">
              <div className="flex-shrink-0 w-10 h-10 bg-violet-500/50 rounded-full flex items-center justify-center text-sm font-bold text-white">
                21
              </div>
              <div>
                <p className="font-medium text-sm text-white">Rod Anthony C. Balaoro</p>
                <p className="text-xs text-violet-300">IV | ACSAD</p>
              </div>
            </div>
          </div>

          {/* Cloud Icon */}
          <div className="flex justify-center md:justify-end">
            <svg
              className="w-32 h-32 text-blue-400/80 hover:text-blue-300 transition hover:scale-105 hover:rotate-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M19.5 21a1.5 1.5 0 0 0 1.5-1.5V6.44c-.403-.09-.806-.184-1.21-.284a.75.75 0 0 0-.822.407l-.22.633a1.5 1.5 0 0 1-1.408.974H12.75a.75.75 0 0 0-.749.632l-.248 1.109a1.5 1.5 0 0 1-1.408.974H7.5a.75.75 0 0 0-.749.632l-.03.134A1.5 1.5 0 0 1 5.378 17.25H3a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 .75.75h16.5ZM4.5 15.75H2.25V6.75h2.25c.594 0 1.139.388 1.332.973.023.068.043.137.06.207l.38 1.432c.15.565.65.95 1.22.95h3.628c.57 0 1.07-.385 1.22-.95l.38-1.432c.017-.07.037-.14.06-.207.193-.585.738-.973 1.332-.973h2.25v9a.75.75 0 0 1-.75.75H4.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </section>

        {/* Portfolio Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-200">Cloud Computing Portfolio</h2>

          {/* Grid of Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.number} {...item} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 py-8 border-t border-gray-700/50 text-center text-sm text-gray-500">
          <p>&copy; 2025 Please Sir I need this!</p>
          <p className="text-xs mt-1">My Grade is kinda gradeless</p>
        </footer>
      </div>
    </div>
  )
}
