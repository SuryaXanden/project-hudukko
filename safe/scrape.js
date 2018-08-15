let result = 0;
let qi=qp='';
process.argv.forEach((val, index, array) =>
{
	if(index==2)
			qi = val;
	if(index==3)
		if(val!=0)
			qp = val;
});

const request = require('request');
const cheerio = require('cheerio');

function gen()
{
	return(Math.floor(Math.random()*255));
}

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
									retstr += "<div class=\"col-xs-3\" style=\"background-color:rgba("+gen()+","+gen()+","+gen()+","+"60%);\">";
									retstr += "<a href=\""+l+"\">";
											retstr += "<img src=\""+$(el).find("img").attr("src")+"\" style=\"width:128px;border-radius:32px;height:128px;\">";
												
											const regex = /\"\'/gm;
											const subst = `\'`;
											tempat = tempat.replace(regex, subst);
												
											retstr += "<br><span id=\"title\" style=\"float:left\">"+tempat.substr(0,11)+"...</span>";
											retstr += "<span id=\"price\" style=\"float:right\">Rs&Tab;"+sanap+"</span>";
									retstr += "</a></div>";
									console.log(retstr);
									result++;
								}
							}
						}
					}
				});
			}
		}
	});
}

function snapdeal()
{
	let urls = 'https://www.snapdeal.com/search?sort=rlvncy&keyword=';

	request(urls+inj,(error,response,html)=>
	{
		if(!error && response.statusCode === 200)
		{
			const $ = cheerio.load(html);
			
			//image
			var img = $("#products").map(function()
			{
				return $(this).find("img").map(function()
				{
					return $(this).attr("src");
				}).get();        
			}).get();
			
			//title
			var tit = $("#products").map(function()
			{
				return $(this).find("img").map(function()
				{
					return $(this).attr("title");
				}).get();        
			}).get();
			
			//urls
			var links = $("#products").map(function()
			{
				return $(this).find("a").map(function()
				{
					return $(this).attr("href");
				}).get();        
			}).get();
				
			//price
			var price = $("#products").map(function()
			{
				return $(this).find("span").map(function()
				{
					return $(this).attr("data-price");
				}).get();        
			}).get();
				
			var link = new Set(links);
			
			var getEntriesArry = link.entries();
			
			let dmp = [];
			let l = String(getEntriesArry.next().value);		
				l = l.substring(0,l.indexOf(","));
			dmp.push(l);
			 l = String(getEntriesArry.next().value);		
				l = l.substring(0,l.indexOf(","));
			dmp.push(l);
			 l = String(getEntriesArry.next().value);		
				l = l.substring(0,l.indexOf(","));
			dmp.push(l);
			 l = String(getEntriesArry.next().value);		
				l = l.substring(0,l.indexOf(","));
			dmp.push(l);
			
			let retstr = "";
			for(var i=0; i<4; i++)
			{
				let rgxp = new RegExp(qi, "ig");				
				if((price[i]<=qp*1.15 && price[i]>=0) && tit[i].match(rgxp))
				{
					retstr = "<div id=\"results\" class=\"row\" style=\"width:100%;\">";
						retstr += "<div class=\"col-xs-3\" style=\"background-color:rgba("+gen()+","+gen()+","+gen()+","+"60%);\">";
							retstr += "<a href=\""+dmp[i]+"\">";//url				
								retstr += "<img src=\""+img[i]+"\" style=\"width:128px;border-radius:32px;height:128px;\">";//image								
								retstr += "<br><span id=\"title\" style=\"float:left\">"+String(tit[i]).substring(0,11)+"...</span>";//title
								retstr += "<span id=\"price\" style=\"float:right\">Rs&Tab;"+price[i]+"</span>";
					retstr += "</a></div>";
					console.log(retstr);
					result++;
				}
			}
		}
	});
}

function flipkart()
{
	let urlf = 'https://www.flipkart.com/search?sort=relevance&q=';

	request(urlf+inj,(error,response,html)=>
	{
		if(!error && response.statusCode === 200)
		{
			const $ = cheerio.load(html);			
			
			//title
			var title = $("#container > div > div > div > div > div > div > div > div > div > div > a").map(function()
			{
				return $(this).map(function()
				{
					let tit = $(this).attr("title");//Title
					if(tit !== undefined)
						return tit;
				}).get();        
			}).get();

			//url
			var url = $("#container > div > div > div > div > div > div > div > div > div > div > a").map(function()
			{
				return $(this).map(function()
				{
					let lnk = $(this).attr("href");//link
					if(lnk !== undefined || lnk != "")
						return "https://www.flipkart.com"+lnk.trim();
				}).get();        
			}).get();
			
			var link = new Set(url);
			
			var getEntriesArry = link.entries();
			
			let dmp = [];
			let l = String(getEntriesArry.next().value);		
				l = l.substring(0,l.indexOf(","));
			 l = String(getEntriesArry.next().value);		
				l = l.substring(0,l.indexOf(","));
			 l = String(getEntriesArry.next().value);		
				l = l.substring(0,l.indexOf(","));
			 l = String(getEntriesArry.next().value);		
				l = l.substring(0,l.indexOf(","));
			dmp.push(l);
			 l = String(getEntriesArry.next().value);		
				l = l.substring(0,l.indexOf(","));
			dmp.push(l);
			 l = String(getEntriesArry.next().value);		
				l = l.substring(0,l.indexOf(","));
			dmp.push(l);
			 l = String(getEntriesArry.next().value);		
				l = l.substring(0,l.indexOf(","));
			dmp.push(l);

			
			//price
			var price = $("#container > div > div > div > div > div > div > div > div > div > div > a").map(function()
			{
				return $(this).map(function()
				{
					let p = $(this).first().text();//Price
					if(p.length>1)
					{
						return p.substring(1,p.length).trim().replace(",","");
					}
				}).get();        
			}).get();
			
			let p = [];
			for(let i=3;i<11;i++)
			{
				if( i%2 == 0 )
				{
					if(price[i].indexOf("₹")>-1)
					{
						let san = price[i].substring(0,price[i].indexOf("₹"));
						p.push(san);
					}
					else
					{
						p.push(price[i]);
					}
				}
			}

			let retstr = "";
			for(var i=0; i<4; i++)
			{
				let rgxp = new RegExp(qi, "ig");				
				if((p[i]<=qp*1.15 && p[i]>=0) && title[i].match(rgxp))
				{
					retstr = "<div id=\"results\" class=\"row\" style=\"width:100%;\">";
						retstr += "<div class=\"col-xs-3\" style=\"background-color:rgba("+gen()+","+gen()+","+gen()+","+"60%);\">";
							retstr += "<a href=\""+dmp[i]+"\">";//url				
								retstr += "<img src=\"https://www.flipkart.com/favicon.ico\" style=\"width:128px;border-radius:32px;height:128px;\">";//image								
								retstr += "<br><span id=\"title\" style=\"float:left\">"+String(title[i]).substring(0,11)+"...</span>";//title
								retstr += "<span id=\"price\" style=\"float:right\">Rs&Tab;"+p[i]+"</span>";
					retstr += "</a></div>";
					console.log(retstr);
					result++;
				}
			}	
		}
	});
}


function call_all()
{
	amazon();
	snapdeal();
	flipkart();
}

call_all();