//Generating the URL
let url = 'https://www.amazon.in/s/ref=sr_st_price-asc-rank?keywords=';
let qi=qp='';
process.argv.forEach((val, index, array) =>
{
	if(index==2)
			qi = val;
	if(index==3)
			qp = val;
});
//set url
url+=qi+" "+qp;

//importing library
const request = require('request');
const cheerio = require('cheerio');

request(url,(error,response,html)=>{
  if(!error && response.statusCode === 200)
  {
    const $ = cheerio.load(html);
    // let id = $('#s-results-list-atf');//html() or text() is working
    let limit = 6;
	for(let itr=0;itr<limit;itr++)
	{
		//console.log("Iteration "+(itr+1)+": "+itr+"<br>");
		//let link = $(el).attr('href');//for links
		let id = $('#result_'+itr+"").each((i,el) =>
		{
			//if not sponsored
			if($(el).html().match(/^((?!\[Sponsored\]|Sponsored).)*$/img))
			{
				// console.log("<br>Image Link "+itr+"= "+$(el).find("img").attr("src"));//img
				console.log($(el).html());
				
				//console.log("<br>Price "+itr+"= "+$("span .currencyINR")[1].text());
			}
			
			
			//only on text .replace(/\s\s+/img,"")
			
		});
	}
  }
});
