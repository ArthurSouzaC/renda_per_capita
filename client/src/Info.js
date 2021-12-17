import { useState } from 'react'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Button
} from '@mui/material'

import {
  Person as PersonIcon,
  Home as HomeIcon,
  Paid as PaidIcon
} from '@mui/icons-material'

// Visualização da resposta
export default function Info() {
  const navigate = useNavigate()
  const location = useLocation()
  const [state, setState] = useState(location.state)

  // Retornar ao formulário inicial caso a rota tenha sido acessada sem submissão de dados
  if(!state) return <Navigate to="/" />
  if(state.address.erro) return <Navigate to="/" />

  // Construção da string de endereço
  function Address() {
    if(!state.address.complemento) {
      return <> {`${state.address.logradouro}, ${state.address.bairro} - ${state.address.localidade}/${state.address.uf}`} </>
    }

    return <> {`${state.address.logradouro}, ${state.address.bairro}, ${state.address.complemento} - ${state.address.localidade}/${state.address.uf}`} </>
  }
  
  return (
    <Box sx={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <TableContainer sx={{ width: '80%' }} component={Paper}>
        <Table>
          <TableBody>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bolder' }}>
                  <Typography color="green">
                    <PersonIcon sx={{ float: 'left', mr: '1rem' }}/>
                    Nome
                  </Typography>
                </TableCell>
                <TableCell>{state.name || 'não informado'}</TableCell>
              </TableRow>

            <TableRow>
              <TableCell sx={{ fontWeight: 'bolder' }}>
                <Typography color="green">
                    <HomeIcon sx={{ float: 'left', mr: '1rem'  }}/>
                    Endereço
                </Typography>
              </TableCell>
              <TableCell><Address /></TableCell>
            </TableRow>

            <TableRow>
              <TableCell sx={{ fontWeight: 'bolder' }}>
                <Typography color="green">
                  <PaidIcon sx={{ float: 'left', mr: '1rem'  }}/>
                  Renda per capita
                </Typography>
              </TableCell>
              <TableCell>R$ {state.per_capita_income.toFixed(2)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button sx={{ mt: '2rem' }} variant="contained" color="success" onClick={() => navigate('/')}> Realizar outra consulta </Button>
    </Box>
  )
}