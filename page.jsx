import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      <i className="fa-solid fa-shield-halved home-logo"></i>
      <h1 className="home-title">Bem-vindo ao Gestor de Tickets</h1>
      <p className="home-subtitle">Sua plataforma centralizada para gestão de ciclos e produtividade.</p>

      <div className="home-features">
        <Link href="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="feature-card">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Dashboards</h3>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>Acompanhe métricas e eficiência em tempo real.</p>
          </div>
        </Link>
        <Link href="/backlog" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="feature-card">
            <i className="fa-solid fa-ticket"></i>
            <h3>Backlog</h3>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>Crie e gerencie a lista de tarefas pendentes.</p>
          </div>
        </Link>
        <Link href="/produtividade" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="feature-card">
            <i className="fa-solid fa-users"></i>
            <h3>Produtividade</h3>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>Acompanhe a performance da equipe.</p>
          </div>
        </Link>
        <Link href="/sprints" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="feature-card">
            <i className="fa-solid fa-rotate"></i>
            <h3>Sprints Ágeis</h3>
            <p style={{ fontSize: '0.85rem', color: '#666' }}>Organize as entregas do RH em ciclos eficientes.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}