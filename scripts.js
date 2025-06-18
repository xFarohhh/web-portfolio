console.log("This website is also hosted on GitHub, the source code can be found here: https://github.com/xFarohhh/web-portfolio" )
//Programming section
function programmingFolders(folder1, folder2, folder3){

    folder1 = document.getElementById("c#Folder");
    folder2 = document.getElementById("htmlFolder");
    folder3 = document.getElementById("c++Folder");
   
    folder1.addEventListener('click', (event)=>{
        console.log("c# Folder opened")
    })
     folder2.addEventListener('click', (event)=>{
        console.log("html Folder Opened")
    })
     folder3.addEventListener('click', (event)=>{
        console.log("C++ folder opened")
    })
}

//Art section
function artFolders(image1, image2, image3){

    image1 = document.getElementById("image1");
    image2 = document.getElementById("image2");
    image3 = document.getElementById("image3");
    let isOpen= false;

    const container=document.querySelector('.container')
    console.log(container)

        image1.addEventListener('click',(event)=>{
        console.log("Image1 has been opened")
        gsap.to('#testImage',{scale:2, duration:2})
       
        })

        image2.addEventListener('click',(event)=>{
        console.log("Image2 has been opened")
        })

        image3.addEventListener('click',(event)=>{
        console.log("Image3 has been opened")
        })

        // checks the width of the screen and adjusts the scale of the image to fit the size
        var checkInterval = setInterval(function(){
            let windowWidh = window.innerWidth
            if(window.innerWidth<=616){
                image1.style.scale=0.9;
            }
        },20)
}

 let container = document.getElementById('artContainer')
        console.log(container);
        var getData = setInterval(function(event){
            if(isOpen ==true){
            container.addEventListener("click",()=>{
            console.log("Something pressed")
            gsap.fromTo('#testImage',{scale:2, duration:2}, {scale:1,duration:2});
            isOpen=false;
            console.log(isOpen);
            })
        }
},20)


    // changes the purple text on the home screen
    const typed = new Typed('.multiText', {
    strings: ['C#, Html, JavaScript and Css', '2D Asset Design and art', 'and 3D Model Design'],
    typeSpeed: 100,
    backspeed: 400,
    backdelay:2000,
    loop:true
    });

let button = document.getElementById('menuButton');
let sideBar = document.getElementById('sideBar');
console.log(sideBar);
console.log(button);
button.addEventListener('click',()=>{
    console.log("button pressed");
    sideBar.style.display = "flex";

})

artFolders();
programmingFolders();


