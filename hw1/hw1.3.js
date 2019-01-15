function applyCoupon (item){ 
    return function (discount){
        item = item - (item * discount / 100)
        return item;
    };
}

const item = {
"name": "Biscuits",
"type": "regular",
"category": "food",
"price": 200
}



console.log(applyCoupon(item.price)(10) === 180);
