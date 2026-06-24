import Home from '../page'

export const metadata = {
  title: 'Poppins preview',
  robots: { index: false, follow: false },
}

// Hidden preview: renders the real homepage but forces every font to Poppins
// (the .poppins-preview override in globals.css). The live homepage is untouched.
export default async function PoppinsPreview() {
  return (
    <div className="poppins-preview">
      {/* Load the full Poppins weight + italic range, just for this route */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700&display=swap"
      />
      <div
        style={{
          background: '#111',
          color: '#fff',
          padding: '0.7rem 1rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          letterSpacing: '0.04em',
        }}
      >
        PREVIEW · whole homepage in Poppins (varied weights &amp; italics) · not the live site
      </div>
      {await Home()}
    </div>
  )
}
