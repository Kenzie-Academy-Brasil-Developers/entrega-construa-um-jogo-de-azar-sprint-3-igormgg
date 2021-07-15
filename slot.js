let imgDir = 'img/'

let list = new Array()

let idPrize = document.getElementById('prize')

for(let i = 0; i < 10; i++){
    list[i] = imgDir + i + '.png'

    new Image().src = list[i]
}

let counter = 0

const slot = () =>{
    let random = setInterval(function(){
        counter ++
        
        let left = Math.floor(Math.random()*3)
        let center = Math.floor(Math.random()*3)
        let right = Math.floor(Math.random()*3)

        document.left.src = list[left]
        document.center.src = list[center]
        document.right.src = list[right]

        if (counter > 20){
            let final_left = list[left]
            let final_center = list[center]
            let final_right = list[right]

            if ((final_left === final_center) && (final_left === final_right)){
                idPrize.innerHTML = `Gotcha! Você capturou seu primeiro Pokémon! <img src="${final_center}">`
            }
            else if ((final_left === final_center) || (final_left === final_right) || (final_center === final_right)){
                idPrize.innerHTML = "Foi por pouco! Tente novamente!"
            }
            else {
                idPrize.innerHTML = 'O Pokémon escapou!'
            }

            counter = 0
            clearInterval(random)
        }
    }, 100)
}