export default function PageHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: React.ReactNode }) {
  return (
    <header className="pageHeader">
      <div className="pageHeaderGlow" />
      <p>{eyebrow}</p>
      <h1 className="pageTitle">{title}</h1>
      {sub && <span>{sub}</span>}
    </header>
  );
}
