import {
  SidebarContainer,
  SidebarMenuContainer,
  StyledNavLink,
  LogoContainer,
  LogoOut,
} from './Sidebar.elements';

import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Sidebar(props) {
  var items = [
    'Productos',
    'Clientes',
    'Agentes',
    'Factura',
    'Roles',
    'Ventas',
    'Inventario',
    'Usuarios',
  ];
  var pages = [
    'Productos',
    'Clientes',
    'Agentes',
    'Factura',
    'Roles',
    'Ventas',
    'Inventario',
    'Usuarios',
  ];
  var icons = [
    'bx bx-grid-alt nav_icon',
    'bx bx-user nav_icon',
    'bx bx-message-square-detail nav_icon',
    'bx bx-user nav_icon',
    'bx bx-grid-alt nav_icon',
    'bx bx-message-square-detail nav_icon',
    'bx bx-user nav_icon',
    'bx bx-grid-alt nav_icon',
  ];
  const [isActive, setActive] = useState(null);

  const toggleClass = (index) => {
    setActive(index);
  };
  const navigate = useNavigate();
  const logout = () => {
    {
      navigate('/auth'),
        {
          replace: true,
        };
    }
  };
  return (
    <SidebarContainer act={props.toggle}>
      <SidebarMenuContainer>
        <div>
          <LogoContainer id="item" to="/">
            <i className="bx bx-layer nav_logo-icon"> MOSH</i>
          </LogoContainer>

          {items.map(function (item, index) {
            var strClass = '';
            if (isActive == index) {
              console.log(index);
              strClass = 'active';
            } else {
              strClass = 'Noactive';
            }
            return (
              <StyledNavLink
                to={'/' + pages[index]}
                className={strClass}
                key={index}
                onClick={() => toggleClass(index)}
              >
                <i className={icons[index]} />
                <span>{item}</span>
              </StyledNavLink>
            );
          })}
        </div>
        <LogoOut to="auth" onClick={logout}>
          <i className="bx bx-bookmark nav_icon" />
          <span>LogOut</span>
        </LogoOut>
      </SidebarMenuContainer>
    </SidebarContainer>
  );
}
