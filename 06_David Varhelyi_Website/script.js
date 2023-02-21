function m1() {
    var oimg = document.getElementsByClassName('o-img')[0];
    var ov = document.getElementsByClassName('overlay')[0];
    ov.style.display = "grid";
    oimg.src = "08_BosmanXYZ_Varhelyi_2.jpg";
    ov.style.animation = "fade-in 0.8s ease";
}

function m2() {
    var oimg = document.getElementsByClassName('o-img')[0];
    var ov = document.getElementsByClassName('overlay')[0];
    ov.style.display = "grid";
    oimg.src = "08_BosmanXYZ_Varhelyi_Image_1.jpg";
    ov.style.animation = "fade-in 0.8s ease";
}

function p1() {
    var ov3 = document.getElementsByClassName('overlay-txt')[0];
    ov3.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt nulla error eveniet sapiente dignissimos optio quod consectetur omnis, dicta id non repellat praesentium, in, nesciunt aliquid distinctio explicabo tenetur?"
    ov3.style.animation = "fade-in 0.8s ease";
    ov3.style.display = "inline";
}

function p1x() {
    var ov3 = document.getElementsByClassName('overlay-txt')[0];
    ov3.style.display = "none";
    ov3.style.animation = "fade-out 0.8s ease";

}

function mc() {
    var ov = document.getElementsByClassName('overlay')[0];
    ov.style.display = "none";
    ov.style.animation = "fade-out 0.8s ease";
}

function info() {
    var ov2 = document.getElementsByClassName('overlay-info')[0];
    ov2.style.display = "grid";
}