import React, { useState, useEffect } from 'react';
import { MainContainer } from '../../components/Contents/Contents.elements';
import { LogoSeccion } from '../../components/Imgs/logoSeccion.elements';
import Roles from '../../assets/Roles';
import DeleteIcon from '../../assets/DeleteIcon';
import EditIcon from '../../assets/EditIcon';

export const ClientesPage = (props) => {
  const [clientes, setClientes] = React.useState([
    {
      codigo: 1,
      name: 'Ricardo',
    },
    {
      codigo: 2,
      name: 'Maye',
    },
    {
      codigo: 3,
      name: 'Roy',
    },
    {
      codigo: 4,
      name: 'Kendra',
    },
    {
      codigo: 5,
      name: 'Yeilyn',
    },
    {
      codigo: 6,
      name: 'Esteban',
    },
    {
      codigo: 7,
      name: 'Elvira',
    },
    {
      codigo: 8,
      name: 'Pedro',
    },
    {
      codigo: 9,
      name: 'Eduardo',
    },
  ]);

  const [search, setSearch] = React.useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredClientes = clientes;
  if (search !== '') {
    filteredClientes = clientes.filter(
      (cliente) =>
        cliente.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  }

  return (
    <div>
      <MainContainer active={props.toggle}>
        <div className="row">
          <LogoSeccion src={Roles} alt="" className="text-center" />
          <h1 className="text-center">Clientes</h1>
          <div className="text-center">
            <button>Nuevo Cliente</button>
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

            {filteredClientes.map((product) => (
              <tbody>
                <tr class="table-active">
                  <td key={product.name}>{product.name}</td>
                  <td key={product.proveedor}>{product.proveedor}</td>
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
