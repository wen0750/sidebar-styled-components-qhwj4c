import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import MainContainer from '../components/Contents/Contents';

//General Pages
import { ClientesPage } from '../pages/generalPages/ClientesPage';
import { ProductosPage } from '../pages/generalPages/ProductosPage';
import { AgentesPage } from '../pages/generalPages/AgentesPage';
import { FacturaPage } from '../pages/generalPages/FacturaPage';

//Admin Pages
import { VentasPage } from '../pages/adminPages/VentasPage';
import { InventarioPage } from '../pages/adminPages/InventarioPage';
import { UsuariosPage } from '../pages/adminPages/UsuariosPage';
import { RolesPage } from '../pages/adminPages/RolesPage';

export const DashboardRoutes = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [activeClick, setActiveClick] = useState(false);

  return (
    <div style={{ backgroundColor: '#4b59f7' }}>
      <Header setToggle={setSidebarToggle} toggle={sidebarToggle} />
      <Sidebar toggle={sidebarToggle} active={setActiveClick} />

      <Routes>
        {/* GeneralPages(Limited) */}
        <Route
          exact
          path="Productos"
          element={<ProductosPage toggle={sidebarToggle} />}
        />
        <Route
          exact
          path="Clientes"
          element={<ClientesPage toggle={sidebarToggle} />}
        />
        <Route
          exact
          path="Agentes"
          element={<AgentesPage toggle={sidebarToggle} />}
        />
        <Route
          exact
          path="Factura"
          element={<FacturaPage toggle={sidebarToggle} />}
        />
        {/* AdminPages(Unlimited) */}
        <Route
          exact
          path="Roles"
          element={<RolesPage toggle={sidebarToggle} />}
        />
        <Route
          exact
          path="Ventas"
          element={<VentasPage toggle={sidebarToggle} />}
        />
        <Route
          exact
          path="Inventario"
          element={<InventarioPage toggle={sidebarToggle} />}
        />
        <Route
          exact
          path="Usuarios"
          element={<UsuariosPage toggle={sidebarToggle} />}
        />
      </Routes>
    </div>
  );
};
