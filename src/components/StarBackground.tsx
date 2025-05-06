import { useState, useEffect } from "react";

interface StarProps {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity?: number;
  delay?: number;
  animationDuration: number;
}

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [meteors, setMeteors] = useState<StarProps[]>([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const generatedStars: StarProps[] = [];
    for (let i = 0; i < numberOfStars; i++) {
      generatedStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(generatedStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 20;
    const generatedMeteors: StarProps[] = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      generatedMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 100 + 3,
      });
    }
    setMeteors(generatedMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            MozAnimationDuration: star.animationDuration + "s",
          }}
        ></div>
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size * 3}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}`,
            MozAnimationDuration: `${meteor.animationDuration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};
export default StarBackground;
