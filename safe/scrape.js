let qi=qp='';
let result = 0;
process.argv.forEach((val, index, array) =>
{
	if(index==2)
			qi = val;
	if(index==3)
			qp = val;
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

let retstr ="{\"results\" : [";
let urla = 'https://www.amazon.in/s/ref=sr_st_price-asc-rank?keywords=';


request(urla+inj,(error,response,html)=>
{
	if(!error && response.statusCode === 200)
	{
		const $ = cheerio.load(html);
		let limit = 20;
		for(let itr=0;itr<limit;itr++)
		{
			let id = $('#result_'+itr+"").each((i,el) =>
			{
				if($(el).html())
				{
					let tempap = $(el).find("div>div>div>a>span").text();				
					let sanap = sana(tempap);			
					sanap = sanap.trim();
					if(sanap<=qp*1.25 && sanap>=0)
					{
						let tempat = $(el).find("h2").text();
						let rgxp = new RegExp(qi, "ig");
						if(tempat.match(rgxp))
						{
							let l = $(el).find("div > a ").attr('href'); 
							if(l[0]!=='/')
							{
								retstr += "{";
								retstr += "\"price\":\""+sanap+"\",";//price
								
								const regex = /\"/gm;
								const subst = `\'`;
								tempat = tempat.replace(regex, subst);
								retstr += "\"title\" : "+"\""+tempat+"\""+",";//title
								retstr += "\"link\" : "+"\""+l+"\",";//url
								retstr += "\"img\" : \""+$(el).find("img").attr("src")+"\"";//image
								retstr += "},";
							}
							else
							{
								++limit;								
							}
						}				
					}				
				}
			});
		}
	}
	
	//in the end
	retstr = retstr.substr(0,retstr.lastIndexOf(","));
	
retstr += "]}";
if(retstr!=="]}")
	console.log(retstr);		
}
);
