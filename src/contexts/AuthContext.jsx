import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simulation de connexion basée sur l'email
    let role = 'stagiaire';
    if (email.includes('admin')) role = 'admin';
    else if (email.includes('formateur')) role = 'formateur';

    const mockUser = {
      id: '1',
      name: role === 'stagiaire' ? 'Zaid SAOUSAOU' : role === 'formateur' ? 'Prof. Bouchra EL AKEL' : 'Admin ISMONTIC',
      email,
      role: role,
    };
    setUser(mockUser);
    return role;
  };

  const logout = () => {
    setUser(null);
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