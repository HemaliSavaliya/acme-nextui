"use client";

import React from 'react';
import PlayButton from "../../../public/images/play.svg";
import PauseButton from "../../../public/images/pause.svg";

const VideoPlayerControls = ({
  progress,
  isPaused,
  onPlayPause,
  size = 55,
  width = 2
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div className='relative flex justify-center items-center h-full cursor-pointer'>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }} onClick={onPlayPause}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill='transparent'
          stroke='#aaaaaa'
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill='transparent'
          stroke='#ffffff'
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.2s ease-in-out' }}  // Add this line
        />
      </svg>
      <div className='absolute'>
        <button className='group cursor-pointer flex justify-center items-center' onClick={onPlayPause}>
          <div className='fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out'>
            {isPaused ? <PlayButton /> : <PauseButton />}
          </div>
        </button>
      </div>
    </div>
  )
}

export default VideoPlayerControls