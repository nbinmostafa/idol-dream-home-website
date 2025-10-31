import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen.jsx";

export default function DelayedFallback({ delay = 180 }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return show ? <LoadingScreen /> : null;
}

