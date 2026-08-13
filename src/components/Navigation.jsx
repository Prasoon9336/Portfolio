import React, { useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'weather', label: 'Weather' },
  { id: 'Dictionary', label: 'Dictionary' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="nav-inner">
        <button className="nav-brand" onClick={() => { onNavigate('home'); setMenuOpen(false); }}>
          &lt;DevCoder /&gt;
        </button>
        <button className="nav-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
          <span className="nav-toggle-icon" />
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => {
                onNavigate(item.id);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}