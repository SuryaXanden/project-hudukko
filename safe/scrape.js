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
	let retstr = "";
	retstr +="{\"result\" : [";

    let limit = 6;
	for(let itr=0;itr<limit;itr++)
	{
		//console.log("Iteration "+(itr+1)+": "+itr+"<br>");
		
		//let link = $(el).attr('href');//for links
		let id = $('#result_'+itr+"").each((i,el) =>
		{
			if($(el).html())
			{
				retstr +="{";
					//title
						retstr +="\"title\" : "+"\""+$(el).find("h2").text()+"\""+",";
					//img
						retstr +="\"img\" : \""+$(el).find("img").attr("src")+"\",";
					//price
						retstr +="\"price\" : "+"\""+$(el).find("div > div > a > span").text().match(/\d+/img)+"\""+",";
					//link
						let l = $(el).find("div > a ").attr('href');
						if(l[0]==='/')
						{
							let xyz = l.substr(l.indexOf('&url='),l.length);
							retstr +="\"link\" : "+"\""+xyz+"\""+"";
						}
						else
						{
							retstr +="\"link\" : "+"\""+$(el).find("div > a ").attr('href')+"\""+"";
						}
				retstr +="},";
				//console.log("<br>Price "+itr+"= "+$("span .currencyINR")[1].text());
			//only on text .replace(/\s\s+/img,"")
			}		
		});	
	}
	let ret = retstr.substr(0,retstr.length-1);
	retstr = ret;
	retstr +="]}";
	console.log(retstr);
  }
});
