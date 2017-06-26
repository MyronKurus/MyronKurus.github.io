$(document).ready(function() {
    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        }
    }
        
    $('#partners-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        responsive:{
            320:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            },
            1050:{
                items:4
            },
            1200:{
                items:5
            },
            1500:{
                items:6
            }
        }
    });
        
    $('#slider-big .owl-carousel').owlCarousel({
        center:true,
        loop:true,
        margin:20,
        responsive:{
            320:{
                items:1
            },
            600:{
                items:1
            },
            900:{
                items:1
            },
            1050:{
                items:1
            },
            1200:{
                items:1
            },
            1500:{
                items:1
            }
        }
    });
});