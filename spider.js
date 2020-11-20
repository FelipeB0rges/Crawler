var request = require('request')
var cheerio = require('cheerio')


request('https://www.imdb.com/chart/moviemeter', function (err, res, body) {

    if (err) console.log('Erro:' + err)

    var $ = cheerio.load(body);

    $('.lister-list tr').each(function () {
        var title = $(this).find('.titleColumn a').text().trim();
        var rating = $(this).find('.imdbRating strong').text().trim();

        let melhor = 0;

        if (rating > melhor) {
            melhor = (`Melhor filme -- Titulo :${title}  Nota : ${rating}`)
        }

        console.log(melhor)
    });

});