import { Header } from "@/components/header"
import { FullScreenLogo } from "@/components/full-screen-logo"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Values } from "@/components/values"
import { Projects } from "@/components/projects"
import { Team } from "@/components/team"
import { YouTubeVideos } from "@/components/youtube-videos"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FullScreenLogo />
      <main>
        <Hero />
        <About />
        <Services />
        <Values />
        <Projects />
        <Team />
        <YouTubeVideos />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
