"use client";

import { useEffect, useState } from "react";

export default function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  // Empty on the server, filled in once the browser loads
  return <span suppressHydrationWarning>{year ?? ""}</span>;
}