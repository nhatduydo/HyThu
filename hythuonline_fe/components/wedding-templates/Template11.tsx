'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

// ============ ANIMATION HELPERS ============
function RevealSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#c9a96e]" />
      <svg width="20" height="20" viewBox="0 0 20 20" className="text-[#c9a96e]">
        <path d="M10 3l2.5 5 5.5.8-4 3.9 1 5.3L10 15l-5 3 1-5.3-4-3.9 5.5-.8z" fill="currentColor" />
      </svg>
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#c9a96e]" />
    </div>
  )
}

// ============ MAIN TEMPLATE ============
export default function Template11({ weddingData }: { weddingData: any }) {
  const d = weddingData

  // Countdown
  const [countdown, setCountdown] = useState({ days: d.countdown?.days || 0, hours: d.countdown?.hours || 0, minutes: d.countdown?.minutes || 0, seconds: 0 })
  useEffect(() => {
    const weddingDate = new Date(`${d.date?.year || 2026}-${String(getMonthNumber(d.date?.month)).padStart(2, '0')}-${String(d.date?.dayNumber || 1).padStart(2, '0')}T${(d.date?.time || '12:00').replace('H', ':')}:00`)
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const dist = weddingDate.getTime() - now
      if (dist < 0) { clearInterval(timer); return }
      setCountdown({
        days: Math.floor(dist / 86400000),
        hours: Math.floor((dist % 86400000) / 3600000),
        minutes: Math.floor((dist % 3600000) / 60000),
        seconds: Math.floor((dist % 60000) / 1000),
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [d.date])

  const [giftTab, setGiftTab] = useState<'groom' | 'bride'>('groom')
  const [guestName, setGuestName] = useState('')
  const [guestMsg, setGuestMsg] = useState('')
  const [wishes, setWishes] = useState<{ name: string; message: string }[]>([])
  const [lightbox, setLightbox] = useState<string | null>(null)

  const handleWish = () => {
    if (!guestName.trim() || !guestMsg.trim()) return
    setWishes(p => [{ name: guestName, message: guestMsg }, ...p])
    setGuestName('')
    setGuestMsg('')
  }

  const gold = '#c9a96e'
  const goldLight = '#e8d5a3'
  const cream = '#faf8f3'
  const warmGray = '#6b6560'

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: cream, fontFamily: "'Playfair Display', Georgia, serif", color: '#3a3632' }}>

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={d.coupleImage} alt="couple" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(250,248,243,0.3), rgba(250,248,243,0.85) 70%, rgba(250,248,243,1))' }} />
        </div>

        {/* Decorative border */}
        <div className="absolute inset-6 sm:inset-10 border border-[#c9a96e]/30 pointer-events-none z-10" />

        <div className="relative z-20 text-center px-6 mt-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm tracking-[0.4em] uppercase mb-8"
            style={{ color: gold }}
          >
            Save The Date
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="mb-6">
              <span className="block text-5xl sm:text-6xl md:text-7xl leading-tight" style={{ fontFamily: "'Dancing Script', cursive", color: '#3a3632' }}>
                {d.groomInfo?.name?.split(' ').pop() || d.groomName}
              </span>
              <span className="block text-2xl my-4" style={{ color: gold, fontFamily: "'Dancing Script', cursive" }}>&amp;</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl leading-tight" style={{ fontFamily: "'Dancing Script', cursive", color: '#3a3632' }}>
                {d.brideInfo?.name?.split(' ').pop() || d.brideName}
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <GoldDivider />
            <p className="text-base tracking-wide" style={{ color: warmGray }}>
              {d.date?.dayName} • {d.date?.dayNumber}.{String(getMonthNumber(d.date?.month)).padStart(2, '0')}.{d.date?.year}
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <div className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5" style={{ borderColor: `${gold}80` }}>
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: gold }}
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ==================== INTRO ==================== */}
      <section className="py-20 px-6" style={{ background: cream }}>
        <RevealSection className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: gold }}>Our Story</p>
          <h2 className="text-3xl sm:text-4xl mb-6" style={{ fontFamily: "'Dancing Script', cursive" }}>
            {d.intro?.title1} {d.intro?.title2} {d.intro?.title3}
          </h2>
          <GoldDivider />
          <p className="leading-relaxed text-base mt-6 italic" style={{ color: warmGray }}>
            &ldquo;{d.intro?.description}&rdquo;
          </p>
        </RevealSection>
      </section>

      {/* ==================== COUPLE ==================== */}
      <section className="py-20 px-6" style={{ background: '#f5f0e8' }}>
        <div className="max-w-5xl mx-auto">
          <RevealSection className="text-center mb-16">
            <p className="text-xs tracking-[0.5em] uppercase mb-3" style={{ color: gold }}>The Happy Couple</p>
            <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: "'Dancing Script', cursive" }}>Cô Dâu &amp; Chú Rể</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Groom */}
            <RevealSection className="text-center" delay={0.1}>
              <div className="relative w-52 h-52 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 rotate-45" style={{ borderColor: `${gold}40` }} />
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl">
                  <img src={d.groomImage} alt="groom" className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="inline-block px-4 py-1 text-xs tracking-[0.3em] uppercase rounded-full mb-4" style={{ background: `${gold}15`, color: gold, border: `1px solid ${gold}30` }}>
                Chú Rể
              </span>
              <h3 className="text-2xl mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>{d.groomInfo?.name}</h3>
              <p className="text-sm mb-3" style={{ color: `${warmGray}99` }}>{d.groomInfo?.dob} • {d.groomInfo?.city}</p>
              <p className="text-sm italic leading-relaxed max-w-xs mx-auto" style={{ color: warmGray }}>
                &ldquo;{d.groomInfo?.quote}&rdquo;
              </p>
            </RevealSection>

            {/* Bride */}
            <RevealSection className="text-center" delay={0.2}>
              <div className="relative w-52 h-52 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 -rotate-45" style={{ borderColor: '#d4a0aa40' }} />
                <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl">
                  <img src={d.brideImage} alt="bride" className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="inline-block px-4 py-1 text-xs tracking-[0.3em] uppercase rounded-full mb-4" style={{ background: '#d4a0aa15', color: '#b87d87', border: '1px solid #d4a0aa30' }}>
                Cô Dâu
              </span>
              <h3 className="text-2xl mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>{d.brideInfo?.name}</h3>
              <p className="text-sm mb-3" style={{ color: `${warmGray}99` }}>{d.brideInfo?.dob} • {d.brideInfo?.city}</p>
              <p className="text-sm italic leading-relaxed max-w-xs mx-auto" style={{ color: warmGray }}>
                &ldquo;{d.brideInfo?.quote}&rdquo;
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ==================== COUNTDOWN ==================== */}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: '#3a3632' }}>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #c9a96e 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <RevealSection className="max-w-xl mx-auto text-center relative z-10">
          <p className="text-xs tracking-[0.5em] uppercase mb-3" style={{ color: goldLight }}>Save The Date</p>
          <h2 className="text-3xl sm:text-4xl text-white mb-3" style={{ fontFamily: "'Dancing Script', cursive" }}>Đếm Ngược</h2>
          <p className="text-sm mb-10" style={{ color: '#ffffff60' }}>
            {d.date?.dayName} - {d.date?.dayNumber}/{getMonthNumber(d.date?.month)}/{d.date?.year}
          </p>

          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { val: countdown.days, lbl: 'Ngày' },
              { val: countdown.hours, lbl: 'Giờ' },
              { val: countdown.minutes, lbl: 'Phút' },
              { val: countdown.seconds, lbl: 'Giây' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="rounded-2xl p-4 sm:p-5 mb-2" style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.2)' }}>
                  <motion.span
                    key={item.val}
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="block text-3xl sm:text-4xl font-bold"
                    style={{ color: goldLight }}
                  >
                    {String(item.val).padStart(2, '0')}
                  </motion.span>
                </div>
                <span className="text-xs tracking-wider uppercase" style={{ color: '#ffffff40' }}>{item.lbl}</span>
              </div>
            ))}
          </div>

          <p className="text-xs mt-8 italic" style={{ color: '#ffffff30' }}>{d.date?.lunar}</p>
        </RevealSection>
      </section>

      {/* ==================== EVENTS ==================== */}
      <section className="py-20 px-6" style={{ background: cream }}>
        <div className="max-w-4xl mx-auto">
          <RevealSection className="text-center mb-14">
            <p className="text-xs tracking-[0.5em] uppercase mb-3" style={{ color: gold }}>{d.ceremony?.label}</p>
            <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: "'Dancing Script', cursive" }}>Sự Kiện Cưới</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealSection delay={0.1}>
              <div className="text-center p-8 rounded-3xl shadow-lg" style={{ background: 'white', border: `1px solid ${gold}20` }}>
                <div className="text-4xl mb-4">💒</div>
                <h3 className="text-xl font-bold mb-1" style={{ color: gold }}>{d.eventType}</h3>
                <p className="text-xs tracking-wider uppercase mb-6" style={{ color: `${warmGray}80` }}>{d.location?.type}</p>
                <GoldDivider />
                <div className="mt-6 space-y-3 text-sm" style={{ color: warmGray }}>
                  <p>🕐 {d.date?.time} - {d.date?.dayName}, {d.date?.dayNumber}/{getMonthNumber(d.date?.month)}/{d.date?.year}</p>
                  <p>📍 {d.location?.address}</p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.2}>
              <div className="text-center p-8 rounded-3xl shadow-lg" style={{ background: 'white', border: '1px solid #d4a0aa20' }}>
                <div className="text-4xl mb-4">💐</div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#b87d87' }}>{d.eventType2}</h3>
                <p className="text-xs tracking-wider uppercase mb-6" style={{ color: `${warmGray}80` }}>{d.location?.type2}</p>
                <GoldDivider />
                <div className="mt-6 space-y-3 text-sm" style={{ color: warmGray }}>
                  <p>🕐 {d.date?.time2} - {d.date?.day2}, {d.date?.dayNumber}/{getMonthNumber(d.date?.month)}/{d.date?.year}</p>
                  <p>📍 {d.location?.address2}</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ==================== GALLERY ==================== */}
      <section className="py-20 px-6" style={{ background: '#f5f0e8' }}>
        <div className="max-w-5xl mx-auto">
          <RevealSection className="text-center mb-14">
            <p className="text-xs tracking-[0.5em] uppercase mb-3" style={{ color: gold }}>{d.gallery?.subtitle}</p>
            <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: "'Dancing Script', cursive" }}>{d.gallery?.title}</h2>
          </RevealSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(d.galleryImages || []).map((img: string, idx: number) => (
              <RevealSection key={idx} delay={idx * 0.07}>
                <motion.div
                  className={`relative overflow-hidden rounded-2xl cursor-pointer group shadow-lg ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setLightbox(img)}
                >
                  <div className={`${idx === 0 ? 'aspect-square' : 'aspect-[3/4]'}`}>
                    <img src={img} alt={`gallery-${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-wider">Xem ảnh</span>
                  </div>
                </motion.div>
              </RevealSection>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-pointer"
              onClick={() => setLightbox(null)}
            >
              <motion.img initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }}
                src={lightbox} alt="zoom" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
              <button className="absolute top-6 right-6 text-white/60 hover:text-white text-2xl">✕</button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ==================== GIFT BOX ==================== */}
      <section className="py-20 px-6" style={{ background: cream }}>
        <div className="max-w-lg mx-auto text-center">
          <RevealSection>
            <p className="text-xs tracking-[0.5em] uppercase mb-3" style={{ color: gold }}>{d.giftBox?.title}</p>
            <h2 className="text-3xl sm:text-4xl mb-8" style={{ fontFamily: "'Dancing Script', cursive" }}>Mừng Cưới</h2>

            <div className="flex justify-center gap-3 mb-8">
              <button
                onClick={() => setGiftTab('groom')}
                className="px-6 py-2.5 rounded-full text-sm transition-all duration-300"
                style={giftTab === 'groom' ? { background: gold, color: 'white' } : { background: 'transparent', color: warmGray, border: `1px solid ${gold}40` }}
              >
                🤵 {d.giftBox?.groomTab}
              </button>
              <button
                onClick={() => setGiftTab('bride')}
                className="px-6 py-2.5 rounded-full text-sm transition-all duration-300"
                style={giftTab === 'bride' ? { background: '#b87d87', color: 'white' } : { background: 'transparent', color: warmGray, border: '1px solid #d4a0aa40' }}
              >
                👰 {d.giftBox?.brideTab}
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={giftTab}
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}
                className="p-8 rounded-3xl shadow-lg" style={{ background: 'white', border: `1px solid ${giftTab === 'groom' ? gold : '#d4a0aa'}25` }}
              >
                <div className="w-44 h-44 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg bg-white p-2">
                  <img
                    src={`https://img.vietqr.io/image/${d.bankInfo?.[giftTab]?.bankId}-${d.bankInfo?.[giftTab]?.accountNumber}-${d.bankInfo?.[giftTab]?.template}.png?accountName=${encodeURIComponent(d.bankInfo?.[giftTab]?.accountName || '')}`}
                    alt="QR" className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                <div className="space-y-3 text-left">
                  {[
                    ['Ngân hàng', d.bankInfo?.[giftTab]?.bankName],
                    ['Số TK', d.bankInfo?.[giftTab]?.accountNumber],
                    ['Tên TK', d.bankInfo?.[giftTab]?.accountName],
                  ].map(([label, val], i) => (
                    <div key={i} className="flex justify-between p-3 rounded-xl" style={{ background: '#faf8f3' }}>
                      <span className="text-xs" style={{ color: `${warmGray}80` }}>{label}</span>
                      <span className="text-sm font-medium">{val}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(d.bankInfo?.[giftTab]?.accountNumber || '')}
                  className="mt-6 w-full py-3 rounded-full text-sm font-bold transition-all"
                  style={{ background: giftTab === 'groom' ? gold : '#b87d87', color: 'white' }}
                >
                  📋 {d.giftBox?.copyButton}
                </button>
              </motion.div>
            </AnimatePresence>
          </RevealSection>
        </div>
      </section>

      {/* ==================== GUEST BOOK ==================== */}
      <section className="py-20 px-6" style={{ background: '#f5f0e8' }}>
        <div className="max-w-lg mx-auto">
          <RevealSection className="text-center mb-10">
            <p className="text-xs tracking-[0.5em] uppercase mb-3" style={{ color: gold }}>{d.guestBook?.title}</p>
            <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: "'Dancing Script', cursive" }}>Sổ Lưu Bút</h2>
          </RevealSection>

          <RevealSection delay={0.1}>
            <div className="p-8 rounded-3xl shadow-lg" style={{ background: 'white' }}>
              <input
                type="text" value={guestName} onChange={e => setGuestName(e.target.value)}
                placeholder="Tên của bạn"
                className="w-full px-4 py-3 rounded-xl text-sm mb-4 outline-none transition-colors"
                style={{ background: '#faf8f3', border: '1px solid #e8e3d9', color: '#3a3632' }}
                onFocus={e => e.target.style.borderColor = gold}
                onBlur={e => e.target.style.borderColor = '#e8e3d9'}
              />
              <textarea
                value={guestMsg} onChange={e => setGuestMsg(e.target.value)}
                placeholder={d.guestBook?.inputLabel}
                rows={4}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-colors"
                style={{ background: '#faf8f3', border: '1px solid #e8e3d9', color: '#3a3632' }}
                onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = gold}
                onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = '#e8e3d9'}
              />
              <button onClick={handleWish} className="mt-4 w-full py-3 rounded-full text-sm font-bold text-white transition-all" style={{ background: gold }}>
                ✨ {d.guestBook?.submitButton}
              </button>
            </div>
          </RevealSection>

          {wishes.length > 0 && (
            <div className="mt-8 space-y-4">
              {wishes.map((w, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                  className="p-5 rounded-2xl shadow" style={{ background: 'white' }}>
                  <p className="font-bold text-sm mb-1" style={{ color: gold }}>{w.name}</p>
                  <p className="text-sm leading-relaxed" style={{ color: warmGray }}>{w.message}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <section className="py-16 px-6 text-center" style={{ background: '#3a3632' }}>
        <RevealSection>
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: `${goldLight}60` }}>Thank you</p>
          <h2 className="text-4xl sm:text-5xl text-white mb-4" style={{ fontFamily: "'Dancing Script', cursive" }}>
            {d.groomInfo?.name?.split(' ').pop()} &amp; {d.brideInfo?.name?.split(' ').pop()}
          </h2>
          <GoldDivider />
          <p className="text-sm mt-6 max-w-md mx-auto leading-relaxed" style={{ color: '#ffffff50' }}>
            Sự hiện diện của bạn là niềm vinh hạnh lớn lao của chúng tôi. Xin chân thành cảm ơn!
          </p>
          <p className="text-xs mt-8" style={{ color: '#ffffff20' }}>Made with ❤️ by HyThuOnline</p>
        </RevealSection>
      </section>
    </div>
  )
}

function getMonthNumber(m?: string): number {
  if (!m) return 1
  const map: Record<string, number> = { 'tháng 1': 1, 'tháng 01': 1, 'tháng 2': 2, 'tháng 02': 2, 'tháng 3': 3, 'tháng 03': 3, 'tháng 4': 4, 'tháng 04': 4, 'tháng 5': 5, 'tháng 05': 5, 'tháng 6': 6, 'tháng 06': 6, 'tháng 7': 7, 'tháng 07': 7, 'tháng 8': 8, 'tháng 08': 8, 'tháng 9': 9, 'tháng 09': 9, 'tháng 10': 10, 'tháng 11': 11, 'tháng 12': 12 }
  return map[m.toLowerCase()] || parseInt(m.replace(/\D/g, '')) || 1
}
