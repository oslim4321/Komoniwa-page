let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    // cartItem.classList.remove('active');
}

 let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    // cartItem.classList.remove('active');
}

// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = () =>{
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    // cartItem.classList.remove('active');
}
let count=0
let WeeklyProverb=[
    {
        img:  "images/Pot b.jpg",  Proverb: "ÌKÒKÒ TÍ Ó J’ATA, ÌDÍI RẸ̀ Ó GBÓNÁ",  translation: "For an ancient pot (Clay pot) to taste the pepper sauce being cooked in it, it’s bottom will have to withstand the pressure of fire.",  Interpretation: "This Proverb teaches that anyone who aims or wishes to enjoy/benefit from an endeavor or course will have to endure any pain attached to it. This is in agreement with the English popular saying;",  footer: "NO PAIN, NO GAIN!"
    },

    
    {
        img:  "images/blog-1.jpeg",Proverb: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",translation: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam nesciunt rerum, quidem animi accusantium autem a sint nulla, beatae ipsa reiciendis nostrum, magnam dicta commodi aliquid pariatur culpa sunt cumque",Interpretation: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam nesciunt rerum, quidem animi accusantium autem a sint nulla, beatae ipsa reiciendis nostrum, magnam dicta commodi aliquid pariatur culpa sunt cumque!",footer: "This Are Lorems"
    },

]


proverb=document.getElementById('proverb')

let reading=1

        function display(){
            proverb.innerHTML=`
            <h1 style="font-size: 20px;" id='read'>${reading}</h1>
            <img style="border-radius: 20px;" src="${WeeklyProverb[count].img}" class="user" alt="">
            <div class="carol">
                <button title="Read more Proverb" onclick="back()">prev</button>
                <button onclick="next()">next</button>
            </div>
                <p style="font-size: 30px;"><b>"${WeeklyProverb[count].Proverb}"</b><br></p>
                <p><b style="text-decoration: underline 2px;">Translation</b><br>${WeeklyProverb[count].translation}<br>
                <br><b style="text-decoration: underline 2px;">Interpretation</b><br>${WeeklyProverb[count].Interpretation}<br>
                This is in agreement with the English popular saying;<br> <b>${WeeklyProverb[count].footer}</b> </p>
              `
        }
            display()
           // console.log(read)
            read=document.getElementById('read')

            function next(){
               if (count+1 < WeeklyProverb.length ) {
                   count++;
                   reading++;
                   read.innerHTML=reading
                   display()
                 
               }
            }
            function back(){
                if (count+1 <= WeeklyProverb.length ) {
                    count--;
                    reading--;
                    read.innerHTML=reading
                    display()
                }
            }


