import { useState } from "react";

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0 16px',
};

const starContainerStyle = {
  display: 'flex'
};




interface StarRatingProps { 
  maxRatingStars?: number;
  defaultRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
}

export const StarRating = ({maxRatingStars=5, defaultRating=0, color='#fcc419', size=48, messages=[], className}: StarRatingProps) => {

  const textStyle = {
    lineHeight: '1',
    margin: '0',
    color: color,
    fontSize: `${size / 1.5}px`,
  }

  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(defaultRating);

  function handleRating(rating: number) {
    setRating(rating)
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({length: maxRatingStars}, (_, i) => 
        <Star 
          key={i} 
          onRate={() => handleRating(i+1)}
          full={tempRating ? tempRating >= i+1: rating >= i+1}
          onEnter={() => setTempRating(i+1)}
          onLeave={() => setTempRating(0)}
          color = {color}
          size={size}
        />
        )}
      </div>
      <div style={textStyle}>{messages.length === maxRatingStars ?
      messages[tempRating ? tempRating -1 : rating-1] :
      tempRating || rating || ''}</div>
    </div>
  );
}



interface IStar {
  onLeave: () => void;
  onEnter: () => void;
  onRate: () => void;
  full: boolean;
  color?: string;
  size?: number;
}

function Star({onRate, full, onEnter, onLeave, color, size}: IStar) {

  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: 'block',
    cursor: 'pointer'
  }



  return (
    <span
    role="button" 
    style={starStyle}
    onClick={onRate}
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    >
      {full ? <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={color}
        stroke={color}
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg> : 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={color}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>}
    </span>
  )
}

