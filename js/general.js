function btnMenu(){
    let button = document.querySelector("#btnMenu");
    let menuMobile = document.querySelector("#menuMobileContainer")

    if(button.classList == 'btnActive'){ 
        button.classList.remove('btnActive');
        button.classList.add("opened");
        menuMobile.style.width="0%";
        setTimeout(()=>{
            button.removeAttribute('style');
        },1000);
        
    } else{
        button.classList.add('btnActive');
        button.classList.remove("opened");
        menuMobile.style.width="100%";
        button.style.backgroundColor="unset";
    }
}

function closeMenu(){
    closeMenuOption = document.querySelector("#btnMenu");

    closeMenuOption.click();
}