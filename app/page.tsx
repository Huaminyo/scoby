"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/images/mystery-machine-classic.jpg",
    title: "SCOOBY-DOO! CLASSIC MYSTERY MACHINE",
    description: "Join the gang in their iconic Mystery Machine for spooky adventures!",
  },
  {
    id: 2,
    image: "/images/gang-ghost-chase.jpg",
    title: "SCOOBY-DOO! GHOST CHASE ADVENTURE",
    description: "Run from spooky ghosts with Scooby and the gang!",
  },
  {
    id: 3,
    image: "/images/shaggy-scooby-burgers.jpg",
    title: "SCOOBY-DOO! SHAGGY'S BURGER FEAST",
    description: "Watch Shaggy and Scooby enjoy their favorite meal!",
  },
  {
    id: 4,
    image: "/images/pirate-ship-playmobil.jpg",
    title: "SCOOBY-DOO! PIRATE SHIP MYSTERY",
    description: "Solve mysteries on the high seas with ghost pirates!",
  },
  {
    id: 5,
    image: "/images/collectible-cards-pack.jpg",
    title: "SCOOBY-DOO! COLLECTIBLE CARDS",
    description: "Collect all the spooky ghost cards - Series 1!",
  },
  {
    id: 6,
    image: "/images/mystery-machine-classic.jpg",
    title: "SCOOBY-DOO! MYSTERY ADVENTURES",
    description: "Experience thrilling adventures with the Mystery Inc. gang!",
  },
  {
    id: 7,
    image: "/images/gang-ghost-chase.jpg",
    title: "ABOUT SCOOBY-DOO",
    description:
      "Welcome to Scooby-Doo ($SCOOBY), where mystery meets meme magic on the Base blockchain! Inspired by the beloved animated series, our token embodies the spirit of friendship, adventure, and fun, just like Scooby and the gang.",
    isTextSlide: true,
  },
]

const characters = [
  { name: "Scooby-Doo", description: "The lovable Great Dane who loves Scooby Snacks!" },
  { name: "Shaggy Rogers", description: "Scooby's best friend with an endless appetite." },
  { name: "Fred Jones", description: "The brave leader of Mystery Inc." },
  { name: "Velma Dinkley", description: "The brilliant detective who solves mysteries." },
  { name: "Daphne Blake", description: "The fashionable member of the gang." },
]

