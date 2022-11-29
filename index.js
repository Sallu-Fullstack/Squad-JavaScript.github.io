let data = [
    {
        name:'Wasim',
        age:'23'
    },
    {
        name:'Fatha',
        age:'22'
    },
    {
        name:'Noor',
        age:'23'
    },
    {
        name:'Meeran',
        age:'21'
    },
    {
        name:'Siraj',
        age:'22'
    },
    {
        name:'Roomi',
        age:'23'
    }
];

const infor = document.querySelector('#info')
let details = data.map(function(item) {
    return '<div>' + item.name + " is " + item.age + " years old" + '</div>';
    // return item.name;
});

info.innerHTML = details.join('\n');