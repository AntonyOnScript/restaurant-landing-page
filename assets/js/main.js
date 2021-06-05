class Slider{
    constructor(slideField, buttonNext, buttonPrevious, images = []){
        this.slideField = slideField
        this.buttonNext = buttonNext
        this.buttonPrevious = buttonPrevious
        this.images = Array.from(images)
    }

    checkImages() {
        for(let i = 0; i <= this.images.length -1; i++){
            this.images[i].setAttribute('id', i+1)
        }
    }

    toPass(){
        this.checkImages()
        let position
        let newPosition
        for(let i in this.images){
            if(this.images[i].getAttribute('class', 'showing')){
                position = i
                break   
            }
        }

        console.log('pos', position)
        console.log('new pos', newPosition)

        if(Number(position)+1 !== this.images.length){
            newPosition = String(Number(position)+1)
        }else{
            newPosition ='0'
        }

        console.log('pos', position)
        console.log('new pos', newPosition)
        
        this.images[position].classList.remove('showing')
        
        this.images[newPosition].classList.add('showing')
        this.images[newPosition].scrollIntoView()
        
        
    }

}

let images = document.querySelectorAll('.slider img')
let slideField = document.querySelector('.slider')
let nextButton = document.querySelector('.next')
let previousButton = document.querySelector('.previous')

let slider = new Slider(slideField, nextButton, previousButton, images)