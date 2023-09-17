/*
gsap takes in 2 params
gsap.to("the element that you wanna animate(title here) by using class/id","we define which property we want to animate")
*/
// gsap.to(".text",{y:50,opacity:0,duration:1})

/*
Maybe , you want to make it go from 100 to some other value
*/

// gsap.fromTo(".text",{opacity:0,y:20},{opacity:1,y:0,duration:1})


/*
Timeline - allows you to chain together multiple fromTos
*/

const tl = gsap.timeline({defaults:{duration: 0.75,ease:'power1.out'}})
tl.fromTo(".cookie-container",{scale:0},{scale:1,ease:'elastic.out(1,0.4',duration:1.5})
tl.fromTo(".cookie",{opacity:0,x:-50,rotation:'-45deg'},{opacity:1,x:0,rotation:"0deg"},'<50%')
tl.fromTo('.text',{x:30,opacity:0},{x:0,opacity:1},"<")

/*
Say, you want to sync 2 animations at the same time,
tl.fromTo(".cookie",{opacity:0,x:-50,rotation:'-45deg'},{opacity:1,x:0,rotation:"0deg"})
tl.fromTo('.text',{x:30,opacity:0},{x:0,opacity:1},"<")

"<" means you are syncing it to the one just previous to the one where this "<"" is applied
*/

const button = document.querySelector("button");
button.addEventListener('click',()=> {
    // alert("clicked")
    gsap.to(".cookie-container",{opacity:0,y:100,duration:0.75,ease:'power1.out'})
})