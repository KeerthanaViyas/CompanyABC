$(document).ready(function(){
    $(window).scroll(function(){
        console.log("into scroll function");
        if(this.scrollY > 20){
            console.log("add sticky");
            $('.navbar').addClass("sticky");
        }
        else{
            console.log("remove sticky");
            $('.navbar').removeClass("sticky");
        }
    })
})
