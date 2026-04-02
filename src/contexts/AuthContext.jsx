import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // 1. Initialisation : Récupération de la session existante
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 2. La fonction Login (appelée après le succès d'Axios)
  const login = (userData, token) => {
    // Mise à jour de l'état global React
    setUser(userData); 
    
    // Sauvegarde de l'objet utilisateur complet (incluant adminSubRole)
    localStorage.setItem('user', JSON.stringify(userData));
    
    if (token) {
      localStorage.setItem('token', token);
    }
    
    // --- LOGIQUE DE RÔLE MISE À JOUR ---
    // On définit le rôle qui servira à la navigation et aux ProtectedRoutes
    let effectiveRole = 'stagiaire';
    
    if (userData.role === 'admin') {
      // Pour un admin, on utilise son sous-rôle (directeur ou responsable_stagiaire)
      //
      effectiveRole = userData.adminSubRole; 
    } else {
      // Pour les autres, on utilise le rôle de base (formateur ou stagiaire)
      //
      effectiveRole = userData.role;
    }
    
    // On stocke ce rôle précis pour le récupérer au rafraîchissement
    localStorage.setItem('role', effectiveRole);
    
    // On retourne ce rôle pour que Login.jsx sache où rediriger
    return effectiveRole;
  };

  // 3. Déconnexion complète
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
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
}