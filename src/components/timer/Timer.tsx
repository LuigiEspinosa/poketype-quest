import { FC, useEffect, useState } from "react";

interface TimerProps {
  onEnd: () => void;
}

const Timer: FC<TimerProps> = ({ onEnd }) => {
  const [time, setTime] = useState(299);

  useEffect(() => {
    if (time <= 0) {
      onEnd();
      return;
    }

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [time, onEnd]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <p className="text-4xl">
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
};

export default Timer;
