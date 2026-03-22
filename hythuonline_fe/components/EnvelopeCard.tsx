'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EnvelopeCard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full max-w-sm mx-auto perspective-1000">
      {/* Names above envelope */}
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-center gap-6 md:gap-8 text-xl md:text-2xl lg:text-3xl font-bold">
          <motion.span 
            className="font-serif text-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Mai Anh
          </motion.span>
          <span className="text-[#c85d6a] text-2xl md:text-3xl">&</span>
          <motion.span 
            className="font-serif text-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Quốc Huy
          </motion.span>
        </div>
      </motion.div>

      <div className="relative h-[600px] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {/* Envelope body - always visible */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[320px] h-[420px] bg-gradient-to-br from-[#862934] via-[#9a2f3f] to-[#862934] rounded-xl shadow-2xl">
          {/* Inner shadow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent"></div>
          
          {/* Wax seal - always visible */}
          <motion.div 
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-full shadow-2xl flex items-center justify-center border-2 border-amber-800/40 z-10"
            animate={{ 
              boxShadow: [
                '0 10px 30px rgba(217, 119, 6, 0.4)',
                '0 15px 40px rgba(217, 119, 6, 0.6)',
                '0 10px 30px rgba(217, 119, 6, 0.4)'
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-inner">
              <motion.i 
                className="pi pi-heart text-amber-900 text-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            // Closed Envelope - Flap closed
            <motion.div
              key="closed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              {/* Envelope flap - closed */}
              <motion.div
                initial={{ rotateX: 0, y: 0 }}
                animate={{ rotateX: 0, y: 0 }}
                exit={{ rotateX: 0, y: 0 }}
                whileHover={{ y: -8, rotateX: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[320px] h-[240px] bg-gradient-to-br from-[#9a2f3f] via-[#862934] to-[#9a2f3f] rounded-t-xl origin-top shadow-2xl z-20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-t-xl bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
                
                {/* Double happiness symbol */}
                <motion.div 
                  className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 flex items-center justify-center"
                  animate={{ 
                    filter: [
                      'drop-shadow(0 0 8px rgba(255,255,255,0.3))',
                      'drop-shadow(0 0 15px rgba(255,255,255,0.5))',
                      'drop-shadow(0 0 8px rgba(255,255,255,0.3))'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="text-white text-5xl font-bold drop-shadow-2xl">囍</div>
                </motion.div>
              </motion.div>

              {/* Click hint */}
              <motion.div 
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/90 text-xs font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full z-30"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                ✨ Click để mở thiệp
              </motion.div>
            </motion.div>
          ) : (
            // Open Envelope - Flap opens, card slides out
            <>
              {/* Flap opened - opens first */}
              <motion.div
                key="flap-open"
                initial={{ 
                  rotateX: 0, 
                  y: 0,
                  opacity: 1
                }}
                animate={{ 
                  rotateX: -175,
                  y: -35,
                  opacity: 0.9
                }}
                exit={{ 
                  rotateX: 0, 
                  y: 0,
                  opacity: 1
                }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: 'spring',
                  stiffness: 80,
                  damping: 12
                }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[320px] h-[240px] bg-gradient-to-br from-[#9a2f3f] via-[#862934] to-[#9a2f3f] rounded-t-xl origin-top shadow-2xl z-20"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'top center'
                }}
              >
                {/* Show underside of flap when opened */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7a1f2f] via-[#6a1a26] to-[#7a1f2f] rounded-t-xl"></div>
                
                {/* Fade out symbol */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 flex items-center justify-center"
                >
                  <div className="text-white/30 text-5xl font-bold">囍</div>
                </motion.div>
              </motion.div>

              {/* Invitation Card - Elegant Design */}
              <motion.div
                key="card-open"
                initial={{ 
                  y: 120,
                  opacity: 0,
                  scale: 0.85,
                  z: -40
                }}
                animate={{ 
                  y: 20,
                  opacity: 1,
                  scale: 1,
                  z: 15
                }}
                exit={{ 
                  y: 120,
                  opacity: 0,
                  scale: 0.85,
                  z: -40
                }}
                transition={{ 
                  duration: 1,
                  delay: 0.3,
                  ease: [0.23, 1, 0.32, 1],
                  type: 'spring',
                  stiffness: 100,
                  damping: 22
                }}
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-[280px] h-[360px] bg-white rounded-xl shadow-2xl overflow-hidden z-10 border border-gray-100"
                style={{
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Couple Photo Section - Elegant Design */}
                <div className="relative w-full h-[220px] bg-gradient-to-b from-pink-50 to-rose-50 overflow-hidden">
                  {/* Photo frame with white border */}
                  <div className="absolute inset-4 rounded-md overflow-hidden border border-white shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 flex items-center justify-center">
                      {/* Couple illustration - simple and elegant */}
                      <div className="flex items-end gap-4 pb-6">
                        {/* Woman */}
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-white shadow-md mb-2 relative border-2 border-pink-100">
                            <div className="absolute -top-1.5 -left-1 -right-1 h-7 bg-gray-800 rounded-t-full"></div>
                            <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
                          </div>
                          <div className="w-11 h-20 bg-white rounded-t-full shadow-md"></div>
                        </div>
                        
                        {/* Heart icon */}
                        <div className="mb-6 text-[#c85d6a] text-xl">
                          <i className="pi pi-heart-fill"></i>
                        </div>
                        
                        {/* Man */}
                        <div className="flex flex-col items-center relative">
                          <div className="w-16 h-16 rounded-full bg-white shadow-md mb-2 relative border-2 border-amber-100">
                            <div className="absolute -top-1 -left-1 -right-1 h-6 bg-gray-800 rounded-t-full"></div>
                          </div>
                          <div className="w-11 h-20 bg-gradient-to-b from-amber-50 to-amber-100 rounded-t-full shadow-md relative">
                            <div className="absolute top-0 left-1.5 right-1.5 h-4 bg-white rounded-t-full"></div>
                            <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                          </div>
                          {/* Bouquet */}
                          <div className="absolute -left-3 bottom-10 w-5 h-6 bg-gradient-to-b from-pink-300 to-rose-300 rounded-full shadow-md">
                            <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-white rounded-full"></div>
                            <div className="absolute top-1.5 left-0.5 w-1.5 h-1.5 bg-pink-200 rounded-full"></div>
                            <div className="absolute top-1.5 right-0.5 w-1.5 h-1.5 bg-pink-200 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Invitation Content Section - Professional Design */}
                <motion.div 
                  className="p-6 bg-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  {/* Header - Elegant */}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 text-center font-semibold">
                    Trân trọng kính mời
                  </p>
                  
                  {/* Guest Name - Bold */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Linh Anh
                  </h3>
                  
                  {/* Couple Info - Clean */}
                  <p className="text-sm text-gray-600 mb-2 text-center leading-relaxed">
                    Tham dự lễ cưới của
                  </p>
                  <p className="text-lg font-bold text-[#c85d6a] mb-5 text-center">
                    Tùng & Thuý
                  </p>
                  
                  {/* Elegant Divider */}
                  <div className="flex items-center justify-center gap-2 mb-5">
                    <div className="h-px w-10 bg-gray-300"></div>
                    <div className="w-1 h-1 bg-[#c85d6a]/30 rounded-full"></div>
                    <div className="h-px w-10 bg-gray-300"></div>
                  </div>
                  
                  {/* Date and Venue - Clean Layout */}
                  <div className="space-y-2 text-center">
                    <p className="text-xs text-gray-600 font-medium">
                      18:00 • 20.10.2026
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                      Riverside Palace
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Close hint */}
              <motion.div 
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/90 text-xs font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full z-30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                ✨ Click để đóng thiệp
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

