/*
var animals = ["horse","lion","eagle","tiger"];
console.log(animals);

animals[4] = "cat";
console.log(animals);

animals[0] = "unicorn";
console.log(animals);

animals.push("dog");
console.log(animals);

animals.push("mouse");
console.log(animals);

animals.push("zebra");
console.log(animals);

animals.pop();
console.log(animals);
*/

function gumar(a,b)
{
    var c = a + b;
    return c;
}
/*
var a = gumar(15,36);
var b = gumar(56,12);
var c = gumar(26,65);
*/

function zuyg(a)
{
    if(a%2==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
/*
var a = zuyg(5);
var b = zuyg(8);
var c = zuyg(11);

console.log(a,b,c);
*/

function faktorial(a)
{
    var b = 1;
    for(var i = 1; i <= a; ++i)
    {
        b = b*i;
    }
}


function arjeq(x,arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        if(x == arr[i])
        {
            return i;
        }
        else if(i == arr.length - 1)
        {
            return false;
        }
    }
}
/*
var a = [5,6,7,4,12,56,54];
var b = arjeq(12,a);

console.log(b);
*/

var alfavit = ["a","b","c","d","e","f","g","h","i","j"];

function gaxtnabar(a)
{
    var b = "";
    for(var i = 1; i <= a; i++)
    {
        b = b + alfavit[getRandInt(0,alfavit.length-1)];
    }
    return b;
}

function getRandInt(min,max)
{
	var z = Math.floor(Math.random()*(max-min+1)) + min;
	return z;
}

var a = gaxtnabar(6);

console.log(a);