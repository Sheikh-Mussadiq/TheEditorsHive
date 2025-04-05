"use client";
// Add YouTube API types to the window object
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: any;
  }
}

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import Image from "next/image";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const playerInstanceRef = useRef<any>(null);

  // Load YouTube API and initialize player
  useEffect(() => {
    // Safety check for SSR
    if (typeof window === "undefined") return;

    // Function to initialize player
    const initPlayer = () => {
      if (!playerContainerRef.current || !window.YT) return;

      try {
        playerInstanceRef.current = new window.YT.Player(
          playerContainerRef.current,
          {
            videoId: videoId,
            playerVars: {
              autoplay: 0,
              controls: 0,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              mute: 0,
              enablejsapi: 1,
              origin: window.location.origin,
            },
            events: {
              onStateChange: (event: any) => {
                setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
              },
              onReady: () => {
                setPlayerReady(true);
                console.log("Player ready");
              },
            },
          }
        );
      } catch (error) {
        console.error("Error initializing YouTube player:", error);
      }
    };

    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      // Define global callback
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };

      // Load API script if not already loaded
      if (
        !document.querySelector(
          'script[src="https://www.youtube.com/iframe_api"]'
        )
      ) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }

    return () => {
      // Clean up player
      if (playerInstanceRef.current && playerInstanceRef.current.destroy) {
        playerInstanceRef.current.destroy();
      }
    };
  }, [videoId]);

  const handlePlayClick = () => {
    if (!playerInstanceRef.current) return;

    try {
      if (isPlaying) {
        playerInstanceRef.current.pauseVideo();
      } else {
        playerInstanceRef.current.playVideo();
      }
    } catch (error) {
      console.error("Error controlling YouTube player:", error);
    }
  };

  const handleMuteClick = () => {
    if (!playerInstanceRef.current) return;

    try {
      if (isMuted) {
        playerInstanceRef.current.unMute();
      } else {
        playerInstanceRef.current.mute();
      }
      setIsMuted(!isMuted);
    } catch (error) {
      console.error("Error controlling YouTube player audio:", error);
    }
  };

  const handleFullscreenClick = () => {
    if (!playerContainerRef.current) return;

    try {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        playerContainerRef.current.requestFullscreen();
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error);
    }
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      className="relative w-full h-full rounded-lg overflow-hidden group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* YouTube player container */}
      <div ref={playerContainerRef} className="w-full h-full"></div>

      {/* Thumbnail overlay (shown before play) */}
      {!isPlaying && (
        <div
          className="absolute inset-0 z-10 cursor-pointer"
          onClick={handlePlayClick}
        >
          <Image
            src={thumbnailUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            onError={(e) => {
              // Fallback to standard quality thumbnail if HD not available
              (
                e.target as HTMLImageElement
              ).src = `https://img.youtube.com/vi/${videoId}/0.jpg`;
            }}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors">
              <Play className="w-6 h-6 text-white ml-1" />
            </div>
          </div>
        </div>
      )}

      {/* Custom controls overlay */}
      {isPlaying && (
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={handlePlayClick}
              className="text-white hover:text-primary transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={handleMuteClick}
              className="text-white hover:text-primary transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            <div className="text-white text-sm ml-auto">{title}</div>

            <button
              onClick={handleFullscreenClick}
              className="text-white hover:text-primary transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
