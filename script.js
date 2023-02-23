const elements = document.querySelectorAll(".elem")
var list = document.getElementById('menu');

var i =0;




const lastElemObserver = new IntersectionObserver(entries => {
    const lastElem = entries[0]
    if (!lastElem.isIntersecting) return
    i=i+1
    loadNewElems(i)
    lastElemObserver.unobserve(lastElem.target)
    lastElemObserver.observe(document.querySelector(".elem:last-child"))
    
}, {
    // treshold:1,
    // rootMargin: '100px'
    
})

lastElemObserver.observe(document.querySelector(".elem:last-child"))

container = document.querySelector(".container")
wrapper = document.querySelector(".wrapper")




function loadNewElems(i){
        if (i==1){
            console.log(i)

            const elem = document.createElement("div")
            elem.classList.add("elem")
            elem.setAttribute("id", "section2")

            const head = document.createElement("h2");
            head.textContent = "About us"

            const text = document.createElement("p");
           
            text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, atque. Explicabo corporis error nihil, dicta similique voluptatum. Facilis quis fugiat ducimus sunt doloremque nisi consectetur assumenda nam possimus est perspiciatis ab, ex non, consequatur itaque alias. Eius debitis sit laboriosam distinctio officia officiis ipsam est laborum eligendi sequi dignissimos, fugiat, doloribus totam reprehenderit reiciendis aspernatur nulla. Voluptate eius deserunt nemo. At ipsam, laudantium alias reprehenderit ullam totam facilis nostrum molestias eum consectetur quod iste placeat culpa dolores quia! Cumque hic sequi aperiam quidem, accusamus molestias alias atque nihil iure quas facilis iste deleniti mollitia? Quas molestias facilis porro consectetur inventore, sed facere nemo neque architecto dicta at impedit dolor reiciendis quisquam odit eveniet, saepe nam voluptas veniam temporibus pariatur error excepturi distinctio sunt. Dicta consequuntur doloribus est itaque saepe odit eaque nobis corrupti. Expedita nesciunt incidunt, tenetur debitis maiores, aspernatur adipisci deserunt dolores, doloribus autem nihil voluptatibus. Doloribus officiis, dolore accusamus ex voluptates autem placeat necessitatibus beatae blanditiis, magni, ducimus pariatur?"

            const line = document.createElement("img")    
            line.src = "images/line1.png"


            elem.append(text)
            elem.append(head)
            elem.append(line)
            wrapper.append(elem)}

        else if(i==2){
            console.log(i)
            var entry = document.createElement('a');
            entry.setAttribute("href", "#section2");
            entry.appendChild(document.createTextNode('About Us'));
            list.appendChild(entry);
        
            const elem = document.createElement("div")
            elem.classList.add("elem")
            elem.setAttribute("id", "section3")

            const image = document.createElement("img")    
            image.src = "images/tlo3.jpg"
            image.classList.add("background")
            
            const image2 = document.createElement("img")
            image2.src="images/mis.png" 
            image2.classList.add("foreground")

            const image3 = document.createElement("img")
            image3.src="images/moon2.png" 
            image3.classList.add("middle")

            elem.append(image);
            elem.append(image2);
            elem.append(image3);
            wrapper.append(elem)}
        
        else if(i==3){
                console.log(i)
                var entry = document.createElement('a');
                entry.setAttribute("href", "#section3");
                entry.appendChild(document.createTextNode('Landscape'));
                list.appendChild(entry);

                const elem = document.createElement("div")
                elem.classList.add("elem")
                elem.setAttribute("id", "section4")


                const head = document.createElement("h2");
                head.textContent = "Blog"
                const text = document.createElement("p")

                text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis unde illo neque at hic quisquam, nulla consectetur, itaque maxime sit iusto aliquam culpa reiciendis eaque recusandae vitae modi, animi expedita perferendis inventore. Culpa incidunt odit dicta quibusdam ullam facilis eum magnam, consectetur voluptates praesentium, pariatur eos nihil! Natus in, autem aut facere repellat eveniet commodi illo ullam hic fugit deserunt explicabo esse atque reprehenderit optio, dicta suscipit sed! Porro fugiat numquam vel magni, iure provident consequuntur velit ut quia itaque repudiandae molestiae, nobis sequi incidunt autem! Cum impedit accusamus laboriosam eaque necessitatibus consectetur incidunt a exercitationem molestias doloribus tenetur amet, ullam at repudiandae, quos reprehenderit adipisci assumenda dolor enim voluptas natus! Assumenda praesentium voluptate culpa quidem quasi impedit unde incidunt odit velit, dolore officiis distinctio, fugit, optio sed. Quos nesciunt eius reprehenderit ipsa consectetur tempora, fugiat provident corporis perspiciatis veritatis totam temporibus voluptates soluta vitae mollitia molestias reiciendis expedita doloribus est."

            

                const image = document.createElement("img")    
                image.src = "images/motyl.png"
                
    
                elem.append(head)
                elem.append(text)
                elem.append(image)
                wrapper.append(elem)} 

            else if(i==4){
                    console.log(i)
                    var entry = document.createElement('a');
                    entry.setAttribute("href", "#section4");
                    entry.appendChild(document.createTextNode('Blog'));
                    list.appendChild(entry);


                    const elem = document.createElement("div")
                    elem.classList.add("elem")
                    elem.setAttribute("id", "section5")

                    const image = document.createElement("img")    
                    image.src = "images/tlo1.jpg"
                    image.classList.add("background")


                    const head = document.createElement("h1");
                    head.textContent = "Lorem ipsum"
                    const text = document.createElement("p")

                    text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis unde illo neque at hic quisquam, nulla consectetur, itaque maxime sit iusto aliquam culpa reiciendis eaque recusandae vitae modi, animi expedita perferendis inventore."

        

                    elem.append(image);
                    elem.append(head);
                    // elem.append(text);
                
                    wrapper.append(elem)}
            
            else if(i==5){
                    console.log(i)
                    var entry = document.createElement('a');
                    entry.setAttribute("href", "#section5");
                    entry.appendChild(document.createTextNode('Contact'));
                    list.appendChild(entry);
                    }

                
    
}


// function blurry(){
//     let isBlurred = false;
//     let observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.intersectionRatio <= 0.6) {
//                 entry.target.style.filter = `blur(4px)`;
//                 isBlurred = true;
//             } else if (isBlurred) {
//                 entry.target.style.filter = 'blur(0px)';
//                 isBlurred = false
//             }
//         });
//     }, {threshold: [0.3, 0.6]});
//     elements.forEach(elem => { observer.observe(elem);});
// } 

// blurry();