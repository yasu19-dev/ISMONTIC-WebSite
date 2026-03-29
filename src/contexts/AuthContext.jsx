import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 1. Initialisation : On vérifie s'il y a déjà un utilisateur sauvegardé dans le navigateur
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 2. La vraie fonction Login (qui sera appelée par Login.jsx APRES la requête Axios)
  const login = (userData, token) => {
    setUser(userData); // Met à jour l'état global React
    
    // Sauvegarde dans le navigateur pour ne pas être déconnecté au rafraîchissement
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
    
    // On extrait le rôle pour le retourner si besoin
    const roleCode = userData.roles && userData.roles.length > 0 ? userData.roles[0].code : 'stagiaire';
    localStorage.setItem('role', roleCode);
    
    return roleCode;
  };

  // 3. Déconnexion propre
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}