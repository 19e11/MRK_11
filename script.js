const options = [
    { id: 1, name: 'Encore Hits', price: "30$" },
    { id: 2, name: 'Calm Hits', price: "25$" },
    { id: 3, name: 'DIVINE Hits', price: "50$" },
    { id: 4, name: 'Talha Anjum Hits', price: "45$" },
    { id: 5, name: 'Kr$na Hits', price: "35$" }
]

let all = "";

options.forEach((e)=>{
    all += `<div class="item">
            <h1>${e.name}</h1>
            <h3>Price:${e.price}</h3>
        </div>`
});

document.querySelector('.items').innerHTML = all;
let searched = document.querySelector('input');
let item = document.querySelector('.item');


searched.addEventListener('input', ()=>{
    let gold = searched.value.toLowerCase();

    let results = options.filter(options =>
        options.name.toLowerCase().includes(gold)
    )
    
    let final = "";

   results.forEach((e)=>{
    final += `<div class="item">
            <h1>${e.name}</h1>
            <h3>Price:${e.price}</h3>
        </div>`
});

document.querySelector('.items').innerHTML = final;

})
