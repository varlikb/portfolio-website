"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

export function OrbitalClock() {
  const [time, setTime] = useState<Date | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set initial time on client
    const getTurkeyTime = () => {
      const now = new Date()
      return new Date(now.toLocaleString("en-US", { timeZone: "Europe/Istanbul" }))
    }
    setTime(getTurkeyTime())
    
    const interval = setInterval(() => {
      setTime(getTurkeyTime())
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
    setMousePos({ x: x * 8, y: y * 8 })
  }

  const seconds = time ? time.getSeconds() + time.getMilliseconds() / 1000 : 0
  const minutes = time ? time.getMinutes() + seconds / 60 : 0
  const hours = time ? (time.getHours() % 12) + minutes / 60 : 0

  const secondDeg = seconds * 6
  const minuteDeg = minutes * 6
  const hourDeg = hours * 30

  const formatDate = () => {
    if (!time) return ""
    return time.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  // Don't render clock hands until client-side hydration is complete
  if (!time) {
    return (
      <div
        ref={containerRef}
        className="relative flex items-center justify-center cursor-pointer select-none"
        style={{ perspective: "600px" }}
      >
        <div className="relative w-52 h-52">
          <div className="absolute inset-2 rounded-full bg-white/[0.03] border border-white/10 shadow-xl backdrop-blur-sm">
            <div className="absolute inset-3 rounded-full border border-white/5" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center cursor-pointer select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePos({ x: 0, y: 0 })
      }}
      onMouseMove={handleMouseMove}
      style={{
        perspective: "600px",
      }}
    >
      {/* Main clock container */}
      <div
        className="relative w-52 h-52 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg)`,
        }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-500"
          style={{
            background: isHovered
              ? "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)"
              : "transparent",
            transform: isHovered ? "scale(1.3)" : "scale(1)",
          }}
        />

        {/* Clock face */}
        <div className="absolute inset-2 rounded-full bg-white/[0.03] border border-white/10 shadow-xl backdrop-blur-sm">
          {/* Inner subtle ring */}
          <div
            className={`absolute inset-3 rounded-full border transition-all duration-500 ${
              isHovered
                ? "border-white/30"
                : "border-white/5"
            }`}
          />

          {/* Hour markers */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30
            const isActive = Math.floor(hours) === i || Math.floor(hours) === i + 12
            const rad = (angle - 90) * (Math.PI / 180)
            const x = 50 + 38 * Math.cos(rad)
            const y = 50 + 38 * Math.sin(rad)

            return (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                  background: isActive
                    ? "#ffffff"
                    : i % 3 === 0
                    ? "rgba(255,255,255,0.7)"
                    : "rgba(255,255,255,0.25)",
                  boxShadow: isActive
                    ? "0 0 10px rgba(255,255,255,0.7)"
                    : "none",
                }}
              />
            )
          })}

          {/* Hour hand */}
          <div
            className="absolute left-1/2 bottom-1/2 w-1 origin-bottom rounded-full transition-all duration-200 bg-white"
            style={{
              height: "28%",
              transform: `translateX(-50%) rotate(${hourDeg}deg)`,
            }}
          />

          {/* Minute hand */}
          <div
            className="absolute left-1/2 bottom-1/2 w-0.5 origin-bottom rounded-full transition-all duration-200 bg-white/70"
            style={{
              height: "36%",
              transform: `translateX(-50%) rotate(${minuteDeg}deg)`,
            }}
          />

          {/* Second hand */}
          <div
            className="absolute left-1/2 bottom-1/2 origin-bottom rounded-full"
            style={{
              width: "1px",
              height: "40%",
              transform: `translateX(-50%) rotate(${secondDeg}deg)`,
              background: "#ffffff",
              boxShadow: "0 0 8px rgba(255,255,255,0.7)",
            }}
          />

          {/* Center dot */}
          <div
            className="absolute left-1/2 top-1/2 w-2.5 h-2.5 rounded-full transition-all duration-300"
            style={{
              transform: "translate(-50%, -50%)",
              background: isHovered ? "#ffffff" : "rgba(255,255,255,0.85)",
              boxShadow: isHovered
                ? "0 0 12px rgba(255,255,255,0.8)"
                : "none",
            }}
          />
        </div>
      </div>

      {/* Date reveal on hover */}
      <div
        className="absolute w-full flex items-center justify-center -bottom-8 left-1/2 font-mono text-xs tracking-[0.3em] uppercase transition-all duration-500"
        style={{
          transform: `translateX(-50%) translateY(${isHovered ? 0 : -10}px)`,
          opacity: isHovered ? 1 : 0,
          color: isHovered ? "#ffffff" : "rgba(255,255,255,0.6)",
        }}
      >
        {formatDate()}
      </div>
    </div>
  )
}
