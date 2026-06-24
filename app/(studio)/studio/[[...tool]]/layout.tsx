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

        /* ── Light pink accents — safe, non-structural touches only ── */
        /* Focus ring */
        *:focus-visible {
          outline-color: #fe7fcc !important;
        }

        /* Scrollbars (webkit) */
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(254,127,204,0.35); border-radius: 99px; }
        ::-webkit-scrollbar-thumb:hover { background: #fe7fcc; }
      `}</style>
      {children}
    </>
  )
}
