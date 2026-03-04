export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none">
      {/* Primary large orb - slow drift */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          top: '10%',
          left: '60%',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
          animation: 'orb-drift-1 25s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />

      {/* Secondary orb - different path */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          top: '50%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.10) 0%, transparent 70%)',
          animation: 'orb-drift-2 30s ease-in-out infinite',
          filter: 'blur(50px)',
        }}
      />

      {/* Third orb - smaller, faster */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          top: '70%',
          right: '20%',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
          animation: 'orb-drift-3 20s ease-in-out infinite',
          filter: 'blur(40px)',
        }}
      />

      {/* Fourth orb - top left area */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          top: '-10%',
          left: '20%',
          background: 'radial-gradient(circle, rgba(110, 231, 183, 0.06) 0%, transparent 70%)',
          animation: 'orb-drift-4 35s ease-in-out infinite',
          filter: 'blur(50px)',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-brand-green/30"
            style={{
              top: `${10 + i * 11}%`,
              left: `${8 + i * 12}%`,
              animation: `particle-float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * -2}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
