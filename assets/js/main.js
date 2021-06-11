class Slider{
    constructor(slideField, buttonNext, buttonPrevious, images = []){
        this.slideField = slideField
        this.buttonNext = buttonNext
        this.buttonPrevious = buttonPrevious
        this.images = Array.from(images)

        this.buttonNext.addEventListener('click', ()=>{
            this.toPass(1)
        })

        this.buttonPrevious.addEventListener('click', ()=>{
            this.toPass(0)
        })
    }

    checkImages() {
        for(let i = 0; i <= this.images.length -1; i++){
            this.images[i].setAttribute('id', i+1)
        }
    }

    toPass(value){
        this.checkImages()
        let ImagesWidth = this.images[0].scrollWidth

        if(value === 1){
            if(this.slideField.scrollLeft >= (ImagesWidth*this.images.length) - ImagesWidth){
                this.slideField.scrollLeft = 0
            }else{
                this.slideField.scrollLeft += ImagesWidth
            }
        }else{
            if(this.slideField.scrollLeft === 0){
                this.slideField.scrollLeft = ImagesWidth*this.images.length
            }else{
                this.slideField.scrollLeft -= ImagesWidth
            }
        }
    }

}

let images = document.querySelectorAll('.slider img')
let slideField = document.querySelector('.slider')
let nextButton = document.querySelector('.next')
let previousButton = document.querySelector('.previous')

let slider = new Slider(slideField, nextButton, previousButton, images)