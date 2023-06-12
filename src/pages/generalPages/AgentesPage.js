import React, { useState, useEffect } from 'react';

import { MainContainer } from '../../components/Contents/Contents.elements';
import { LogoSeccion } from '../../components/Imgs/logoSeccion.elements';
import Agentes from '../../assets/Agentes';
import DeleteIcon from '../../assets/DeleteIcon';
import EditIcon from '../../assets/EditIcon';

export const AgentesPage = (props) => {
  const [proveedores, setProveedores] = React.useState([
    {
      codigo: 1,
      name: 'Rogrigo',
      proveedor: 'Fhacasa',
    },
    {
      codigo: 2,
      name: 'Roberto',
      proveedor: 'Dos Pinos',
    },
    {
      codigo: 3,
      name: 'Juan',
      proveedor: 'Zar',
    },
    {
      codigo: 4,
      name: 'Albert',
      proveedor: 'Gina',
    },
    {
      codigo: 5,
      name: 'Alicia',
      proveedor: 'Diana',
    },
    {
      codigo: 6,
      name: 'Scarleth',
      proveedor: 'Kity',
    },
    {
      codigo: 7,
      name: 'Elia',
      proveedor: 'Cadena C',
    },
    {
      codigo: 8,
      name: 'Maik',
      proveedor: 'Coca Cola',
    },
    {
      codigo: 9,
      name: 'Eduardo',
      proveedor: 'Monte verde',
    },
  ]);

  const [search, setSearch] = React.useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredProveedores = proveedores;
  if (search !== '') {
    filteredProveedores = proveedores.filter(
      (proveedor) =>
        proveedor.proveedor.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

  return (
    <div>
      <MainContainer active={props.toggle}>
        <div>
          <LogoSeccion src={Agentes} alt="" />
          <h1 className="text-center">Agentes</h1>
          <div className="text-center">
            <button>Nuevo Agente</button>
          </div>
        </div>
        <div style={{ paddingTop: '50px' }}>
          <input
            onChange={(e) => handleChange(e)}
            className="form-control"
            id="myInput"
            type="text"
            placeholder="Search.."
          />
          <table>
            <thead>
              <tr>
                <th>Nombre Agente</th>
                <th>Proveedor</th>
                <th>Opciones</th>
              </tr>
            </thead>

            {filteredProveedores.map((proveedores, index) => (
              <tbody>
                <tr className="table-active">
                  <td key={index}>{proveedores.name}</td>
                  <td key={index}>{proveedores.proveedor}</td>
                  <td className="text-center" style={{ width: '10%' }}>
                    <button>
                      <img src={DeleteIcon} alt="" />
                    </button>
                    <button>
                      <img src={EditIcon} alt="" />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </MainContainer>
    </div>
  );
};
