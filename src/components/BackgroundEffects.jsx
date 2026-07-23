const BackgroundEffects = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[var(--bg)]">
    <div className="absolute inset-0 grid-layer opacity-70" />
    <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-[rgba(77,184,255,0.16)] blur-3xl" />
    <div className="absolute right-0 top-40 h-[32rem] w-[32rem] rounded-full bg-[rgba(121,204,255,0.1)] blur-3xl" />
    <div className="absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-[rgba(164,222,255,0.08)] blur-3xl" />
    {Array.from({ length: 18 }).map((_, index) => (
      <span
        key={index}
        className="particle absolute h-1 w-1 rounded-full bg-[var(--blue-3)]"
        style={{
          left: `${8 + ((index * 17) % 88)}%`,
          top: `${12 + ((index * 23) % 76)}%`,
          animationDelay: `${index * 0.35}s`,
        }}
      />
    ))}
  </div>
)

export default BackgroundEffects
