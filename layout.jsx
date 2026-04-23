import './globals.css';
import Link from 'next/link';
import { TicketProvider } from '../context/TicketContext';

export const metadata = {
  title: 'GTicket v18.0 - Sistema de Gestão de Ciclos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <TicketProvider>
          <header>
            <div className="header-logo">
              <Link href="/" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fa-solid fa-building-columns"></i> CAIXA Assistência
              </Link>
            </div>
            <nav className="nav-menu">
              <Link href="/dashboard" className="nav-item" style={{ textDecoration: 'none', color: 'inherit' }}><i className="fa-solid fa-chart-line" style={{ marginRight: '5px' }}></i> Dashboard</Link>
              <Link href="/produtividade" className="nav-item" style={{ textDecoration: 'none', color: 'inherit' }}><i className="fa-solid fa-users" style={{ marginRight: '5px' }}></i> Produtividade</Link>
              <Link href="/backlog" className="nav-item" style={{ textDecoration: 'none', color: 'inherit' }}><i className="fa-solid fa-ticket" style={{ marginRight: '5px' }}></i> Backlog</Link>
              <Link href="/sprints" className="nav-item" style={{ textDecoration: 'none', color: 'inherit' }}><i className="fa-solid fa-rotate" style={{ marginRight: '5px' }}></i> Sprints</Link>
              <Link href="/logs" className="nav-item" style={{ textDecoration: 'none', color: 'inherit' }}><i className="fa-solid fa-list-check" style={{ marginRight: '5px' }}></i> Auditoria</Link>
            </nav>
            <div className="header-user">
              <span style={{ marginRight: '10px' }}>Olá,</span>
              <select id="logged-user" defaultValue="Emanuele Cristina Ribeiro Oliveira">
                  <option value="Emanuele Cristina Ribeiro Oliveira">Emanuele Cristina</option>
                  <option value="Daniela Santos Napolitano">Daniela Santos</option>
              </select>
            </div>
          </header>
          
          <div className="main-wrapper">
            <main className="page">{children}</main>
          </div>
        </TicketProvider>
      </body>
    </html>
  );
}