import Image from "next/image"

export function FullScreenLogo() {
  return (
    <section className="h-screen w-full bg-[#8B0000] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/images/white-logo.png"
          alt="Law Firm Logo"
          width={600}
          height={400}
          className="max-w-[80vw] max-h-[60vh] object-contain"
          priority
        />
      </div>
    </section>
  )
}
