'use client'

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useCallback
} from 'react'
import gsap from 'gsap'

export interface CardSwapProps {
  width?: number | string
  height?: number | string
  cardDistance?: number
  verticalDistance?: number
  skewAmount?: number
  easing?: 'linear' | 'elastic'
  onActiveChange?: (idx: number) => void
  children: ReactNode
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={`absolute top-1/2 left-1/2 rounded-2xl border border-white/20 bg-black/90 backdrop-blur-sm [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] cursor-pointer transition-shadow hover:shadow-2xl hover:shadow-white/10 ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
  />
))
Card.displayName = 'Card'

type CardRef = RefObject<HTMLDivElement | null>

interface Slot {
  x: number
  y: number
  z: number
  zIndex: number
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
})

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  skewAmount = 6,
  easing = 'elastic',
  onActiveChange,
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durMove: 1.2,
        }
      : {
          ease: 'power1.inOut',
          durMove: 0.6,
        }

  const childArr = useMemo(() => Children.toArray(children) as ReactElement<CardProps>[], [children])
  const refs = useMemo<CardRef[]>(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length])
  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i))
  const isAnimating = useRef(false)
  const container = useRef<HTMLDivElement>(null)

  const animateToOrder = useCallback((newOrder: number[]) => {
    if (isAnimating.current) return
    isAnimating.current = true

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false
        order.current = newOrder
        onActiveChange?.(newOrder[0])
      }
    })

    newOrder.forEach((idx, position) => {
      const el = refs[idx].current!
      const slot = makeSlot(position, cardDistance, verticalDistance, refs.length)
      
      tl.to(el, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        zIndex: slot.zIndex,
        duration: config.durMove,
        ease: config.ease
      }, 0)
    })
  }, [cardDistance, verticalDistance, config, refs, onActiveChange])

  const bringToFront = useCallback((clickedIdx: number) => {
    const currentOrder = order.current
    const currentPosition = currentOrder.indexOf(clickedIdx)
    
    if (currentPosition === 0) return // Already in front
    
    // Move clicked card to front, shift others back
    const newOrder = [clickedIdx, ...currentOrder.filter(i => i !== clickedIdx)]
    animateToOrder(newOrder)
  }, [animateToOrder])

  useEffect(() => {
    const total = refs.length
    refs.forEach((r, i) => {
      const slot = makeSlot(i, cardDistance, verticalDistance, total)
      gsap.set(r.current!, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        xPercent: -50,
        yPercent: -50,
        skewY: skewAmount,
        transformOrigin: 'center center',
        zIndex: slot.zIndex,
        force3D: true
      })
    })
    // Notify initial active card
    onActiveChange?.(0)
  }, [cardDistance, verticalDistance, skewAmount, refs, onActiveChange])

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation()
            bringToFront(i)
            child.props.onClick?.(e)
          }
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  )

  return (
    <div
      ref={container}
      className="relative perspective-[900px]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  )
}

export default CardSwap
