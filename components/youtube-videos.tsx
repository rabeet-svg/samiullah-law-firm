import { Play } from "lucide-react"

export function YouTubeVideos() {
  const videos = [
    {
      id: "NUmFjtK-8ec",
      title: "Legal Analysis on Child Marriages, Missing persons, law and order, Causes and preventions",
      thumbnail: `https://img.youtube.com/vi/NUmFjtK-8ec/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=NUmFjtK-8ec&t=381s",
    },
    {
      id: "GoI7TdY3JhQ",
      title: "Legal Journey and tips for young lawyers",
      thumbnail: `https://img.youtube.com/vi/GoI7TdY3JhQ/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=GoI7TdY3JhQ",
    },
    {
      id: "Wd_tdMou64k",
      title: "The Case of recovery of newborn baby and reunion with her mother",
      thumbnail: `https://img.youtube.com/vi/Wd_tdMou64k/maxresdefault.jpg`,
      url: "https://www.youtube.com/watch?v=Wd_tdMou64k&t=1109s",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Legal Insights & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our legal experts share insights on various aspects of law and how we can help you navigate complex
            legal matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group cursor-pointer">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label={`Watch ${video.title}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                >
                  Watch Video
                  <Play className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
