const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://myfoodstory.com/mushroom-pepper-fry-recipe'

/*function get_r() {
alert( */
axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const recipes = []
        
        $('.wprm-recipe-template-cutoutmfs-header', html).each(function() {
            const title = $(this).find('h2').text()
            const summary = $(this).find('span').text()
            recipes.push({
                title,
                summary
            })
        })
        console.log(recipes)
    }).catch(err => console.log(err))
/*)}*/
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))