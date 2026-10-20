"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchIndex } from "@/content/site";
import { ArrowIcon, CloseIcon, SearchIcon } from "@/components/ui/Icons";

export default function SearchPanel() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchIndex;
    return searchIndex.filter(({ title, detail }) =>
      `${title} ${detail}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <>
      <button className="icon-button" type="button" aria-label="Search this site" onClick={() => setOpen(true)}>
        <SearchIcon />
      </button>
      {open ? (
        <div className="search-backdrop" role="dialog" aria-modal="true" aria-label="Site search">
          <button className="search-backdrop__dismiss" aria-label="Close search" onClick={() => setOpen(false)} />
          <div className="search-panel">
            <div className="search-panel__topline">
              <span>Search CCS</span>
              <button className="icon-button" type="button" aria-label="Close search" onClick={() => setOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <label className="search-field">
              <SearchIcon />
              <span className="sr-only">Search pages and solutions</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pages and solutions…"
              />
            </label>
            <div className="search-results" aria-live="polite">
              {results.length ? results.map((result) => (
                <Link key={result.href} href={result.href} onClick={() => setOpen(false)}>
                  <span><strong>{result.title}</strong><small>{result.detail}</small></span>
                  <ArrowIcon />
                </Link>
              )) : <p className="search-empty">No matching page found.</p>}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
