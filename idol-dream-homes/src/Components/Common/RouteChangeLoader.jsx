import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen.jsx";

export default function RouteChangeLoader({ minDuration = 700 }) {
  const { pathname, search, hash } = useLocation();
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    // Start overlay immediately on route change
    setVisible(true);

    // Ensure we don't hide too quickly; allow the new route to mount and paint
    if (timerRef.current) clearTimeout(timerRef.current);
    // Two RAFs to cross paint boundaries, then minimum duration
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        timerRef.current = setTimeout(() => setVisible(false), minDuration);
      });
    });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // Include search/hash to show loader even on in-app navigations with hashes
  }, [pathname, search, hash, minDuration]);

  return visible ? <LoadingScreen /> : null;
}

