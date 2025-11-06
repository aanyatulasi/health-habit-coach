import { Link } from "react-router-dom";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app">
      <header className="topbar">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/coach">Coach</Link>
          <Link to="/ui">UI</Link>
        </nav>
      </header>
      <main className="content">{children}</main>
    </div>
  );
}
