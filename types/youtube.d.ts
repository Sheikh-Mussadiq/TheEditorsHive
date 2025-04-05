// Type definitions for YouTube Player API
interface Window {
  YT: {
    Player: new (
      elementId: HTMLIFrameElement | string,
      options: {
        events?: {
          onReady?: () => void
          onStateChange?: (event: { data: number }) => void
        }
      },
    ) => YT.Player
    PlayerState: {
      PLAYING: number
      PAUSED: number
      ENDED: number
      BUFFERING: number
    }
  }
  onYouTubeIframeAPIReady: () => void
}

declare namespace YT {
  interface Player {
    playVideo: () => void
    pauseVideo: () => void
    mute: () => void
    unMute: () => void
    destroy: () => void
  }
}

