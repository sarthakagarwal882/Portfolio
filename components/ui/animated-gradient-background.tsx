"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Gradient circles
    const circles: Circle[] = []
    const colors = ["rgba(147, 51, 234, 0.07)", "rgba(79, 70, 229, 0.07)", "rgba(219, 39, 119, 0.07)"]

    for (let i = 0; i < 5; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 300 + 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      circles.forEach((circle) => {
        // Move circle
        circle.x += circle.dx
        circle.y += circle.dy

        // Bounce off edges
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > width) {
          circle.dx = -circle.dx
        }
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > height) {
          circle.dy = -circle.dy
        }

        // Draw circle
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)
        gradient.addColorStop(0, circle.color)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")
        ctx.fillStyle = gradient
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" style={{ pointerEvents: "none" }} />
  )
}

interface Circle {
  x: number
  y: number
  radius: number
  color: string
  dx: number
  dy: number
}
