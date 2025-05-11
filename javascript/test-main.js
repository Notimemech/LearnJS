const yourCartArray =[
    {
        name: 'logo1',
        price: 42,
        amount: 1
    },
    {
        name: 'logo2',
        price: 42,
        amount: 1
    }

];

const yourcart = {
    amount: sumAmount(yourCartArray),
    price: sumPrice(yourCartArray)
};

localStorage.setItem('yourCart', JSON.stringify(yourcart));

let yourCartAmount = JSON.parse(localStorage.getItem('yourCart')).amount;

document.querySelector('.yourcart').innerHTML = `Your cart: ${yourCartAmount}`;



function sumPrice(array){
    let sum = 0;
    for(i = 0; i<array.length; i++){
        sum += array[i].price;
    }
    return sum;
}

function sumAmount(array){
    let sum =0;
    array.forEach(function(value){
        sum+=value.amount;
    });
    return sum;
}

function addToCart(string){
    // let productName = document.querySelector(`.${string}-name`).innerHTML;
    // console.log(productName)

    const product = {
        name: document.querySelector(`.${string}-name`).innerHTML,
        price: Number(document.querySelector(`.${string}-name`).innerText),
        amount: 1
    }

    yourCartArray.push(product);
    const yourcart = {
        amount: sumAmount(yourCartArray),
        price: sumPrice(yourCartArray)
    };
    localStorage.setItem('yourCart', JSON.stringify(yourCartArray));

    let yourCartAmount = JSON.parse(localStorage.getItem('yourCart')).amount;

    document.querySelector('.yourcart').innerHTML = `Your cart: ${yourCartAmount}`;

    
}

