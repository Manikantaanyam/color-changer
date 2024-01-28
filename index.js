const element = document.querySelectorAll('.button')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')

element.forEach(function(element){
    console.log(element);
    element.addEventListener('click', function(e){
        // console.log(e);
        console.log(e.target);

        if(e.target.id==='grey'){
            body.style.backgroundColor='grey'
        }

        if(e.target.id==='yellow'){
            body.style.backgroundColor='yellow'
            p.style.color='black'
            h1.style.color='black'
        }

        if(e.target.id==='blue'){
            body.style.backgroundColor='blue'
            p.style.color='white'
            h1.style.color='white'
        }

        if(e.target.id==='green'){
            body.style.backgroundColor='green'
        }

        if(e.target.id==='aqua'){
            body.style.backgroundColor='aqua'
            p.style.color='black'
            h1.style.color='black'
        }

    })
})
