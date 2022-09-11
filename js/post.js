function on(but){

    let imgBut = document.querySelectorAll('.butImg');
    let butText = document.querySelectorAll('.but');
 
    but == "but1" ? (imgBut[0].style.display="block", butText[0].style.color="black") : (imgBut[0].style.display="none", butText[0].style.color="grey")

    but == "but2" ? (imgBut[1].style.display="block", butText[1].style.color="black") : (imgBut[1].style.display="none", butText[1].style.color="grey")

    but == "but3" ? (imgBut[2].style.display="block", butText[2].style.color="black") : (imgBut[2].style.display="none", butText[2].style.color="grey")
}


