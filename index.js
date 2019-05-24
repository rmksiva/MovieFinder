var request = require('request');
var APIPATH = 'http://www.omdbapi.com/?apikey=74024a2';
const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

var printLine = function(n)
{
    console.log(Array(n).fill('-').join(' '));
}
var movie = process.argv[2]
request(`${APIPATH}&t=${movie}`, function (error, response, body) {
  if(error)
  {
    printLine(40);
    console.log('something went wrong');
    printLine(40);
  }
  else
  {
    var resData = JSON.parse(body);
    if(resData["Response"] && resData.Response=='False')
    {
        console.log(resData.Error);
    }
    else
    {
        var ratings = resData.Ratings.filter(item=> item.Source=="Rotten Tomatoes");
        printLine(40);
        console.log("Title : ", resData.Title);
        console.log("Year : ", resData.Year);
        console.log("Actors : ", resData.Actors);
        console.log("Director : ", resData.Director);
        console.log("Rotten Tomatoes Ratings : ", (ratings && ratings.length>0 ? ratings[0].Value : 'Not Available'));
        console.log();
        printLine(40);
    }
  }
});
  