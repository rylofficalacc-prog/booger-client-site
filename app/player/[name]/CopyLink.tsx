"use client";

import { useState } from "react";

/** "Copy profile link" for a player page. */
export default function CopyLink({ path }: { path: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="profileCopy"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.origin + path);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch { /* clipboard blocked: nothing to do */ }
      }}
    >
      {copied ? "Copied" : "Copy profile link"}
    </button>
  );
}
