import React, { useEffect, useRef, useState, useCallback, memo } from 'react';

interface VideoHeroProps {
  videoSrc: string;
  posterSrc: string;
  alt?: string;
  className?: string;
  onVideoReady?: () => void;
  onVideoError?: () => void;
}

const VideoHero = memo<VideoHeroProps>(({
  videoSrc,
  posterSrc,
  alt = '',
  className = '',
  onVideoReady,
  onVideoError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Détection de la visibilité avec Intersection Observer
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Gestion de la lecture vidéo optimisée
  const handlePlay = useCallback(async () => {
    if (!videoRef.current || !shouldLoad) return;

    try {
      const video = videoRef.current;
      
      // Attendre que la vidéo soit prête avec un état plus avancé
      if (video.readyState < 4) {
        await new Promise((resolve) => {
          const checkReady = () => {
            if (video.readyState >= 4) {
              resolve(true);
            } else {
              setTimeout(checkReady, 50);
            }
          };
          checkReady();
        });
      }

      // Tentative de lecture avec gestion des erreurs
      const playPromise = video.play();
      if (playPromise !== undefined) {
        await playPromise;
        setIsPlaying(true);
      }
    } catch (error) {
      console.warn('Video autoplay failed:', error);
      setHasError(true);
      onVideoError?.();
    }
  }, [shouldLoad, onVideoError]);

  // Tentative de lecture quand la vidéo est prête
  useEffect(() => {
    if (shouldLoad && !hasError) {
      // Délai plus court pour une meilleure réactivité
      const timer = setTimeout(handlePlay, 50);
      return () => clearTimeout(timer);
    }
  }, [shouldLoad, hasError, handlePlay]);

  // Préchargement intelligent de la vidéo
  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      const video = videoRef.current;
      
      // Précharger les métadonnées
      video.preload = 'metadata';
      
      // Charger progressivement
      const loadProgressively = () => {
        if (video.readyState < 4) {
          video.preload = 'auto';
          setTimeout(loadProgressively, 100);
        }
      };
      
      loadProgressively();
    }
  }, [shouldLoad]);

  // Gestion des événements vidéo
  const handleLoadedData = useCallback(() => {
    setIsLoaded(true);
    onVideoReady?.();
  }, [onVideoReady]);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(false);
    onVideoError?.();
  }, [onVideoError]);

  const handlePlayEvent = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handlePauseEvent = useCallback(() => {
    setIsPlaying(false);
  }, []);

  // Gestion de la visibilité de la page
  useEffect(() => {
    if (!shouldLoad) return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isPlaying) {
        handlePlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [shouldLoad, isPlaying, handlePlay]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Image de fallback */}
      <img
        src={posterSrc}
        alt={alt}
        className="w-full h-full object-cover"
      />

      {/* Vidéo optimisée */}
      {shouldLoad && !hasError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          className={`absolute inset-0 w-full h-full object-cover video-smooth video-optimized ${
            isLoaded && isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={handleLoadedData}
          onError={handleError}
          onCanPlay={handlePlay}
          onPlay={handlePlayEvent}
          onPause={handlePauseEvent}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Indicateur de chargement */}
      {shouldLoad && !hasError && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="video-loading rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
});

VideoHero.displayName = 'VideoHero';

export default VideoHero;
