import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMusic, FiPlay, FiPause, FiVolume2 } from 'react-icons/fi'

const tracks = [
  {
    id: 'track-1',
    title: 'Sunflower',
    artist: 'Post Malone',
    image: 'https://i.ytimg.com/vi/ApXoWvfEYVU/maxresdefault.jpg',
    audio: '/music/sunflower.mpeg',
    youtubeEmbed: 'https://www.youtube.com/embed/ApXoWvfEYVU'
  },
  {
    id: 'track-2',
    title: 'Starboy',
    artist: 'The Weeknd',
    image: 'https://i.ytimg.com/vi/34Na4j8AVgA/maxresdefault.jpg',
    audio: '/music/startboy.mpeg',
    youtubeEmbed: 'https://www.youtube.com/embed/34Na4j8AVgA'
  },
  {
    id: 'track-3',
    title: 'JUST A BOY',
    artist: 'DriNsaNE',
    image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=900&q=80',
    audio: '/music/just-boy.mpeg',
    youtubeEmbed: 'https://www.youtube.com/embed/tgbNymZ7vqY'
  }
]

const particlePositions = [
  { top: '9%', left: '8%', delay: '0s' },
  { top: '14%', left: '84%', delay: '-2.2s' },
  { top: '74%', left: '7%', delay: '-4s' },
  { top: '80%', left: '88%', delay: '-1.2s' },
  { top: '46%', left: '92%', delay: '-3.4s' },
  { top: '42%', left: '4%', delay: '-2.8s' }
]

function formatTime(totalSeconds) {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) return '0:00'
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = Math.floor(totalSeconds % 60)
  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

export default function FavoriteMusic() {
  const [activeTrackId, setActiveTrackId] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.78)

  const audioRef = useRef(null)

  const activeTrack = useMemo(
    () => tracks.find(track => track.id === activeTrackId) || null,
    [activeTrackId]
  )

  const progress = useMemo(() => {
    if (!duration) return 0
    return Math.min(100, (currentTime / duration) * 100)
  }, [currentTime, duration])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume

    const handleLoaded = () => setDuration(audio.duration || 0)
    const handleTime = () => setCurrentTime(audio.currentTime || 0)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('loadedmetadata', handleLoaded)
    audio.addEventListener('timeupdate', handleTime)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoaded)
      audio.removeEventListener('timeupdate', handleTime)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !activeTrack) return

    const loadedTrackId = audio.getAttribute('data-track-id')

    if (loadedTrackId !== activeTrack.id) {
      audio.src = activeTrack.audio
      audio.setAttribute('data-track-id', activeTrack.id)
      audio.load()
      setCurrentTime(0)
      setDuration(0)
    }
  }, [activeTrack])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !activeTrack) return

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false))
    } else {
      audio.pause()
    }
  }, [isPlaying, activeTrack])

  const toggleTrackFromCard = track => {
    if (activeTrackId === track.id) {
      setIsPlaying(prev => !prev)
      return
    }

    setActiveTrackId(track.id)
    setIsPlaying(true)
  }

  const togglePlayPause = () => {
    if (!activeTrack) return
    setIsPlaying(prev => !prev)
  }

  const handleSeek = event => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const nextPercent = Number(event.target.value)
    const nextTime = (nextPercent / 100) * duration
    audio.currentTime = nextTime
    setCurrentTime(nextTime)
  }

  const handleVolumeChange = event => {
    const nextVolume = Number(event.target.value)
    setVolume(nextVolume)
    if (audioRef.current) audioRef.current.volume = nextVolume
  }

  return (
    <motion.section
      id="music"
      className="favorite-music-section"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="favorite-music-section__backdrop" aria-hidden="true" />
      <div className="favorite-music-section__particles" aria-hidden="true">
        {particlePositions.map((item, index) => (
          <span
            key={`particle-${index}`}
            style={{ top: item.top, left: item.left, animationDelay: item.delay }}
            className="favorite-music-section__particle"
          >
            <FiMusic />
          </span>
        ))}
      </div>

      <div className="favorite-music-section__content">
        <p className="favorite-music-section__eyebrow">Soundtrack</p>
        <h2 className="favorite-music-section__title">My Favorite Music</h2>
        <p className="favorite-music-section__subtitle">
          Tap any card to play or pause directly. The active card shows animated sound waves while your track is playing.
        </p>

        <div className="favorite-music-grid">
          {tracks.map(track => {
            const isActive = activeTrackId === track.id
            const isActiveAndPlaying = isActive && isPlaying

            return (
            <motion.article
              key={track.id}
              whileHover={{ scale: 1.03, y: -6 }}
              className={`favorite-music-card ${isActive ? 'is-active' : ''} ${isActiveAndPlaying ? 'is-playing' : ''}`}
            >
              <img src={track.image} alt={`${track.title} cover`} className="favorite-music-card__image" loading="lazy" />
              <div className="favorite-music-card__overlay" />
              <div className="favorite-music-card__waves" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <button
                type="button"
                className="favorite-music-card__play"
                onClick={() => toggleTrackFromCard(track)}
                aria-label={`${isActiveAndPlaying ? 'Pause' : 'Play'} ${track.title} by ${track.artist}`}
              >
                {isActiveAndPlaying ? <FiPause /> : <FiPlay />}
              </button>
              <div className="favorite-music-card__meta">
                <p className="favorite-music-card__title">{track.title}</p>
                <p className="favorite-music-card__artist">{track.artist}</p>
              </div>
            </motion.article>
          )})}
        </div>

        <audio ref={audioRef} preload="metadata" />

        {activeTrack ? (
          <div className="favorite-music-inline-player" role="group" aria-label="Now playing controls">
            <div className="favorite-music-inline-player__meta">
              <p className="favorite-music-inline-player__label">Now Playing</p>
              <p className="favorite-music-inline-player__track">{activeTrack.title}</p>
              <p className="favorite-music-inline-player__artist">{activeTrack.artist}</p>
            </div>

            <div className="favorite-music-controls favorite-music-controls--inline">
              <button type="button" className="favorite-music-controls__play" onClick={togglePlayPause}>
                {isPlaying ? <FiPause /> : <FiPlay />}
              </button>

              <div className="favorite-music-controls__timeline">
                <input type="range" min="0" max="100" value={progress} onChange={handleSeek} />
                <div className="favorite-music-controls__time">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="favorite-music-controls__volume">
                <FiVolume2 />
                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </motion.section>
  )
}
