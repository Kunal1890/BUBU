const nobtnn = document.querySelector('#no-btn');
const yesbtnn = document.querySelector('#yes-btn');
nobtnn.addEventListener("mouseover",function(){
    change_btnstyle();
    
})

function change_btnstyle(){
    
    let start = Date.now();

      let timer = setInterval(function() {
        let timePassed = Date.now() - start;

        nobtnn.style.left = timePassed / 5 + 'px';

        if (timePassed > 2000) clearInterval(timer);

      }, 20);
    }

yesbtnn.addEventListener('click', function(){
   
    animateText();

})

let textArea = document.querySelector('#textExample');

yesbtnn.addEventListener('click', function(){
    // animateText(textArea);
    textArea.style.display = "inline-block";
})
    


function animateText(textArea) {
    let text = textArea.value;
    let to = text.length,
      from = 0;

    animate({
      duration: 5000,
      timing: bounce,
      draw: function(progress) {
        let result = (to - from) * progress + from;
        textArea.value = text.slice(0, Math.ceil(result))
      }
    });
  }


  function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
    }
  }