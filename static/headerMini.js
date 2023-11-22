function main(){
    document.addEventListener("scroll", handleScroll)
    handleScroll()
    // const findOverflows = () => {
    //     const documentWidth = document.documentElement.offsetWidth;

    //     document.querySelectorAll('*').forEach(element => {
    //         const box = element.getBoundingClientRect();

    //         if (box.left < 0 || box.right > documentWidth) {
    //             console.log(element);
    //             element.style.border = '1px solid red';
    //         }
    //     });
    // };

// findOverflows();
}

function handleScroll(e){
    if (window.scrollY > 0){
        document.querySelector('main').style.marginTop = '100px';
        document.querySelector('header').classList.add('header-mini')
    }else if (window.scrollY == 0){
        document.querySelector('main').style.marginTop = '0px';
        document.querySelector('header').classList.remove('header-mini')
    }
}

export {main}
