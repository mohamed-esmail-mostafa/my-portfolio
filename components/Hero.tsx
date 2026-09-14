'use client';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 780, width: '100%', position: 'relative' }}>
        <p style={{
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: '0.15em',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}>
          Full-Stack Developer
        </p>

        <h1 style={{
          fontSize: 'clamp(40px, 7vw, 80px)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.03em',
          color: 'var(--text-primary)',
          marginBottom: 24,
          textTransform: 'uppercase',
        }}>
          Full-Stack Web &<br />App Developer
        </h1>

        <p style={{
          fontSize: 'clamp(15px, 2vw, 17px)',
          lineHeight: 1.7,
          color: 'var(--text-secondary)',
          maxWidth: 520,
          margin: '0 auto 40px',
        }}>
          Hi, I'm Mohamed. I build modern web platforms, scalable SaaS products,
          mobile applications, and custom software that drive business growth.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              padding: '12px 28px',
              background: 'var(--text-primary)',
              color: '#000',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              padding: '12px 28px',
              background: 'transparent',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-hover)',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--text-secondary)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}
