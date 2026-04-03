import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { DashboardSidebar } from './components/DashboardSidebar';
import { DashboardTopbar } from './components/DashboardTopbar';

// Public pages
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { Presentation } from './pages/Presentation';
import { Filieres } from './pages/Filieres';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Staff } from './pages/Staff';

// Stagiaire pages
import { StagiaireDashboard } from './pages/stagiaire/StagiaireDashboard';
import { StagiaireNotes } from './pages/stagiaire/StagiaireNotes';
import { StagiaireSchedule } from './pages/stagiaire/StagiaireSchedule';
import { StagiaireComplaints } from './pages/stagiaire/StagiaireComplaints';
import { StagiaireElearning } from './pages/stagiaire/StagiaireElearning';
import { StagiaireDocuments } from './pages/stagiaire/StagiaireDocuments';
import { StagiaireAnnouncements } from './pages/stagiaire/StagiaireAnnouncements';
import { StagiaireProfile } from './pages/stagiaire/StagiaireProfile';
import { StagiaireMedical } from './pages/stagiaire/StagiaireMedical';
import { StagiaireAttestations } from './pages/stagiaire/StagiaireAttestations';

// Formateur pages
import { FormateurDashboard } from './pages/formateur/FormateurDashboard';
import { FormateurAbsences } from './pages/formateur/FormateurAbsences';
import { FormateurStatistics } from './pages/formateur/FormateurStatistics';
import { FormateurProfile } from './pages/formateur/FormateurProfile';
import { FormateurNotes } from './pages/formateur/FormateurNotes';

// Admin pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminAttestations } from './pages/admin/AdminAttestations';
import { AdminUsers } from './pages/admin/AdminUsers';
import { AdminAbsenceStats } from './pages/admin/AdminAbsenceStats';
import { AdminSettings } from './pages/admin/AdminSettings';
import { AdminSchedule } from './pages/admin/AdminSchedule';

// NOUVEAU : Director pages
import { DirectorDashboard } from './pages/director/DirectorDashboard';
import { DirectorSchedule } from './pages/director/DirectorSchedule';

// NOUVEAU : Stagiaire Manager pages
import { StagiaireManagerDashboard } from './pages/stagiaire-manager/StagiaireManagerDashboard';
import { StagiaireManagerSchedule } from './pages/stagiaire-manager/StagiaireManagerSchedule';
import { AdminJustifications } from './pages/admin/AdminJustifications';


