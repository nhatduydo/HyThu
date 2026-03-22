'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  )
}

function LavenderDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', margin: '20px 0' }}>
      <div style={{ height: '1px', width: '64px', background: 'linear-gradient(to right, transparent, #b8a9c9)' }} />
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#9b8bb4' }} />
      <div style={{ height: '1px', width: '64px', background: 'linear-gradient(to left, transparent, #b8a9c9)' }} />
    </div>
  )
}

export default function Template12({ weddingData }: { weddingData: any }) {
  const d = weddingData

  const [countdown, setCountdown] = useState({ days: d.countdown?.days || 0, hours: d.countdown?.hours || 0, minutes: d.countdown?.minutes || 0, seconds: 0 })
  useEffect(() => {
    const wd = new Date(`${d.date?.year || 2026}-${String(mn(d.date?.month)).padStart(2, '0')}-${String(d.date?.dayNumber || 1).padStart(2, '0')}T${(d.date?.time || '12:00').replace('H', ':')}:00`)
    const t = setInterval(() => {
      const dist = wd.getTime() - Date.now()
      if (dist < 0) { clearInterval(t); return }
      setCountdown({ days: Math.floor(dist / 864e5), hours: Math.floor((dist % 864e5) / 36e5), minutes: Math.floor((dist % 36e5) / 6e4), seconds: Math.floor((dist % 6e4) / 1e3) })
    }, 1000)
    return () => clearInterval(t)
  }, [d.date])

  const [giftTab, setGiftTab] = useState<'groom' | 'bride'>('groom')
  const [gName, setGName] = useState('')
  const [gMsg, setGMsg] = useState('')
  const [wishes, setWishes] = useState<{ name: string; message: string }[]>([])
  const [lb, setLb] = useState<string | null>(null)

  const send = () => { if (gName.trim() && gMsg.trim()) { setWishes(p => [{ name: gName, message: gMsg }, ...p]); setGName(''); setGMsg('') } }

  // Colors
  const lavender = '#8b7aab'
  const lavenderLight = '#b8a9c9'
  const lavenderDark = '#5c4d73'
  const cream = '#f7f5f0'
  const gold = '#c4a85a'
  const textDark = '#3d3545'
  const textMuted = '#7a7085'

  // Monogram initials
  const groomInitial = (d.groomInfo?.name || d.groomName || 'G').split(' ').pop()?.[0]?.toUpperCase() || 'G'
  const brideInitial = (d.brideInfo?.name || d.brideName || 'B').split(' ').pop()?.[0]?.toUpperCase() || 'B'

  return (
    <div style={{ minHeight: '100vh', overflowX: 'hidden', background: cream, fontFamily: "'Playfair Display', Georgia, serif", color: textDark, maxWidth: '100vw' }}>

      {/* ==================== HERO ==================== */}
      <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}>

        {/* image2.svg - hiển thị bình thường, full width */}
        <div style={{ position: 'relative', width: '100%' }}>
          <img
            src="/templates/template12/image2.svg"
            alt="hero background"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
            }}
          />

          {/* Nội dung overlay lên trên image2 */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
            padding: '45px 20px 20px',
          }}>

            {/* "YOU ARE THE LOVE OF MY LIFE" */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ width: '100%', maxWidth: '400px', marginBottom: '45px' }}
            >
              <img src="/templates/template12/youare_thelove_mylife.svg" alt="You are the love of my life" style={{ width: '100%', height: 'auto' }} />
            </motion.div>

            {/* "We Got Married" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ width: '80%', maxWidth: '450px', marginBottom: '10px' }}
            >
              <img src="/templates/template12/wegot.svg" alt="We Got Married" style={{ width: '100%', height: 'auto' }} />
            </motion.div>

            {/* "Happy Wedding" */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ width: '35%', maxWidth: '220px', marginBottom: '44px' }}
            >
              <img src="/templates/template12/happy.svg" alt="Happy Wedding" style={{ width: '100%', height: 'auto' }} />
            </motion.div>

          </div>
        </div>

        {/* note.svg - nằm giữa, dưới image2 */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-150px', position: 'relative', zIndex: 2 }}>
          <motion.img
            src="/templates/template12/note.svg"
            alt="note"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            style={{ width: '40%', maxWidth: '300px', height: 'auto' }}
          />
        </div>

        {/* groom.svg - nằm giữa, dưới note */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-60px', position: 'relative', zIndex: 2 }}>
          <motion.img
            src="/templates/template12/groom.svg"
            alt="groom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            style={{ width: '40%', maxWidth: '300px', height: 'auto' }}
          />
        </div>

        {/* path1.svg - nối tiếp ngay dưới */}
        <img
          src="/templates/template12/path1.svg"
          alt="decoration"
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            marginTop: '-1px',
          }}
        />
      </div>
    </div>
  )
}

function mn(m?: string): number {
  if (!m) return 1
  const map: Record<string, number> = { 'tháng 1': 1, 'tháng 01': 1, 'tháng 2': 2, 'tháng 02': 2, 'tháng 3': 3, 'tháng 03': 3, 'tháng 4': 4, 'tháng 04': 4, 'tháng 5': 5, 'tháng 05': 5, 'tháng 6': 6, 'tháng 06': 6, 'tháng 7': 7, 'tháng 07': 7, 'tháng 8': 8, 'tháng 08': 8, 'tháng 9': 9, 'tháng 09': 9, 'tháng 10': 10, 'tháng 11': 11, 'tháng 12': 12 }
  return map[m.toLowerCase()] || parseInt(m.replace(/\D/g, '')) || 1
}
