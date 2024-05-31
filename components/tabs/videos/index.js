"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card } from "@nextui-org/react";
import VideoPlayerControls from "./VideoPlayerControls";

export default function Videos() {
  const [isPaused, setIsPaused] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);

  // useEffect(() => {
  //   if (isPaused) return;

  //   const currentTime = videoRef.current?.currentTime;

  //   if (videoDuration !== null && currentTime !== null) {
  //     const loadingTimeout = setTimeout(() => {
  //       if (videoProgress === currentTime / videoDuration) {
  //         setVideoProgress((prev) => prev + 0.000001);
  //       } else {
  //         setVideoProgress(currentTime / videoDuration);
  //       }
  //     }, 10);

  //     return () => {
  //       clearTimeout(loadingTimeout);
  //     };
  //   }
  // }, [videoProgress, isPaused, videoDuration]);

  useEffect(() => {
    if (isPaused) return;

    const currentTime = videoRef.current?.currentTime;

    if (!isNaN(currentTime) && !isNaN(videoDuration) && videoDuration !== 0) {
      setVideoProgress((prev) => (prev === currentTime / videoDuration ? prev + 0.000001 : currentTime / videoDuration));
    }
  }, [videoProgress, isPaused, videoDuration]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  }

  return (
    <Card
      isFooterBlurred
      radius="lg"
      className={`border-none video`}
    >
      <div
        className="relative max-w-md rounded-xl overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`absolute top-0 right-0 bottom-0 left-0 z-10 ${isPaused ? "paused-overlay" : ""}`}>
          <VideoPlayerControls
            progress={videoProgress}
            isPaused={isPaused}
            onPlayPause={togglePlayPause}
          />
        </div>
        <video
          className={`w-full ${isPaused ? "paused" : ""}`}
          ref={videoRef}
          loop
          muted
          onPause={() => setIsPaused(true)}
          onPlay={() => setIsPaused(false)}
        >
          <source src="/images/video.mp4" />
        </video>
      </div>
    </Card>
  );
}