function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#141820]">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardTopbar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;

  // On récupère le rôle effectif (directeur, responsable_stagiaire, etc.)
  const effectiveRole = user.role === 'admin' ? user.adminSubRole : user.role;

  // Si le rôle de l'utilisateur n'est pas dans la liste autorisée -> Direction l'accueil
  if (!allowedRoles.includes(effectiveRole)) {
    return <Navigate to="/" replace />; 
  }

  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/presentation" element={<Presentation />} />
      <Route path="/filieres" element={<Filieres />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* --- ROUTES (Stagiaire, Formateur--- */}
     
      <Route path="/stagiaire/dashboard" element={<ProtectedRoute allowedRoles={['stagiaire']}><DashboardLayout><StagiaireDashboard /></DashboardLayout></ProtectedRoute>} />
      <Route path="/stagiaire/profile" element={<ProtectedRoute allowedRoles={['stagiaire']}><DashboardLayout><StagiaireProfile /></DashboardLayout></ProtectedRoute>} />
      <Route path="/stagiaire/notes" element={<ProtectedRoute allowedRoles={['stagiaire']}><DashboardLayout><StagiaireNotes /></DashboardLayout></ProtectedRoute>} />
      <Route path="/stagiaire/schedule" element={<ProtectedRoute allowedRoles={['stagiaire']}><DashboardLayout><StagiaireSchedule /></DashboardLayout></ProtectedRoute>} />
      <Route path="/stagiaire/documents" element={<ProtectedRoute allowedRoles={['stagiaire']}><DashboardLayout><StagiaireDocuments /></DashboardLayout></ProtectedRoute>} />
      <Route path="/stagiaire/announcements" element={<ProtectedRoute allowedRoles={['stagiaire']}><DashboardLayout><StagiaireAnnouncements /></DashboardLayout></ProtectedRoute>} />
      <Route path="/stagiaire/complaints" element={<ProtectedRoute allowedRoles={['stagiaire']}><DashboardLayout><StagiaireComplaints /></DashboardLayout></ProtectedRoute>} />
      <Route path="/stagiaire/attestations" element={<ProtectedRoute allowedRoles={['stagiaire']}><DashboardLayout><StagiaireAttestations /></DashboardLayout></ProtectedRoute>} />
      <Route path="/stagiaire/medical" element={<ProtectedRoute allowedRoles={['stagiaire']}><DashboardLayout><StagiaireMedical /></DashboardLayout></ProtectedRoute>} />
      <Route path="/stagiaire/elearning" element={<ProtectedRoute allowedRoles={['stagiaire']}><DashboardLayout><StagiaireElearning /></DashboardLayout></ProtectedRoute>} />

      <Route path="/formateur/dashboard" element={<ProtectedRoute allowedRoles={['formateur']}><DashboardLayout><FormateurDashboard /></DashboardLayout></ProtectedRoute>} />
      <Route path="/formateur/absences" element={<ProtectedRoute allowedRoles={['formateur']}><DashboardLayout><FormateurAbsences /></DashboardLayout></ProtectedRoute>} />
      <Route path="/formateur/notes" element={<ProtectedRoute allowedRoles={['formateur']}><DashboardLayout><FormateurNotes /></DashboardLayout></ProtectedRoute>} />
      <Route path="/formateur/statistics" element={<ProtectedRoute allowedRoles={['formateur']}><DashboardLayout><FormateurStatistics /></DashboardLayout></ProtectedRoute>} />
      <Route path="/formateur/profile" element={<ProtectedRoute allowedRoles={['formateur']}><DashboardLayout><FormateurProfile /></DashboardLayout></ProtectedRoute>} />

 {/* --- 🏛️ ESPACE DIRECTION --- */}
      <Route path="/director/dashboard" element={<ProtectedRoute allowedRoles={['directeur']}><DashboardLayout><DirectorDashboard /></DashboardLayout></ProtectedRoute>} />
      <Route path="/director/schedule" element={<ProtectedRoute allowedRoles={['directeur']}><DashboardLayout><DirectorSchedule /></DashboardLayout></ProtectedRoute>} />
      <Route path="/director/absences-stats" element={<ProtectedRoute allowedRoles={['directeur']}><DashboardLayout><AdminAbsenceStats /></DashboardLayout></ProtectedRoute>} />
      <Route path="/director/users" element={<ProtectedRoute allowedRoles={['directeur']}><DashboardLayout><AdminUsers /></DashboardLayout></ProtectedRoute>} />
      <Route path="/director/settings" element={<ProtectedRoute allowedRoles={['directeur']}><DashboardLayout><AdminSettings /></DashboardLayout></ProtectedRoute>} />

      {/* --- 📋 ESPACE RESPONSABLE STAGIAIRE --- */}
      <Route path="/responsable-stagiaire/dashboard" element={<ProtectedRoute allowedRoles={['responsable_stagiaire']}><DashboardLayout><StagiaireManagerDashboard /></DashboardLayout></ProtectedRoute>} />
      <Route path="/responsable-stagiaire/schedule" element={<ProtectedRoute allowedRoles={['responsable_stagiaire']}><DashboardLayout><StagiaireManagerSchedule /></DashboardLayout></ProtectedRoute>} />
      <Route path="/responsable-stagiaire/justifications" element={<ProtectedRoute allowedRoles={['responsable_stagiaire']}><DashboardLayout><AdminJustifications /></DashboardLayout></ProtectedRoute>} />
      <Route path="/responsable-stagiaire/attestations" element={<ProtectedRoute allowedRoles={['responsable_stagiaire']}><DashboardLayout><AdminAttestations /></DashboardLayout></ProtectedRoute>} />
      <Route path="/responsable-stagiaire/absences-stats" element={<ProtectedRoute allowedRoles={['responsable_stagiaire']}><DashboardLayout><AdminAbsenceStats /></DashboardLayout></ProtectedRoute>}/>
      

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}