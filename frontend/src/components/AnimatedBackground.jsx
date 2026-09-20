import React from 'react';

/**
 * AnimatedBackground — خلفية متحركة مع تغيير مستمر للألوان
 * تُستخدم في صفحة الأدمن فقط
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* ── ORB 1: كبير — يمين أعلى — يتغير لونه باستمرار ── */}
      <div
        className="animate-blob-1 animate-orb-color"
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-80px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 35% 35%, rgba(0,75,252,0.45) 0%, rgba(0,75,252,0.18) 45%, transparent 70%)',
        }}
      />

      {/* ── ORB 2: يسار وسط ── */}
      <div
        className="animate-blob-2 animate-orb-color-2"
        style={{
          position: 'absolute',
          top: '30%',
          left: '-120px',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 60% 60%, rgba(0,180,216,0.38) 0%, rgba(0,180,216,0.14) 45%, transparent 70%)',
        }}
      />

      {/* ── ORB 3: أسفل يمين ── */}
      <div
        className="animate-blob-3 animate-orb-color-3"
        style={{
          position: 'absolute',
          bottom: '-80px',
          right: '20%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 50% 50%, rgba(67,97,238,0.35) 0%, rgba(67,97,238,0.12) 45%, transparent 70%)',
        }}
      />

      {/* ── ORB 4: أسفل يسار — دافئ ── */}
      <div
        className="animate-blob-1 animate-orb-color-4"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '15%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 50% 50%, rgba(245,158,11,0.28) 0%, rgba(245,158,11,0.08) 45%, transparent 70%)',
          animationDelay: '-7s',
          animationDuration: '23s',
        }}
      />

      {/* ── PARTICLE 1: تتحرك وتتغير ألوانها ── */}
      <div
        className="animate-particle-1"
        style={{
          position: 'absolute',
          top: '18%',
          right: '22%',
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: '#004bfc',
          opacity: 0.9,
          boxShadow:
            '0 0 0 6px rgba(0,75,252,0.25), 0 0 0 14px rgba(0,75,252,0.12), 0 0 40px 10px rgba(0,75,252,0.5)',
        }}
      />

      {/* ── PARTICLE 2 ── */}
      <div
        className="animate-particle-2"
        style={{
          position: 'absolute',
          top: '52%',
          left: '18%',
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          background: '#00b4d8',
          opacity: 0.9,
          boxShadow:
            '0 0 0 5px rgba(0,180,216,0.28), 0 0 0 12px rgba(0,180,216,0.12), 0 0 35px 8px rgba(0,180,216,0.5)',
        }}
      />

      {/* ── PARTICLE 3 ── */}
      <div
        className="animate-particle-3"
        style={{
          position: 'absolute',
          top: '72%',
          right: '38%',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          background: '#7c3aed',
          opacity: 0.9,
          boxShadow:
            '0 0 0 4px rgba(124,58,237,0.3), 0 0 0 10px rgba(124,58,237,0.14), 0 0 30px 8px rgba(124,58,237,0.5)',
        }}
      />

      {/* ── PARTICLE 4 ── */}
      <div
        className="animate-particle-4"
        style={{
          position: 'absolute',
          top: '33%',
          left: '42%',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: '#f59e0b',
          opacity: 0.85,
          boxShadow:
            '0 0 0 5px rgba(245,158,11,0.25), 0 0 0 13px rgba(245,158,11,0.10), 0 0 38px 10px rgba(245,158,11,0.45)',
        }}
      />

      {/* ── PARTICLE 5 ── */}
      <div
        className="animate-particle-5"
        style={{
          position: 'absolute',
          bottom: '28%',
          right: '14%',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: '#10b981',
          opacity: 0.9,
          boxShadow:
            '0 0 0 4px rgba(16,185,129,0.3), 0 0 0 10px rgba(16,185,129,0.14), 0 0 28px 7px rgba(16,185,129,0.5)',
        }}
      />

      {/* ── PARTICLE 6: إضافي بطيء ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '48%',
          left: '58%',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: '#004bfc',
          opacity: 0.85,
          boxShadow:
            '0 0 0 5px rgba(0,75,252,0.25), 0 0 0 12px rgba(0,75,252,0.10), 0 0 32px 8px rgba(0,75,252,0.45)',
          animation:
            'particle-drift-2 33s ease-in-out infinite, color-shift-particle 10s linear infinite -5s',
        }}
      />

      {/* ── RING 1: حلقة نابضة تتغير ألوانها ── */}
      <div
        className="animate-ring-pulse"
        style={{
          position: 'absolute',
          top: '8%',
          right: '15%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          border: '2.5px solid rgba(0,75,252,0.4)',
          boxShadow: '0 0 0 1px rgba(0,75,252,0.15), inset 0 0 30px rgba(0,75,252,0.08)',
        }}
      />
      {/* حلقة خارجية أكبر */}
      <div
        className="animate-ring-pulse-slow"
        style={{
          position: 'absolute',
          top: 'calc(8% - 55px)',
          right: 'calc(15% - 55px)',
          width: '430px',
          height: '430px',
          borderRadius: '50%',
          border: '1.5px solid rgba(0,75,252,0.2)',
        }}
      />

      {/* ── RING 2: يسار أسفل ── */}
      <div
        className="animate-ring-pulse"
        style={{
          position: 'absolute',
          bottom: '12%',
          left: '18%',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          border: '2px solid rgba(0,180,216,0.3)',
          boxShadow: '0 0 0 1px rgba(0,180,216,0.1)',
          animationDelay: '-4s',
        }}
      />

      {/* ── GEO 1: معين — لونه يتغير ── */}
      <div
        className="animate-geo-drift"
        style={{
          position: 'absolute',
          top: '24%',
          left: '28%',
          width: '48px',
          height: '48px',
          border: '2.5px solid rgba(0,75,252,0.55)',
          borderRadius: '6px',
          transform: 'rotate(45deg)',
          boxShadow: '0 0 18px rgba(0,75,252,0.35)',
        }}
      />

      {/* ── GEO 2: مربع يمين ── */}
      <div
        className="animate-geo-drift-2"
        style={{
          position: 'absolute',
          top: '63%',
          right: '28%',
          width: '36px',
          height: '36px',
          border: '2px solid rgba(0,180,216,0.55)',
          borderRadius: '4px',
          boxShadow: '0 0 14px rgba(0,180,216,0.35)',
        }}
      />

      {/* ── GEO 3: يسار أسفل ── */}
      <div
        className="animate-geo-drift"
        style={{
          position: 'absolute',
          bottom: '32%',
          left: '12%',
          width: '42px',
          height: '42px',
          border: '2.5px solid rgba(67,97,238,0.55)',
          borderRadius: '4px',
          transform: 'rotate(30deg)',
          boxShadow: '0 0 16px rgba(67,97,238,0.35)',
          animationDelay: '-12s',
          animationDuration: '36s',
        }}
      />

      {/* ── GEO 4: خط أفقي متحرك ── */}
      <div
        className="animate-geo-drift-2"
        style={{
          position: 'absolute',
          top: '16%',
          left: '50%',
          width: '60px',
          height: '3px',
          background: 'linear-gradient(90deg, transparent, rgba(0,75,252,0.7), transparent)',
          borderRadius: '2px',
          boxShadow: '0 0 12px rgba(0,75,252,0.5)',
          animation: 'geo-drift-2 19s linear infinite, color-shift-geo 7s linear infinite -5s',
        }}
      />

      {/* ── Dot Grid Overlay ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(0,75,252,0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
          opacity: 0.5,
        }}
      />
    </div>
  );
}
