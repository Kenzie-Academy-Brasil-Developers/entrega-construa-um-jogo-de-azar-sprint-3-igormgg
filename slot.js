let imgDir = '/img/'

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
        
        let left = Math.floor(Math.random()*10)
        let center = Math.floor(Math.random()*10)
        let right = Math.floor(Math.random()*10)

        document.left.src = list[left]
        document.center.src = list[center]
        document.right.src = list[right]

        if (counter > 20){
            let final_left = list[left]
            let final_center = list[center]
            let final_right = list[right]

            if ((final_left === final_center) || (final_left === final_right) || (final_center === final_right)){
                idPrize.innerHTML = 'You almost won. Keep trying!'
            }
            else if ((final_left === final_center) && (final_left === final_right)){
                idPrize.innerHTML = 'Congratulations, you won!'
            }
            else {
                idPrize.innerHTML = 'You lost. Try again!'
            }

            counter = 0
            clearInterval(random)
        }
    }, 100)
}