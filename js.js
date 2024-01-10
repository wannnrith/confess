const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => { 
    question.innerHTML = "  I love you too!";
    gif.src = 
     "https://www.bing.com/th/id/OGC.6624a63aa03a09f00fcecac1e639d33b?pid=1.7&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f60%2f37%2fd3%2f6037d3b80790fa6c16872d9c68b7debd.gif&ehk=qBIayh1iGtuhmB9zHLXk5G7N%2fFy%2fPSgSriD%2bNMik5gY%3d"
});

noBtn.addEventListener('mouseover', ()=> {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});