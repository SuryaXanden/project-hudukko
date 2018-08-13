let qi=qp='';
let result = 0;
process.argv.forEach((val, index, array) =>
{
	if(index==2)
			qi = val;
	if(index==3)
		if(val!=0)
			qp = val;
		else
			qp = 0;
});
const request = require('request');
const cheerio = require('cheerio');

function sana(tempap)
{
	let tempaps = "";
	for(let tempapch=0;tempapch<tempap.length;tempapch++)
	{
		if((tempap[tempapch]>=0 && tempap[tempapch]<=9) || (tempap[tempapch]=="," || tempap[tempapch]=="." || tempap[tempapch]=="-" || tempap[tempapch]==" " || tempap[tempapch]=="(" || tempap[tempapch]=="[" || tempap[tempapch]=="<"))
		{
			if(tempap[tempapch] == ",")
			{
				continue;
			}
			if(tempap[tempapch] == "-" || tempap[tempapch]=="(" || tempap[tempapch]=="[" || tempap[tempapch]=="<")
			{
				break;
			}
			tempaps += tempap[tempapch];							
		}
	}
	return tempaps;
}

let inj = qi+" "+qp;

function amazon()
{
	let urla = 'https://www.amazon.in/s/ref=sr_st_price-asc-rank?keywords=';

	request(urla+inj,(error,response,html)=>
	{
		if(!error && response.statusCode === 200)
		{
			const $ = cheerio.load(html);
			let limit = 50;
			for(let itr=0;itr<limit;itr++)
			{
				let id = $('#result_'+itr+"").each((i,el) =>
				{
					if($(el).html())
					{
						
						let tempap = $(el).find("div>div>div>a>span").text();				
						let sanap = sana(tempap);			
						sanap = sanap.trim();
						if(sanap<=qp*1.15 && sanap>=0)
						{
							let tempat = $(el).find("h2").text();
							let rgxp = new RegExp(qi, "ig");
							if(tempat.match(rgxp))
							{
								let l = $(el).find("div > a ").attr('href'); 
								if(l[0]!=='/')
								{
	retstr = "<div id=\"results\" class=\"row\" style=\"width:100%;\">";
									retstr += "<div class=\"col-xs-3\" style=\"background-color:rgba(1,1,1,30%);\">";
									retstr += "<a href=\""+l+"\">";
											retstr += "<img src=\""+$(el).find("img").attr("src")+"\" style=\"width:128px;border-radius:32px;height:128px;\">";
												
											const regex = /\"\'/gm;
											const subst = `\'`;
											tempat = tempat.replace(regex, subst);
												
											retstr += "<br><span id=\"title\" style=\"float:left\">"+tempat.substr(0,11)+"...</span>";
											retstr += "<span id=\"price\" style=\"float:right\">Rs&Tab;"+sanap+"</span>";
									retstr += "</a></div>";
									console.log(retstr);
								}
							}
						}
					}
				});
			}
		}
	});
}

amazon();



console.log("</div>");