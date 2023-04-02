'use strict'

document.querySelector(".question_btn").onclick = function(slidein){
    document.querySelector(".prompt").classList.add('slidein');
    document.querySelector(".prompt").classList.remove('prompt');
    setTimeout(
        () => {
            document.querySelector(".slidein").classList.add('prompt_stay');
            document.querySelector(".slidein").classList.remove('slidein');
        },
        1000
    )
};
document.querySelector(".btn_ex").onclick = function(slideback){
    document.querySelector(".prompt_stay").classList.add('slideback');
    document.querySelector(".prompt_stay").classList.remove('prompt_stay');
    setTimeout(
        () => {
            document.querySelector(".slideback").classList.add('prompt');
            document.querySelector(".slideback").classList.remove('slideback');
        },
        1000
    )
};


let rand_order = Math.floor(Math.random() * 5 + 1);
console.log(rand_order);

let order = [];

if(rand_order == 1){
    document.querySelector(".order_1").removeAttribute("hidden")
    order = ["tea","tea","mint"];
} else if(rand_order == 2){
    document.querySelector(".order_2").removeAttribute("hidden")
    order = ["coffee","coffee","milk"];
} else if(rand_order == 3){
    document.querySelector(".order_3").removeAttribute("hidden")
    order = ["juice","juice","juice"];
} else if(rand_order == 4){
    document.querySelector(".order_4").removeAttribute("hidden")
    order = ["coffee","milk","caramel"];
} else if(rand_order == 5){
    document.querySelector(".order_5").removeAttribute("hidden")
    order = ["cacao","cacao","milk"];
}

console.log(order);
let a;
let cook = [];
const check = () => {
    if (cook.length == 3 && JSON.stringify(cook) !== JSON.stringify(order)){
        setTimeout(() =>{
            document.querySelector(".Ingredients").setAttribute("hidden","hidden");
            document.querySelector(".order_1").setAttribute("hidden","hidden");
            document.querySelector(".order_2").setAttribute("hidden","hidden");
            document.querySelector(".order_3").setAttribute("hidden","hidden");
            document.querySelector(".order_4").setAttribute("hidden","hidden");
            document.querySelector(".order_5").setAttribute("hidden","hidden");
            document.querySelector(".coupon_txt_2").style.display = "flex";
            document.querySelector(".glass_img").setAttribute("hidden","hidden");
            document.querySelector(".wrong_img").removeAttribute("hidden");
            document.querySelector(".refuse").removeAttribute("hidden");
            console.log(cook);
            },1000);
    }
    if (cook.length == 3 && JSON.stringify(cook) === JSON.stringify(order)){
        setTimeout(() => {
            document.querySelector(".Ingredients").setAttribute("hidden","hidden");
            document.querySelector(".order_1").setAttribute("hidden","hidden");
            document.querySelector(".order_2").setAttribute("hidden","hidden");
            document.querySelector(".order_3").setAttribute("hidden","hidden");
            document.querySelector(".order_4").setAttribute("hidden","hidden");
            document.querySelector(".order_5").setAttribute("hidden","hidden");
            document.querySelector(".glass_img").setAttribute("hidden","hidden");
            document.querySelector(".coupon_txt").style.display = "flex";
            document.querySelector(".coupon_img").removeAttribute("hidden");
            document.querySelector(".Left").removeAttribute("hidden");
            document.querySelector(".Right").removeAttribute("hidden");
            document.querySelector(".confirm").removeAttribute("hidden");
            console.log(cook);
        }, 1000);
    };
}

let arr = document.querySelectorAll("#Ing_btn");
document.querySelector(".Ingredients").onmouseover = function(event){
    let button = event.target.closest('button');
    if (!button) return;
    if (!document.querySelector(".Ingredients").contains(button)) return;

    button.classList.add("clickable");
    a = document.querySelector(".clickable").value;


    document.querySelector(`#img_${a}`).style.display = "block";
    document.querySelector(".arrow").style.display = "block";

    const animate = () =>{
        document.querySelector(`#img_${a}`).style.display = "none";
        document.querySelector(`#img_${a}`).style.display = "flex";
        document.querySelector(`#img_${a}`).classList.add("img_animate");
        setTimeout(
            () => {
                document.querySelector(`#img_${a}`).style.display = "none";
                document.querySelector(`#img_${a}`).classList.remove("img_animate");
                arr.forEach(element => {
                    element.removeAttribute("hidden");
                });
            },
            1000
        );
    }

    document.querySelector(".clickable").onclick = function(){
        arr.forEach(element => {
            element.setAttribute("hidden","hidden");
        });
        if(cook.length < 2){
            if(a==1){
                animate();
                cook.push("coffee");
            }else if(a == 2){
                animate();
                cook.push("tea");
            }else if(a == 3){
                animate();
                cook.push("juice");
            }else if(a == 4){
                animate();
                cook.push("milk");
            }else if(a == 5){
                animate();
                cook.push("cacao");
            }else if(a == 6){
                animate();
                cook.push("caramel");
            }else if(a == 7){
                animate();
                cook.push("soda");
            }else if(a == 8){
                animate();
                cook.push("lemon");
            }else if(a == 9){
                animate();
                cook.push("mint");
            }
        }else if(cook.length == 2){
            if(a == 1){
                animate();
                cook.push("coffee");
                check();
            }else if(a == 2){
                animate();
                cook.push("tea");
                check();
            }else if(a == 3){
                animate();
                cook.push("juice");
                check();
            }else if(a == 4){
                animate();
                cook.push("milk");
                check();
            }else if(a == 5){
                animate();
                cook.push("cacao");
                check();
            }else if(a == 6){
                animate();
                cook.push("caramel");
                check();
            }else if(a == 7){
                animate();
                cook.push("soda");
                check();
            }else if(a == 8){
                animate();
                cook.push("lemon");
                check();
            }else if(a == 9){
                animate();
                cook.push("mint");
                check();
            }
        }
    }
};

document.querySelector(".Ingredients").onmouseout = function(event){
    document.querySelector(".arrow").style.display = "none";
    if(document.querySelector(`#img_${a}`).style.display == "block"){
        document.querySelector(`#img_${a}`).style.display = "none";
    }
    let button = event.target.closest('button');
    if (!button) return;
    if (!document.querySelector(".Ingredients").contains(button)) return;

    button.classList.remove("clickable");
}; 










