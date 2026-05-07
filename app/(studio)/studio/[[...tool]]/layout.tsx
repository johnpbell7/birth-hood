import { metadata, viewport } from 'next-sanity/studio'
export { metadata, viewport }

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        /* ── Fix double-scroll: studio fills full viewport, no site nav offset ── */
        .site-main { padding-top: 0 !important; }
        body { overflow: hidden !important; height: 100dvh !important; }
        html { height: 100dvh !important; }

        /* ── birth-hood brand palette ── */
        :root {
          --bh-pink: #e87bc3;
          --bh-pink-deep: #c955a8;
          --bh-black: #111111;
          --bh-dark: #1a1a1a;
          --bh-surface: #222222;
          --bh-border: rgba(232,123,195,0.2);
        }

        /* ── Top toolbar ── */
        [data-ui="NavbarContainer"] {
          background: var(--bh-black) !important;
          border-bottom: 1px solid var(--bh-border) !important;
          box-shadow: 0 1px 0 rgba(232,123,195,0.1) !important;
        }

        /* Studio wordmark / logo area */
        [data-ui="NavbarContainer"] [data-ui="Flex"]:first-child {
          gap: 0.5rem !important;
        }

        /* Tool buttons in the navbar (Structure, Vision etc.) */
        [data-ui="ToolMenuButton"] {
          color: rgba(255,255,255,0.65) !important;
          border-radius: 6px !important;
          transition: background 0.15s, color 0.15s !important;
        }
        [data-ui="ToolMenuButton"]:hover {
          background: rgba(232,123,195,0.12) !important;
          color: var(--bh-pink) !important;
        }
        [data-ui="ToolMenuButton"][aria-pressed="true"],
        [data-ui="ToolMenuButton"][data-selected="true"] {
          background: var(--bh-pink) !important;
          color: #fff !important;
        }

        /* ── Left sidebar (document list pane) ── */
        [data-testid="pane"],
        [data-ui="PaneLayout"] > [data-ui="Card"]:first-child {
          background: var(--bh-dark) !important;
          border-right: 1px solid var(--bh-border) !important;
        }

        /* Sidebar list items */
        [data-testid="pane"] [data-ui="Text"],
        [data-testid="pane"] [data-ui="MenuItem"] {
          color: rgba(255,255,255,0.75) !important;
        }
        [data-testid="pane"] [data-ui="MenuItem"]:hover {
          background: rgba(232,123,195,0.1) !important;
        }
        [data-testid="pane"] [data-ui="MenuItem"][aria-selected="true"],
        [data-testid="pane"] [data-ui="MenuItem"][data-selected="true"] {
          background: rgba(232,123,195,0.18) !important;
          border-left: 3px solid var(--bh-pink) !important;
        }

        /* ── Publish / primary action buttons ── */
        button[data-tone="primary"],
        [data-ui="PublishButton"] button,
        button[aria-label*="Publish"],
        button[aria-label*="publish"] {
          background: var(--bh-pink) !important;
          color: #fff !important;
          border-color: var(--bh-pink) !important;
          border-radius: 999px !important;
          font-weight: 600 !important;
          letter-spacing: 0.02em !important;
          transition: background 0.2s !important;
        }
        button[data-tone="primary"]:hover,
        [data-ui="PublishButton"] button:hover {
          background: var(--bh-pink-deep) !important;
          border-color: var(--bh-pink-deep) !important;
        }

        /* ── Focus ring ── */
        *:focus-visible {
          outline-color: var(--bh-pink) !important;
        }
        [data-ui="TextInput"]:focus-within,
        [data-ui="Select"]:focus-within,
        textarea:focus {
          border-color: var(--bh-pink) !important;
          box-shadow: 0 0 0 2px rgba(232,123,195,0.25) !important;
        }

        /* ── Active / selected state highlights ── */
        [data-scheme="light"] [data-selected="true"] [data-ui="Text"],
        [data-scheme="light"] [aria-selected="true"] [data-ui="Text"] {
          color: var(--bh-pink-deep) !important;
        }

        /* ── Green dot on "published" status indicator → pink ── */
        [data-tone="positive"] [data-ui="Dot"],
        [data-tone="positive"] svg circle {
          fill: var(--bh-pink) !important;
        }

        /* ── Scrollbars (webkit) ── */
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(232,123,195,0.35); border-radius: 99px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--bh-pink); }

        /* ── birth-hood branding strip above studio toolbar ── */
        [data-ui="NavbarContainer"]::before {
          content: 'birth-hood studio';
          display: block;
          position: absolute;
          left: 1.2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: var(--font-playfair), Georgia, serif;
          font-size: 0.78rem;
          font-style: italic;
          letter-spacing: 0.04em;
          color: rgba(232,123,195,0.7);
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
      {children}
    </>
  )
}
