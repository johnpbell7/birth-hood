import { metadata, viewport } from 'next-sanity/studio'
export { metadata, viewport }

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        /* birth-hood brand theme for Sanity Studio */
        :root {
          --card-focus-ring-color: #e87bc3 !important;
        }
        [data-ui="NavbarContainer"],
        [data-ui="ToolMenuButton"] > [data-ui="Box"] {
          background-color: #111111 !important;
        }
        [data-scheme="light"] [data-ui="NavbarContainer"] {
          background-color: #111111 !important;
          color: #ffffff !important;
        }
        /* Active tool highlight */
        [data-ui="ToolMenuButton"][aria-pressed="true"] {
          background-color: #e87bc3 !important;
          color: #ffffff !important;
        }
        /* Primary action buttons */
        [data-tone="primary"][data-scheme="light"] {
          --card-bg-color: #e87bc3 !important;
          --card-fg-color: #ffffff !important;
        }
        button[data-tone="primary"] {
          background-color: #e87bc3 !important;
          color: #ffffff !important;
          border-color: #e87bc3 !important;
        }
        button[data-tone="primary"]:hover {
          background-color: #c955a8 !important;
          border-color: #c955a8 !important;
        }
        /* Publish button */
        [data-ui="PublishButton"] button,
        button[aria-label*="Publish"] {
          background-color: #e87bc3 !important;
          color: #ffffff !important;
        }
      `}</style>
      {children}
    </>
  )
}
