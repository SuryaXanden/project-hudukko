const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const upload = multer();
const app = express();
const expressValidator = require('express-validator');
let result = [];
//code
let inj,qp,qi;
function assign(i,p)
{
	qi = i;
	qp = p;
	inj = qi+" "+qp;
}

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
						let tempap = $(el).find("div > div > div > a > span").text();				
						let sanap = sana(tempap).trim();			
						if(sanap<=qp*1.15 && sanap>=0)
						{
							let tempat = $(el).find("h2").text();
							let l = $(el).find("div > a ").attr('href'); 
							if(l[0]!=='/')
							{
								retstr = "<div id=\"results\" class=\"row\" style=\"width:100%;\">";
								retstr += "<div class=\"col-xs-4\" style=\"background-color:rgba("+gen()+","+gen()+","+gen()+","+"60%);\">";
								retstr += "<a target=\"_blank\" href=\""+l+"\">";
										retstr += "<img src=\""+$(el).find("img").attr("src")+"\" style=\"width:30%;border-radius:32px;height:16%;\">";
											
										const regex = /\"\'/gm;
										const subst = `\'`;
										tempat = tempat.replace(regex, subst);
											
										retstr += "<br><span id=\"title\" style=\"float:left\">"+tempat.substr(0,11)+"...</span>";
										retstr += "<span id=\"price\" style=\"float:right\">Rs&Tab;"+sanap+"</span>";
								retstr += "</a></div>";
								return(retstr);
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
			
			var img = $("#products").map(function()
			{
				return $(this).find("img").map(function()
				{
					return $(this).attr("src");
				}).get();        
			}).get();
			
			var tit = $("#products").map(function()
			{
				return $(this).find("img").map(function()
				{
					return $(this).attr("title");
				}).get();        
			}).get();
			
			var links = $("#products").map(function()
			{
				return $(this).find("a").map(function()
				{
					return $(this).attr("href");
				}).get();        
			}).get();
				
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
				if((price[i]<=qp*1.15 && price[i]>=0))
				{
					retstr = "<div id=\"results\" class=\"row\" style=\"width:100%;\">";
						retstr += "<div class=\"col-xs-4\" style=\"background-color:rgba("+gen()+","+gen()+","+gen()+","+"60%);\">";
							retstr += "<a target=\"_blank\" href=\""+dmp[i]+"\">";//url				
								retstr += "<img src=\""+img[i]+"\" style=\"width:30%;border-radius:32px;height:16%;\">";//image								
								retstr += "<br><span id=\"title\" style=\"float:left\">"+String(tit[i]).substring(0,11)+"...</span>";//title
								retstr += "<span id=\"price\" style=\"float:right\">Rs&Tab;"+price[i]+"</span>";
					retstr += "</a></div>";
					return(retstr);
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
			
			var title = $("#container > div > div > div > div > div > div > div > div > div > div > a").map(function()
			{
				return $(this).map(function()
				{
					let tit = $(this).attr("title");//Title
					if(tit !== undefined)
						return tit;
				}).get();        
			}).get();

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
				if((p[i]<=qp*1.15 && p[i]>=0))
				{
					retstr = "<div id=\"results\" class=\"row\" style=\"width:100%;\">";
						retstr += "<div class=\"col-xs-4\" style=\"background-color:rgba("+gen()+","+gen()+","+gen()+","+"60%);\">";
							retstr += "<a target=\"_blank\" href=\""+dmp[i]+"\">";//url				
								retstr += "<img src=\"https://www.flipkart.com/favicon.ico\" style=\"width:30%;border-radius:32px;height:16%;\">";//image								
								retstr += "<br><span id=\"title\" style=\"float:left\">"+String(title[i]).substring(0,11)+"...</span>";//title
								retstr += "<span id=\"price\" style=\"float:right\">Rs&Tab;"+p[i]+"</span>";
					retstr += "</a></div>";
					return(retstr);
				}
			}	
		}
	});
}

let op = async function call_all()
{
	await snapdeal();
	await amazon();
	await flipkart();
}
//end

// app.set('view engine', 'ejs');
// app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));
app.post('/', function(req, res)
{
	assign(req.body.prod,req.body.price);
	console.log(op.call_all());
	res.end(op);
});
app.listen(1997);



const rp = require('request-promise');
const cheerio = require('cheerio');
let qi = "shoes";
let qp = "2000";
async function snapdeal()
{
	let urls = 'https://www.snapdeal.com/search?sort=rlvncy&keyword=';
	return rp(urls+"shoes 2000").then(async (html) =>
	{
			const $ = cheerio.load(html);
			
			var img = $("#products").map(function()
			{
				return $(this).find("img").map(function()
				{
					return $(this).attr("src");
				}).get();        
			}).get();
			
			var tit = $("#products").map(function()
			{
				return $(this).find("img").map(function()
				{
					return $(this).attr("title");
				}).get();        
			}).get();
			
			var links = $("#products").map(function()
			{
				return $(this).find("a").map(function()
				{
					return $(this).attr("href");
				}).get();        
			}).get();
				
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
			
			let retstr = [];
			for(var i=0; i<4; i++)
			{
				if((price[i]<=qp*1.15 && price[i]>=0))
				{
				               retstr.push( dmp[i]	+
								img[i]	+			
								String(tit[i]).substring(0,11) +
								price[i]);
				}
			}
			return await retstr;
	});
}

snapdeal().then(i => console.log(i))
