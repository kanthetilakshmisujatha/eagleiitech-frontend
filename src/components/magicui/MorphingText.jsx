import React, { useEffect, useState } from "react";

export function MorphingText({ texts = [], interval = 2000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(id);
  }, [texts, interval]);

  return (
    <span className="inline-block text-orange-600">
      {texts[index]}
    </span>
  );
}
