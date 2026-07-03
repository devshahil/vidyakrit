import { ImageResponse } from 'next/og';
 
export const dynamic = 'force-static';
export const alt = 'Vidyakrit Premium Software Engineering';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F172A',
          backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(59, 130, 246, 0.4) 0%, rgba(15, 23, 42, 1) 60%)',
          color: 'white',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <div style={{ fontSize: 90, fontWeight: 800, letterSpacing: '-0.04em', background: 'linear-gradient(to right, #ffffff, #a1a1aa)', backgroundClip: 'text', color: 'transparent' }}>
            Vidyakrit
          </div>
          <div style={{ fontSize: 40, fontWeight: 500, color: '#a1a1aa', textAlign: 'center', maxWidth: '800px' }}>
            Premium Software Engineering & Enterprise Solutions
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 60, display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ fontSize: 24, fontWeight: 600, color: '#4F46E5' }}>vidyakrit.in</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
