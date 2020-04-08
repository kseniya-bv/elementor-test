import axios from 'axios'
import './style.css'


const API_END_POINT = 'http://localhost/elementor/Controller.php'
const btn = document.querySelector('#show-modal')

class Modal {

    constructor(id) {
        this.elem = document.getElementById(id)
        this.hideListener()
    }

    show(data) {
        // Set HTML content
        this.elem.getElementsByClassName('title')[0].innerHTML = data.title
        this.elem.getElementsByClassName('content')[0].innerHTML = data.text
        this.elem.style.display = "block"
        this.toggleBtn()
      
    }

    hide() {

        this.elem.style.display = "none"
        this.toggleBtn()

    }

    toggleBtn(){

        btn.classList.toggle('hidden')
        const btnTitle = (btn.classList.contains("hidden")) ? "Open popup" : "Close popup"
        btn.innerHTML = btnTitle   

    }

    // Create event listeners for close modal
    hideListener() {
        
        this.elem.addEventListener('click', e => {
            if(e.target.classList.contains("close-modal")) {
                this.hide()
            }
        })
    }

}

const modal = new Modal("my-modal")
    btn.addEventListener('click', (e) => {
        if(e.target.classList.contains("hidden")){
            
            // Make a request and get html content
            axios.get(API_END_POINT)
            .then(function (response) {

                // handle success
                modal.show(response.data)
                
            })
            .catch(function (error) {
                // handle error
                console.log(error)
            })
        }
        else{
            
            modal.hide()
        }   
})
