'use client'

import React, { useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface ReflectiveCardProps {
  children: React.ReactNode
  className?: string
  gradientFrom?: string
  gradientTo?: string
  gradientAngle?: number
  blurStrength?: number
  metalness?: number
  roughness?: number
  overlayColor?: string
}

const ReflectiveCard: React.FC<ReflectiveCardProps> = ({
  children,
  className = '',
  gradientFrom = '#1a1a2e',
  gradientTo = '#16213e',
  gradientAngle = 135,
  blurStrength = 0,
  metalness = 0.8,
  roughness = 0.4,
  overlayColor = 'rgba(255, 255, 255, 0.05)',
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setMousePosition({ x, y })
  }

  const cssVariables = {
    '--blur-strength': `${blurStrength}px`,
    '--metalness': metalness,
    '--roughness': roughness,
    '--overlay-color': overlayColor,
    '--gradient-from': gradientFrom,
    '--gradient-to': gradientTo,
    '--gradient-angle': `${gradientAngle}deg`,
    '--mouse-x': mousePosition.x,
    '--mouse-y': mousePosition.y,
  } as React.CSSProperties

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative rounded-2xl overflow-hidden isolate',
        'shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)_inset]',
        'transition-transform duration-300',
        isHovered && 'scale-[1.02]',
        className
      )}
      style={cssVariables}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setMousePosition({ x: 0.5, y: 0.5 })
      }}
    >
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(var(--gradient-angle), var(--gradient-from), var(--gradient-to))`,
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${(mousePosition.x - 0.5) * 30}px, ${(mousePosition.y - 0.5) * 30}px)`,
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
        style={{ 
          opacity: roughness,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Metallic Shine */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay transition-opacity duration-300"
        style={{
          opacity: isHovered ? metalness : metalness * 0.5,
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
        }}
      />

      {/* Glass Reflection */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0.15) 100%)',
          opacity: metalness,
        }}
      />

      {/* Border Gradient */}
      <div 
        className="absolute inset-0 rounded-2xl p-[1px] z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
        }}
      />

      {/* Content */}
      <div 
        className="relative z-10"
        style={{ backgroundColor: overlayColor }}
      >
        {children}
      </div>
    </div>
  )
}

export default ReflectiveCard
