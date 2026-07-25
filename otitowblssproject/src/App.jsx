import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import CourseMaterials from "./pages/CourseMaterials";
import Settings from "./pages/Settings";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/AdminRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import AddCourse from "./pages/AddCourse";
import ManageCourses from "./pages/ManageCourses";
import AdminStudents from "./pages/AdminStudents";
import AdminMaterials from "./pages/AdminMaterials";
import AdminChat from "./pages/AdminChat";
import AdminSettings from "./pages/AdminSettings";
import AdminAnnouncements from "./pages/AdminAnnouncements";
import EditCourse from "./pages/EditCourse";
import UploadMaterial from "./pages/UploadMaterial";
import Announcement from "./pages/Announcement";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      <Route
  path="/courses"
  element={
    <ProtectedRoute>
      <Courses />
    </ProtectedRoute>
  }
/>
      <Route
  path="/chat"
  element={
    <ProtectedRoute>
      <Chat />
    </ProtectedRoute>
  }
/>
      <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

  <Route
  path="/settings"
  element={
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  }
/>

<Route
  path="/announcement"
  element={
    <ProtectedRoute>
      <Announcement />
    </ProtectedRoute>
  }
/>


     <Route
  path="/course-materials/:id"
  element={
    <ProtectedRoute>
      <CourseMaterials />
    </ProtectedRoute>
  }
/>
      <Route
  path="/admin-dashboard"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>
<Route
  path="/add-course"
  element={
    <AdminRoute>
      <AddCourse />
    </AdminRoute>
  }
/>
<Route
  path="/manage-courses"
  element={
    <AdminRoute>
      <ManageCourses />
    </AdminRoute>
  }
/>

 <Route
  path="/admin-students"
  element={
    <AdminRoute>
      <AdminStudents />
    </AdminRoute>
  }
/>

<Route
  path="/admin-materials"
  element={
    <AdminRoute>
      <AdminMaterials />
    </AdminRoute>
  }
/>

<Route
  path="/admin-chat"
  element={
    <AdminRoute>
      <AdminChat />
    </AdminRoute>
  }
/>

<Route
  path="/admin-settings"
  element={
    <AdminRoute>
      <AdminSettings />
    </AdminRoute>
  }
/>

<Route
  path="/admin-announcements"
  element={
    <AdminRoute>
      <AdminAnnouncements />
    </AdminRoute>
  }
/>
<Route
  path="/edit-course/:id"
  element={
    <AdminRoute>
      <EditCourse />
    </AdminRoute>
  }
/>
<Route
  path="/admin/upload-material"
  element={
    <AdminRoute>
      <UploadMaterial />
    </AdminRoute>
  }
/>
    </Routes>
  );
}

export default App;