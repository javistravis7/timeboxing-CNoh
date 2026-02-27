import { useState } from 'react'
import './App.css'

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [currentView, setCurrentView] = useState('dashboard');

  
  const handleLogin = () => {
    
    setIsAuthenticated(true);
    setCurrentView('dashboard'); 
  };

 
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  
  const LoginView = () => (
    <div className="login-overlay">
      <div className="login-panel">
        <h1 className="brand-title">TimeBoxing</h1>
        <p className="login-subtitle">Ingresa tus credenciales para continuar</p>
        <div className="input-group">
          <label>Usuario</label>
          <input type="text" placeholder="ej. usuario@correo.com" />
        </div>
        <div className="input-group">
          <label>Contraseña</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <button className="btn-primary" onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    </div>
  );

  

  const Navbar = () => (
    <nav className="main-nav">
      <span className="nav-logo">TimeBoxing</span>
      <div className="nav-links">
        <button 
          className={currentView === 'dashboard' ? 'active' : ''} 
          onClick={() => setCurrentView('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={currentView === 'planificador' ? 'active' : ''} 
          onClick={() => setCurrentView('planificador')}
        >
          Planificador
        </button>
      </div>
      <button className="btn-logout" onClick={handleLogout}>Cerrar Sesión</button>
    </nav>
  );

  const DashboardView = () => (
    <div className="main-content">
      <header className="content-header">
        <h1>Panel de Control</h1>
        <p>Resumen de tu productividad de hoy</p>
      </header>
      <div className="dashboard-grid">
        <div className="stat-card">
          <h3>Bloques Completados</h3>
          <p className="stat-number">8</p>
          <span className="stat-change positive">+2 vs. ayer</span>
        </div>
        <div className="stat-card">
          <h3>Tiempo de Enfoque</h3>
          <p className="stat-number">5h 15m</p>
          <span className="stat-change negative">-30m vs. ayer</span>
        </div>
        <div className="stat-card highlighted">
          <h3>Próximo Bloque</h3>
          <p className="stat-text">Desarrollo Frontend React</p>
          <span className="stat-time">en 15 minutos</span>
        </div>
      </div>
    </div>
  );

  const PlanificadorView = () => (
    <div className="main-content">
      <header className="content-header">
        <h1>Tu Planificación</h1>
        <p>Gestiona tus bloques de tiempo</p>
      </header>
      <div className="planner-container">
        <div className="time-entry active-entry">
          <div className="time-marker">09:00 - 11:00</div>
          <div className="entry-details">
            <h4>Reunión de Sincronización</h4>
            <p>Equipo de Producto</p>
          </div>
        </div>
        <div className="time-entry">
          <div className="time-marker">11:15 - 13:00</div>
          <div className="entry-details">
            <h4>Deep Work: Coding React</h4>
            <p>Implementación de Vistas</p>
          </div>
        </div>
        <div className="time-entry">
          <div className="time-marker">13:00 - 14:00</div>
          <div className="entry-details">
            <h4>Almuerzo</h4>
          </div>
        </div>
        <button className="btn-secondary">+ Añadir Nuevo Bloque</button>
      </div>
    </div>
  );

  return (
    <div className="app-container">
      {

      }
      {!isAuthenticated ? (
        <LoginView />
      ) : (
        <>
          <Navbar />
          <main className="app-main-content">
            {currentView === 'dashboard' && <DashboardView />}
            {currentView === 'planificador' && <PlanificadorView />}
          </main>
        </>
      )}
    </div>
  );
}

export default App;