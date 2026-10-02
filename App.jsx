import { useState } from 'react';

export default function App() {
  const [view, setView] = useState('home');

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1e293b' }}>
      {/* Navigation Bar */}
      <nav style={{ padding: '1rem 2rem', backgroundColor: '#0f172a', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: '0.5px' }}>
          JNTUH Admission Portal
        </div>
        <div>
          <button onClick={() => setView('home')} style={{ marginRight: '1.5rem', background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', fontSize: '1rem' }}>Home</button>
          <button onClick={() => setView('dashboard')} style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', fontSize: '1rem' }}>Dashboard</button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* HOME VIEW */}
        {view === 'home' && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1 style={{ color: '#0f172a', fontSize: '2.5rem', marginBottom: '1rem' }}>B.Tech Admissions 2026</h1>
            <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Welcome to the official counseling and admission portal. Apply for Category A (Convenor Quota) and Category B (Management Quota) seats.
            </p>
            <button 
              onClick={() => setView('dashboard')} 
              style={{ marginTop: '2.5rem', padding: '0.8rem 2rem', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}>
              Start Application
            </button>
          </div>
        )}

        {/* DASHBOARD VIEW */}
        {view === 'dashboard' && (
          <div>
            <h2 style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
              Applicant Dashboard
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              
              {/* Card 1 */}
              <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
                <h3 style={{ marginTop: 0 }}>1. Academic Details</h3>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.5' }}>
                  Enter your TS EAMCET Hall Ticket number, Rank, and Intermediate (10+2) scores.
                </p>
                <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#e2e8f0', color: '#475569', textAlign: 'center', borderRadius: '4px', fontSize: '0.85rem' }}>
                  Database not connected yet
                </div>
              </div>

              {/* Card 2 */}
              <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#f8fafc' }}>
                <h3 style={{ marginTop: 0 }}>2. Verification Documents</h3>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.5' }}>
                  Upload your SSC, Inter Memo, Transfer Certificate, and ePASS Income/Caste certificates.
                </p>
                <div style={{ marginTop: '1rem', padding: '0.5rem', backgroundColor: '#e2e8f0', color: '#475569', textAlign: 'center', borderRadius: '4px', fontSize: '0.85rem' }}>
                  Storage not connected yet
                </div>
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
}
