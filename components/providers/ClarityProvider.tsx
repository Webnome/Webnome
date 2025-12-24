"use client";

import { useEffect } from "react";
import clarity from "@microsoft/clarity";

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY || "";

export default function ClarityProvider() {
  useEffect(() => {
    clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return null;
}
