//Generating the URL
let url = 'https://www.amazon.in/s/ref=sr_st_price-asc-rank?keywords=shoes';
const request = require('request');
const cheerio = require('cheerio');

request(url,(error,response,html)=>{
  if(!error && response.statusCode === 200)
  {
    const $ = cheerio.load(html);

		for(let itr=0;itr<4;itr++)
		{
			let id = $('#result_'+itr).each((i,el) =>
			{
				let l = $(el).find("div > a ").attr('href');
							if(l[0]==='/')
							{
								console.log("<br>HURT<br>");
								l = $(el).find("div > div > div > div > a ").attr('href');
								console.log("added"+l);
							}
							else
							{
								console.log(l);
							}
				//a-link-normal s-access-detail-page  s-color-twister-title-link a-text-normal
			});
		}
  }
});

/*
<span class="a-size-base a-color-price s-price a-text-bold">
<span class="currencyINR">&nbsp;&nbsp;</span>505</span>
*/