const axios = require('axios')
const router = require('express').Router()

router.post('/query', async (req, res) => {
  try {
    const {
      name,
      cep,
      income,
      num_dependents
    } = req.body

    // Cálculo da renda per capita
    const per_capita_income = parseFloat(income) / parseFloat(num_dependents)

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    const address = response.data

    return res.json({
      name,
      address,
      per_capita_income
    })
  } catch(error) {
    console.error(error)
    return res.status(500).send()
  }
})

module.exports = router