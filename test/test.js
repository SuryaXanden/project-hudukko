Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

let objs = [];

function fun1()
{
	let num1 = 0;
	for(let i=0;i<10;i++)
	{
		num1 = Math.floor(Math.random() * 10);//rand num <10
		num2 = Math.floor(Math.random() * 999);//rand num <10
		objs.push({price:num1,html:"xyz"+num2});
	}

}

function fun2()
{
	let num1 = 0;
	for(let i=0;i<10;i++)
	{
		num1 = i;
		objs.push({price:num1,html:"abc"+num1});
	}

}

fun1();
fun2();

objs = objs.sortBy('price');

let json = JSON.stringify(objs);

console.log(json);