'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [showPrompt, setShowPrompt] = useState(true)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const playMusic = () => {
            audio.play()
                .then(() => {
                    setIsPlaying(true)
                    setShowPrompt(false)
                    cleanup()
                })
                .catch((e) => {
                    console.log("Playback failed:", e);
                })
        }

        const cleanup = () => {
            document.removeEventListener('click', playMusic)
            document.removeEventListener('touchstart', playMusic)
            document.removeEventListener('keydown', playMusic)
        }

        // Try to play immediately
        audio.play()
            .then(() => {
                setIsPlaying(true)
                setShowPrompt(false)
            })
            .catch(() => {
                // If blocked, wait for interaction
                document.addEventListener('click', playMusic, { once: true })
                document.addEventListener('touchstart', playMusic, { once: true })
                document.addEventListener('keydown', playMusic, { once: true })
            })

        return cleanup;
    }, [])

    const toggleMusic = (e: React.MouseEvent) => {
        e.stopPropagation()
        setShowPrompt(false)
        
        const audio = audioRef.current;
        if (audio) {
            if (audio.paused) {
                audio.play()
                    .then(() => setIsPlaying(true))
                    .catch(console.error)
            } else {
                audio.pause()
                setIsPlaying(false)
            }
        }
    }

    return (
        <>
            {/* Hidden Audio Element */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
            >
                <source src="/wedding-music.mp3" type="audio/mpeg" />
            </audio>

            {/* Floating Music Disc Button */}
            <div className="fixed left-3 md:left-4 bottom-4 md:bottom-5 z-50">
                {/* Prompt tooltip */}
                <AnimatePresence>
                    {showPrompt && !isPlaying && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute -top-9 left-0 whitespace-nowrap"
                        >
                            <div className="bg-[#8B2635] text-white text-[10px] px-2.5 py-1.5 rounded-lg shadow-lg">
                                🎵 Nhấn để phát nhạc
                                <div className="absolute -bottom-1 left-4 w-2 h-2 bg-[#8B2635] rotate-45"></div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={toggleMusic}
                    className="relative w-10 h-10 md:w-11 md:h-11 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    animate={showPrompt && !isPlaying ? { scale: [1, 1.08, 1] } : {}}
                    transition={{ duration: 1.2, repeat: showPrompt ? Infinity : 0 }}
                    aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
                >
                    {/* Disc background */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black border-2 border-gray-600 overflow-hidden"
                        animate={{ rotate: isPlaying ? 360 : 0 }}
                        transition={{
                            duration: 2,
                            repeat: isPlaying ? Infinity : 0,
                            ease: 'linear',
                        }}
                    >
                        {/* Vinyl grooves */}
                        <div className="absolute inset-1.5 rounded-full border border-gray-500 opacity-40"></div>
                        <div className="absolute inset-2.5 rounded-full border border-gray-500 opacity-30"></div>

                        {/* Center red label */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-gradient-to-br from-[#8B2635] to-[#c85d6a] flex items-center justify-center shadow-sm">
                                <div className="w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-gray-900"></div>
                            </div>
                        </div>

                        {/* Shine */}
                        <div className="absolute top-0.5 left-1/4 w-1/3 h-1/4 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                    </motion.div>

                    {/* Play/Pause overlay */}
                    {!isPlaying && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 flex items-center justify-center bg-black/25 rounded-full"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </motion.div>
                    )}
                </motion.button>

                {/* Status text */}
                <div className="text-center mt-0.5">
                    <span className="text-[8px] text-gray-400">
                        {isPlaying ? '♪♫♪' : ''}
                    </span>
                </div>
            </div>
        </>
    )
}
