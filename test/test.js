Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

let objs = [];
let num1 = 0;
for(let i=0;i<10;i++)
{
	num1 = Math.floor(Math.random() * 10);//rand num
	objs.push({price:num1,html:"xyz"+num1});
}

objs = objs.sortBy('price');

let json = JSON.stringify(objs);

console.log(json);