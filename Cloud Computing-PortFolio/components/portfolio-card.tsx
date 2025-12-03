"use client"
import { FileText, Github } from "lucide-react"

interface PortfolioCardProps {
  number: string
  title: string
  description: string
  documentUrl: string
  repositoryUrl?: string
  isPrimary?: boolean
}

export function PortfolioCard({
  number,
  title,
  description,
  documentUrl,
  repositoryUrl,
  isPrimary = false,
}: PortfolioCardProps) {
  const handleViewDocument = () => {
    window.open(documentUrl, "_blank")
  }

  const accentColor = isPrimary ? "var(--color-primary)" : "var(--color-secondary)"
  const accentBg = isPrimary ? "bg-violet-600 hover:bg-violet-700" : "bg-blue-600 hover:bg-blue-700"
  const borderHover = isPrimary ? "hover:border-violet-500" : "hover:border-blue-500"
  const textAccent = isPrimary ? "text-violet-500" : "text-blue-500"

  return (
    <div className={`bg-gray-900 p-6 rounded-2xl border border-gray-700 transition duration-300 ${borderHover}`}>
      <p className={`text-sm font-mono ${textAccent} mb-2`}>{number}</p>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 line-clamp-3">{description}</p>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={handleViewDocument}
          className={`flex items-center space-x-2 px-4 py-2 ${accentBg} text-white rounded-lg transition duration-150 text-sm font-semibold`}
        >
          <FileText className="w-4 h-4" />
          <span>View Document</span>
        </button>

        {repositoryUrl && (
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 text-sm flex items-center space-x-1 transition"
          >
            <Github className="w-4 h-4" />
            <span>Repository</span>
          </a>
        )}
      </div>
    </div>
  )
}
