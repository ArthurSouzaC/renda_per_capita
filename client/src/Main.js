import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Grid
} from '@mui/material'

import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

import API_BASE_URL from './config'

// Validação de campos do formulário
const validationSchema = Yup.object({
  name: Yup
    .string()
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Insira um nome válido"
    ),
  cep: Yup
    .string()
    .matches(/^[0-9]+$/, "Insira somente os números")
    .length(8, "Insira um CEP válido")
    .required("Este campo é obrigatório"),
  income: Yup
    .number()
    .typeError("Insira somente números. Use ponto ao invés de vírgula para decimais.")
    .required("Este campo é obrigatório"),
  num_dependents: Yup
    .number()
    .integer("Insira somente números inteiros")
    .typeError("Insira somente números inteiros")
    .required("Este campo é obrigatório"),
})

// Fomulário de consulta
export default function Main() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: "",
      cep: "",
      income: "",
      num_dependents: "",
    },
  
    validationSchema: validationSchema,
  
    onSubmit: async (data) => {
      // Submissão dos dados ao backend
      const response = await axios.post(`${API_BASE_URL}/query`, data)
      
      navigate('/info', { state: response.data })
    }
  })

  return (
    <Box
      fullWidth
      component="form"
      onSubmit={formik.handleSubmit}
    >
      <Grid container display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
        <Grid container item xs={12} sm={10} md={8} display="flex" alignItems="center" justifyContent="center" >
          <Paper sx={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '2rem', paddingBottom: '2rem', width: '100%' }}>
      
            <Grid container textAlign="center">
              <Grid item xs={1}/>

              <Grid item xs={10}>
                <Typography sx={{ mb: '2rem', fontWeight: 'bolder' }} variant="h4">
                  Cálculo de renda per capita
                </Typography>
              </Grid>

              <Grid item xs={1}/>
            </Grid>

            <Grid container>
              <Grid item sm={1} md={2}/>

              <Grid item xs={12} sm={10} md={8}>
                <TextField 
                  sx={{ mt: '1rem' }} 
                  fullWidth
                  id="name" 
                  label="Nome completo" 
                  variant="outlined" 
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>

              <Grid item sm={1} md={2}/>
            </Grid>

            <Grid container>
              <Grid item sm={1} md={2}/>

              <Grid item xs={12} sm={10} md={8}>
                <TextField 
                  sx={{ mt: '1rem' }} 
                  fullWidth
                  id="cep" 
                  label="CEP" 
                  variant="outlined" 
                  name="cep"
                  required 
                  value={formik.values.cep}
                  onChange={formik.handleChange}
                  error={formik.touched.cep && Boolean(formik.errors.cep)}
                  helperText={formik.touched.cep && formik.errors.cep}
                />
              </Grid>

              <Grid item sm={1} md={2}/>
            </Grid>

            <Grid container>
              <Grid item sm={1} md={2}/>

              <Grid item xs={12} sm={10} md={8}>
                <TextField 
                  sx={{ mt: '1rem' }} 
                  fullWidth
                  id="income" 
                  label="Renda mensal" 
                  variant="outlined" 
                  name="income" 
                  InputProps={{ 
                    startAdornment: <InputAdornment position="start"> <Typography color="black"> R$ </Typography> </InputAdornment>,
                  }}
                  required 
                  value={formik.values.income}
                  onChange={formik.handleChange}
                  error={formik.touched.income && Boolean(formik.errors.income)}
                  helperText={formik.touched.income && formik.errors.income}
                />
              </Grid>

              <Grid item sm={1} md={2}/>
            </Grid>

            <Grid container>
              <Grid item sm={1} md={2}/>

              <Grid item xs={12} sm={10} md={8}>
                <TextField 
                  sx={{ mt: '1rem' }} 
                  fullWidth
                  id="num_dependents" 
                  label="Número de dependentes" 
                  variant="outlined" 
                  name="num_dependents"
                  required 
                  value={formik.values.num_dependents}
                  onChange={formik.handleChange}
                  error={formik.touched.num_dependents && Boolean(formik.errors.num_dependents)}
                  helperText={formik.touched.num_dependents && formik.errors.num_dependents}
                />
              </Grid>

              <Grid item sm={1} md={2}/>
            </Grid>

            <Grid container>
              <Grid item sm={1} md={4}/>

              <Grid item xs={12} sm={10} md={4}>
                <Button 
                  sx={{ mt: '2rem'}} 
                  fullWidth
                  variant="contained"
                  color="success"
                  type="submit"
                >
                  Calcular renda
                </Button>
              </Grid>

              <Grid item sm={1} md={4}/>
            </Grid>
          </Paper>
          </Grid>
      </Grid>
    </Box>
  );
}