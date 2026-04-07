window.onload = () => {
    if(!sessionStorage.id ) {
        console.log(sessionStorage.id);
        window.location = "./index.html";
    } else {
        console.log(sessionStorage.id);
    }
}