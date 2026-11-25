"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(useGSAP, TextPlugin);

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const LINK_CLASS = "underline underline-offset-2 hover:opacity-70 transition-opacity";

/**
 * Turns `[label](url)` markdown-style links in a plain string into safe,
 * underlined anchors. Everything else is HTML-escaped. External (http/https)
 * links open in a new tab.
 */
function renderDescription(text: string) {
  return text
    .split(/(\[[^\]]+\]\([^)\s]+\))/g)
    .map((part) => {
      const match = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
      if (!match) return escapeHtml(part);
      const [, label, url] = match;
      const external = /^https?:\/\//.test(url);
      const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a href="${escapeHtml(url)}"${attrs} class="${LINK_CLASS}">${escapeHtml(label)}</a>`;
    })
    .join("");
}

export default function NavDescription({
  description,
}: {
  /** Plain text; use `[label](url)` for underlined links. */
  description: string;
}) {
  useGSAP(() => {
    gsap.to(".description", {
      text: {
        value: renderDescription(description),
        type: "diff",
        speed: 10,
      },
      ease: "power4.inOut",
    });
  }, [description]);
  return (
    <div>
      <p className="font-mono text-stone-700 dark:text-stone-100 font-light text-xs max-w-[250px] lg:text-right text-center description">
      </p>
    </div>
  );
}