export default function ScoobyDooWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSection, setCurrentSection] = useState("homepage")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleNavigation = (section: string) => {
    if (section === "twitter") {
      window.open("https://x.com/ScoobyDoo_Base", "_blank")
    } else if (section === "telegram") {
      window.open("https://t.me/scoobydoobase", "_blank")
    } else if (section === "buy-now") {
      window.open("https://ape.store/base/0x34cc071bb536d65081c85fbc63bfad467c56b15e", "_blank")
    } else {
      setCurrentSection(section)
    }
    setIsMobileMenuOpen(false)
  }

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  const renderContent = () => {
    switch (currentSection) {
      case "characters":
        return (
          <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-4 sm:p-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">
              Meet the Characters
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {characters.map((character, index) => (
                <div key={index} className="bg-blue-50 p-4 sm:p-6 rounded-lg border-2 border-blue-200">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2">{character.name}</h3>
                  <p className="text-sm sm:text-base text-blue-600">{character.description}</p>
                </div>
              ))}
            </div>
          </div>
        )
      case "chart":
        return (
          <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-4 sm:p-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-6 sm:mb-8 text-center">
              $SCOOBY Token Chart
            </h2>
            <div className="bg-blue-50 p-4 sm:p-8 rounded-lg border-2 border-blue-200">
              <p className="text-xl sm:text-2xl text-blue-800 mb-4 text-center">Token Information</p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="font-bold text-blue-700">Project:</span>
                  <span className="text-blue-600">Scooby-Doo</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="font-bold text-blue-700">Symbol:</span>
                  <span className="text-blue-600">$SCOOBY</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="font-bold text-blue-700">Network:</span>
                  <span className="text-blue-600">Base Network</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="font-bold text-blue-700">Total Supply:</span>
                  <span className="text-blue-600">1,000,000,000</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="font-bold text-blue-700">Chain ID:</span>
                  <span className="text-blue-600">8453</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="font-bold text-blue-700">Built on:</span>
                  <span className="text-blue-600">Coinbase's Base L2</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="font-bold text-blue-700">Contract Address:</span>
                  <span className="text-blue-600 font-mono text-xs sm:text-sm break-all">
                    0x34cc071bb536d65081c85fbc63bfad467c56b15e
                  </span>
                </div>
              </div>
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-blue-200">
                <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-4 text-center">Official Links</h3>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <a
                    href="https://t.me/scoobydoobase"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 min-h-[48px]"
                  >
                    <Image src="/icons/telegram-icon.webp" alt="Telegram" width={24} height={24} className="w-6 h-6" />
                    <span>Telegram</span>
                  </a>
                  <a
                    href="https://x.com/ScoobyDoo_Base"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gray-800 text-white px-4 sm:px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 min-h-[48px]"
                  >
                    <Image src="/icons/twitter-icon.png" alt="Twitter/X" width={24} height={24} className="w-6 h-6" />
                    <span>Twitter/X</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div className="w-full max-w-6xl mx-auto">
            {/* Contract Address Section */}
            <div className="mb-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 inline-block">
                <div className="text-white/80 text-sm font-medium mb-1">Contract Address</div>
                <div className="text-white font-bold text-lg font-mono break-all">
                  0x34cc071bb536d65081c85fbc63bfad467c56b15e
                </div>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Arrows - Hidden on mobile, shown on desktop */}
              <Button
                variant="ghost"
                size="lg"
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 hidden sm:flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 hidden sm:flex items-center justify-center"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </Button>

              {/* Slide Content with Touch Support */}
              <div
                className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-lg bg-white shadow-2xl"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide
                        ? "translate-x-0"
                        : index < currentSlide
                          ? "-translate-x-full"
                          : "translate-x-full"
                    }`}
                  >
                    {slide.isTextSlide ? (
                      <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-800 to-slate-900 relative">
                        <div className="absolute inset-0">
                          <Image
                            src={slide.image || "/placeholder.svg"}
                            alt={slide.title}
                            fill
                            className="object-contain opacity-30"
                          />
                        </div>
                        <div className="relative z-10 text-center max-w-3xl px-4 sm:px-8">
                          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-8">
                            WELCOME TO <span className="text-blue-300">SCOOBY-DOO</span>
                          </h2>
                          <p className="text-sm sm:text-xl md:text-2xl text-white leading-relaxed mb-6 sm:mb-8">
                            WHERE MYSTERY MEETS MEME MAGIC ON THE BASE BLOCKCHAIN! INSPIRED BY THE BELOVED ANIMATED
                            SERIES, OUR TOKEN EMBODIES THE SPIRIT OF FRIENDSHIP, ADVENTURE, AND FUN, JUST LIKE SCOOBY
                            AND THE GANG.
                          </p>
                          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                            <a
                              href="https://t.me/scoobydoobase"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg font-bold transition-colors flex items-center justify-center space-x-2 min-h-[48px]"
                            >
                              <Image
                                src="/icons/telegram-icon.webp"
                                alt="Telegram"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                              />
                              <span>Join Telegram</span>
                            </a>
                            <a
                              href="https://x.com/ScoobyDoo_Base"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-black hover:bg-gray-800 text-white px-4 sm:px-6 py-3 rounded-lg font-bold transition-colors flex items-center justify-center space-x-2 min-h-[48px]"
                            >
                              <Image
                                src="/icons/twitter-icon.png"
                                alt="Twitter/X"
                                width={24}
                                height={24}
                                className="w-6 h-6"
                              />
                              <span>Follow X</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full relative bg-white flex items-center justify-center p-4 sm:p-8">
                        <div className="w-full h-full relative">
                          <Image
                            src={slide.image || "/placeholder.svg"}
                            alt={slide.title}
                            fill
                            className="object-contain"
                            priority={index === 0}
                          />
                        </div>
                        {/* Title Overlay - positioned at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/95 to-transparent p-3 sm:p-6">
                          <div className="max-w-4xl mx-auto">
                            <h3 className="font-bold text-lg sm:text-2xl md:text-3xl text-white mb-1 sm:mb-2">
                              {slide.title}
                            </h3>
                            <p className="text-blue-100 text-sm sm:text-lg">{slide.description}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Mobile Navigation Hint */}
              <div className="sm:hidden text-center mt-4">
                <p className="text-white/70 text-sm">👈 Swipe to navigate 👉</p>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal Header Background */}
      <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-r from-white via-blue-600 to-black transform -skew-y-2 origin-top-left scale-110" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-3 sm:p-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative cursor-pointer" onClick={() => handleNavigation("homepage")}>
            <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full shadow-lg overflow-hidden border-2 sm:border-4 border-white">
              <Image
                src="/images/scooby-coin-logo.png"
                alt="Scooby-Doo Logo"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <button
            onClick={() => handleNavigation("homepage")}
            className={`text-white font-bold text-lg hover:text-blue-300 transition-colors underline ${
              currentSection === "homepage" ? "text-blue-300" : ""
            }`}
          >
            Homepage
          </button>
          <button
            onClick={() => handleNavigation("characters")}
            className={`text-white font-bold text-lg hover:text-blue-300 transition-colors underline ${
              currentSection === "characters" ? "text-blue-300" : ""
            }`}
          >
            Characters
          </button>
          <button
            onClick={() => handleNavigation("chart")}
            className={`text-white font-bold text-lg hover:text-blue-300 transition-colors underline ${
              currentSection === "chart" ? "text-blue-300" : ""
            }`}
          >
            Chart
          </button>

          <button
            onClick={() => handleNavigation("twitter")}
            className="text-white font-bold text-lg hover:text-blue-300 transition-colors underline flex items-center space-x-1"
          >
            <Image src="/icons/twitter-icon.png" alt="Twitter" width={20} height={20} className="w-5 h-5" />
            <span>Twitter</span>
          </button>
          <button
            onClick={() => handleNavigation("telegram")}
            className="text-white font-bold text-lg hover:text-blue-300 transition-colors underline flex items-center space-x-1"
          >
            <Image src="/icons/telegram-icon.webp" alt="Telegram" width={20} height={20} className="w-5 h-5" />
            <span>Telegram</span>
          </button>
          <button
            onClick={() => handleNavigation("buy-now")}
            className="text-white font-bold text-lg hover:text-blue-300 transition-colors underline"
          >
            Buy Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-blue-900/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => handleNavigation("homepage")}
              className={`text-white font-bold text-2xl hover:text-blue-300 transition-colors ${
                currentSection === "homepage" ? "text-blue-300" : ""
              }`}
            >
              Homepage
            </button>
            <button
              onClick={() => handleNavigation("characters")}
              className={`text-white font-bold text-2xl hover:text-blue-300 transition-colors ${
                currentSection === "characters" ? "text-blue-300" : ""
              }`}
            >
              Characters
            </button>
            <button
              onClick={() => handleNavigation("chart")}
              className={`text-white font-bold text-2xl hover:text-blue-300 transition-colors ${
                currentSection === "chart" ? "text-blue-300" : ""
              }`}
            >
              Chart
            </button>

            <button
              onClick={() => handleNavigation("twitter")}
              className="text-white font-bold text-2xl hover:text-blue-300 transition-colors flex items-center space-x-2"
            >
              <Image src="/icons/twitter-icon.png" alt="Twitter" width={24} height={24} className="w-6 h-6" />
              <span>Twitter</span>
            </button>
            <button
              onClick={() => handleNavigation("telegram")}
              className="text-white font-bold text-2xl hover:text-blue-300 transition-colors flex items-center space-x-2"
            >
              <Image src="/icons/telegram-icon.webp" alt="Telegram" width={24} height={24} className="w-6 h-6" />
              <span>Telegram</span>
            </button>
            <button
              onClick={() => handleNavigation("buy-now")}
              className="text-white font-bold text-2xl hover:text-blue-300 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-8 py-4 sm:py-8">
        {renderContent()}
      </main>

      {/* Windows Activation Watermark (for authenticity) - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-4 right-4 text-white/30 text-xs">
        <div>Activate Windows</div>
        <div>Go to Settings to activate Windows</div>
      </div>
    </div>
  )
}
