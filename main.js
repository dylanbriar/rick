function rickPlace (){
    const allURLS = document.links;
    for(i = 0; i < allURLS.length; i++) {
        allURLS[i].href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}
rickPlace()

document.addEventListener('scroll', () => {
    rickPlace()
})