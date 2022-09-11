function on(but){

    let imgBut = document.querySelectorAll('.butImg');
    let butText = document.querySelectorAll('.but');
 
    but == "but1" ? (imgBut[0].classList.add('imgVisible'), butText[0].style.color="black", imgBut[0].classList.remove('imgInvisible')) : (imgBut[0].classList.add('imgInvisible'), butText[0].style.color="grey", imgBut[0].classList.remove('imgVisible'))

    but == "but2" ? (imgBut[1].classList.add('imgVisible'), butText[1].style.color="black", imgBut[1].classList.remove('imgInvisible')) : (imgBut[1].classList.add('imgInvisible'), butText[1].style.color="grey", imgBut[1].classList.remove('imgVisible'))

    but == "but3" ? (imgBut[2].classList.add('imgVisible'), butText[2].style.color="black", imgBut[2].classList.remove('imgInvisible')) : (imgBut[2].classList.add('imgInvisible'), butText[2].style.color="grey", imgBut[2].classList.remove('imgVisible'))
}


