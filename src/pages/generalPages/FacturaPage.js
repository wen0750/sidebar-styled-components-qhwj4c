import React, { useState, useEffect } from 'react';
import { MainContainer } from '../../components/Contents/Contents.elements';
import { LogoSeccion } from '../../components/Imgs/logoSeccion.elements';
import Factura from '../../assets/Factura';
import { expresiones } from '../../helpers/expresions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

const chipStyle = {
  fontSize: '16px',
  width: '425px',
  height: '39px',
  marginRight: '36px',
  display: 'inline-block',
  lineHeight: '24px',
};

export const FacturaPage = (props) => {
  const [email, setEmail] = useState({ field: '', valid: null });
  return (
    <MainContainer active={props.toggle}>
      <Button variant="contained">Hello World</Button>

      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </MainContainer>
  );
};
