(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const art = document.querySelector("#main-art");
    const bg =document.querySelector("#title-bg");
    // transfrom text-bg and main-art
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/3;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        art.style.transform = `translate(${(_mouseX - _w) * 0.01}% ,${(_mouseY - _h) * 0.01}%)`;
        bg.style.transform = `translate(${-(_mouseX - _w) * 0.005}% ,${-(_mouseY - _h) * 0.01}%)`;

    }

    // Allow art description to stick to the cursor
    let desc = document.getElementById('description');

    const onMouseMove = (e) =>{
    desc.style.left = e.pageX + 'px';
    desc.style.top = e.pageY + 'px';
    }
    document.addEventListener('mousemove', onMouseMove);

    // ALlow art descrition ton appear on art hover
    let images =document.querySelectorAll('.art img');
    console.log(images);
    for (let i = 0; i < images.length; i++) {
        image=images[i];
        image.addEventListener('mouseenter',function(event) {
            console.log('on');
            desc.style.opacity = 0.85;
        });   
        image.addEventListener('mouseleave',function(event) {
            console.log('off');
            desc.style.opacity = 0;
        }); 
    }


})();