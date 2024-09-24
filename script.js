'use strict'

const outputDisplay = document.querySelector('.outputDisplay');
const calcBtn = document.querySelectorAll('.calcBtn');
const eqlBtn = document.querySelector('.eqlBtn');
const delBtn = document.querySelector('.delBtn');
const clearBtn = document.querySelector('.clearBtn');

for (let i = 0; i < calcBtn.length; i++) {
    calcBtn[i].addEventListener('click', function () {
        outputDisplay.append(calcBtn[i].textContent);

        // OR
        //outputDisplay.textContent = outputDisplay.textContent + calcBtn[i].textContent; // outputDisplay.textContent += outputDisplay.textContent
    })
}

clearBtn.addEventListener("click", function () {
    outputDisplay.textContent = "";
})

delBtn.addEventListener("click", function() {
    outputDisplay.textContent = outputDisplay.textContent.slice(0, -1);
})

eqlBtn.addEventListener("click", function() {
    try {
         outputDisplay.textContent = eval(outputDisplay.textContent);
    } catch (error) {
        outputDisplay.textContent = "Error";
    }
})

//                  ANIMATION


gsap.from(".numBtn", {
    delay: 2,
    duration: 1,
    rotation: 360,
    stagger: 0.5,
    opacity: 0,

    onComplete: () => {
        gsap.set(".numBtn", { clearProps: "all" });
      }
});

gsap.from(".signBtn", {
    delay: 7.5,
    duration: 1,
    x: 500,
    opacity: 0,

    onComplete: () => {
        gsap.set(".signBtn", { clearProps: "all" });
      }
});

gsap.from(".delAc", {
    duration: 1,
    delay: 7,
    stagger: 1,
    y: -100 ,
    opacity: 0,

    onComplete: () => {
        gsap.set(".delAc", { clearProps: "all" });
      }
})

gsap.from(".dotEql", {
    duration: 1,
    delay: 7,
    stagger: 1,
    y: -100 ,
    opacity: 0,

    onComplete: () => {
        gsap.set(".dotEql", { clearProps: "all" });
      }
})

gsap.from(".twiBtn", {
    delay: 2,
    duration: 1,
    x: 500,
    opacity: 0,

    onComplete: () => {
        gsap.set(".twiBtn", { clearProps: "all" });
      }
});

gsap.from(".gitBtn", {
    delay: 2,
    duration: 1,
    x: -500,
    opacity: 0,

    onComplete: () => {
        gsap.set(".gitBtn", { clearProps: "all" });
      }
});
