const BallIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {

  return (<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <radialGradient id="ballGradient" cx="70%" cy="20%" r="50%">
        <stop offset="1%" stopColor="#fce4ff"></stop>
        <stop offset="100%" stopColor="#ffcc00"></stop>
      </radialGradient>
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="4" numOctaves="4" result="noise"></feTurbulence>
        <feBlend in="SourceGraphic" in2="noise" mode="multiply"></feBlend>
      </filter>
    </defs>
    <circle cx="100" cy="100" r="100" fill="url(#ballGradient)" filter="url(#noiseFilter)"></circle>
  </svg>);
};

export default BallIcon;