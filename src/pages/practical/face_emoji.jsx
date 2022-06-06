import React from 'react';
import { arc } from 'd3';

const face_emoji = () => {
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 20;
  const eyeOffSetX = 90;
  const eyeOffSetY = 90;
  const eyeRadius = 40;
  const mouthWidth = 20;
  const mouthRadius = 140;

  const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <circle
            r={centerY - strokeWidth / 2}
            fill='yellow'
            stroke='black'
            strokeWidth={strokeWidth}
          />
          <circle cx={-eyeOffSetX} cy={-eyeOffSetY} r={eyeRadius} />
          <circle cx={eyeOffSetX} cy={-eyeOffSetY} r={eyeRadius} />
          <path d={mouthArc()} />
        </g>
      </svg>
    </div>
  );
};

export default face_emoji;
