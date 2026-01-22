'use client'

import Link from 'next/link'

const demos = [
  {
    country: '🇸🇪',
    countryName: 'Sverige',
    businesses: [
      { slug: 'bella-italia', name: 'Bella Italia', type: '🍕', typeLabel: 'Restaurang', ai: 'Sofia' },
      { slug: 'anderssons-bilverkstad', name: 'Anderssons Bilverkstad', type: '🔧', typeLabel: 'Verkstad', ai: 'Marcus' },
    ]
  },
  {
    country: '🇳🇴',
    countryName: 'Norge',
    businesses: [
      { slug: 'bella-napoli', name: 'Bella Napoli', type: '🍕', typeLabel: 'Restaurant', ai: 'Giulia' },
      { slug: 'hansen-auto', name: 'Hansen Auto', type: '🔧', typeLabel: 'Verksted', ai: 'Erik' },
    ]
  },
  {
    country: '🇩🇰',
    countryName: 'Danmark',
    businesses: [
      { slug: 'trattoria-roma', name: 'Trattoria Roma', type: '🍕', typeLabel: 'Restaurant', ai: 'Marco' },
      { slug: 'jensens-vaerksted', name: 'Jensens Værksted', type: '🔧', typeLabel: 'Værksted', ai: 'Lars' },
    ]
  },
]

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0f1a',
      fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#f7fafc',
      position: 'relative',
    }}>
      {/* Grid Background */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: 'linear-gradient(#1a2332 1px, transparent 1px), linear-gradient(90deg, #1a2332 1px, transparent 1px)',
        backgroundSize: '50px 50px', opacity: 0.3, pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: 'rgba(10, 15, 26, 0.8)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #2d3748',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="https://eryai.tech" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.25rem', fontWeight: 700, color: '#f7fafc', textDecoration: 'none' }}>
            ery<span style={{ color: '#7c3aed' }}>.ai</span>
          </a>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="https://eryai.tech#problem" style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '0.9rem' }}>Problem</a>
            <a href="https://eryai.tech#solution" style={{ color: '#a0aec0', textDecoration: 'none', fontSize: '0.9rem' }}>Løsning</a>
            <span style={{ color: '#7c3aed', fontSize: '0.9rem', fontWeight: 600 }}>Demo</span>
            <a href="https://eryai.tech#waitlist" style={{ background: '#7c3aed', color: '#fff', padding: '0.6rem 1.25rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600 }}>Kom i gang</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ padding: '10rem 2rem 4rem', maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: '#1a2332', border: '1px solid #2d3748', padding: '0.5rem 1rem',
            borderRadius: '9999px', fontSize: '0.875rem', color: '#a0aec0', marginBottom: '2rem',
          }}>
            <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }} />
            Live Demos
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Se Ery AI i <span style={{ color: '#7c3aed' }}>aksjon</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#a0aec0', maxWidth: '700px', margin: '0 auto' }}>
            Test våre AI-assistenter for restauranter og bilverksteder. Klikk på chat-boblen for å starte en samtale.
          </p>
        </div>

        {/* Demo Cards */}
        {demos.map((region) => (
          <div key={region.country} style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '2rem' }}>{region.country}</span>
              {region.countryName}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {region.businesses.map((biz) => (
                <Link key={biz.slug} href={`/demo/${biz.slug}`} style={{
                  background: '#111827', border: '1px solid #2d3748', borderRadius: '12px', padding: '2rem',
                  textDecoration: 'none', transition: 'all 0.3s ease', display: 'block',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{
                      fontSize: '2rem', width: '56px', height: '56px', background: 'rgba(124, 58, 237, 0.1)',
                      border: '1px solid #7c3aed', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>{biz.type}</span>
                    <div>
                      <h3 style={{ color: '#f7fafc', fontSize: '1.2rem', margin: 0, fontWeight: 600 }}>{biz.name}</h3>
                      <p style={{ color: '#718096', margin: '4px 0 0', fontSize: '0.9rem' }}>{biz.typeLabel}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: '#7c3aed', margin: 0, fontSize: '0.9rem' }}>💬 AI-assistent: <strong>{biz.ai}</strong></p>
                    <span style={{ color: '#718096', fontSize: '1.2rem' }}>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div style={{
          background: 'linear-gradient(135deg, #7c3aed, #a855f7)', borderRadius: '16px', padding: '4rem', textAlign: 'center', marginTop: '4rem',
        }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>Klar til å kutte støyen?</h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>Book en 20 min discovery call – vi viser deg hvordan Ery AI passer ditt team.</p>
          <a href="https://eryai.tech#waitlist" style={{ background: '#0a0f1a', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Book discovery call</a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #2d3748', padding: '3rem 2rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <a href="https://eryai.tech" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '1.2rem', fontWeight: 700, color: '#f7fafc', textDecoration: 'none' }}>
          ery<span style={{ color: '#7c3aed' }}>.ai</span>
        </a>
        <p style={{ color: '#718096', marginTop: '1rem', fontSize: '0.875rem' }}>© 2026 Ery AI · Bygget for nordiske SMB</p>
      </footer>
    </div>
  )
}
