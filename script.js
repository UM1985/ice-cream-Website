let products_list = {
  icecreams: [
    {
      p_name: "pista icecream",
      p_img: "./images/pista.png",
      p_descp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis harum nam nesciunt consectetur? Dolores!",
      p_price: 110,
      bg_color: "bg-green-400",
      text_color: "text-green-400",
    },
    {
      p_name: "Blueberry Ice-cream",
      p_img: "./images/pista.png",
      p_descp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis harum nam nesciunt consectetur? Dolores!",
      p_price: 180,
      bg_color: "bg-purple-400",
      text_color: "text-purple-400",
    },
    {
      p_name: "Mix-fruit Ice-cream",
      p_img: "./images/pista.png",
      p_descp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis harum nam nesciunt consectetur? Dolores!",
      p_price: 210,
      bg_color: "bg-pink-400",
      text_color: "text-pink-400",
    },
  ],
  milkshakes: [
    {
      p_name: "Mango Milkshake",
      p_img: "./images/pista.png",
      p_descp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis harum nam nesciunt consectetur? Dolores!",
      p_price: 180,
      bg_color: "bg-orange-400",
      text_color: "text-orange-400",
    },
    {
      p_name: "Strawberry Milkshake",
      p_img: "./images/pista.png",
      p_descp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis harum nam nesciunt consectetur? Dolores!",
      p_price: 180,
      bg_color: "bg-pink-400",
      text_color: "text-pink-400",
    },
    {
      p_name: "Cold Coffee ",
      p_img: "./images/pista.png",
      p_descp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis harum nam nesciunt consectetur? Dolores!",
      p_price: 120,
      bg_color: "bg-amber-400",
      text_color: "text-amber-400",
    },
    {
      p_name: "Chickoo Milkshake ",
      p_img: "./images/pista.png",
      p_descp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis harum nam nesciunt consectetur? Dolores!",
      p_price: 180,
      bg_color: "bg-amber-400",
      text_color: "text-pink-400",
    },
  ],
  mousse: [
    {
      p_name: "Brownie Mousse ",
      p_img: "./images/pista.png",
      p_descp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis harum nam nesciunt consectetur? Dolores!",
      p_price: 180,
      bg_color: "bg-orange-400",
      text_color: "text-orange-400",
    },
    {
      p_name: "Mango Mousse ",
      p_img: "./images/pista.png",
      p_descp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis harum nam nesciunt consectetur? Dolores!",
      p_price: 150,
      bg_color: "bg-orange-400",
      text_color: "text-orange-400",
    },
    {
      p_name: "Choco Mousse ",
      p_img: "./images/pista.png",
      p_descp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis harum nam nesciunt consectetur? Dolores!",
      p_price: 180,
      bg_color: "bg-amber-400",
      text_color: "text-amber-400",
    },
  ],
};

let icecreams = document.querySelector("#icecreams");
let milkShakes = document.querySelector("#milkShakes");
let mousse = document.querySelector("#mousse");
let products = document.querySelector("#Products");

milkShakes.addEventListener("click", () => {
  console.log("hi!!");
  milkShakes.classList.add('product_active');
  icecreams.classList.remove('product_active')
  mousse.classList.remove('product_active')

  let milkshake_list = products_list["milkshakes"];
  products.innerHTML = "";
  milkshake_list.map((element, index) => {
    console.log(element.text_color)
    products.innerHTML += ` <div class="flex items-center justify-center gap-10 ${index % 2 == 0 ? 'flex-row' :  'flex-row-reverse'   } " >
              <div class="w-1/3">
              
                <img
                  src=${ element.p_img}
                  alt="ice-cream img"
                  class="w-80 drop-shadow-2xl "
                />
              </div>
              <div class="w-1/3 ${index % 2 == 0 ? 'text-start' :  'text-end'   }">
                <h2 class="font-winky font-bold text-2xl ${element.text_color} capitalize">
                  ${element.p_name}
                </h2>
                <p class="my-3">
                 ${element.p_descp}
                </p>
                <p class="font-semibold text-xl font-winky">
                  <i class="fa fa-indian-rupee"></i> ${element.p_price}
                </p>
                <button
                  class="px-5 py-2 ${element.bg_color} text-white mt-5 rounded-md shadow-2xl hover:scale-105 duration-300"
                >
                  Buy Now!
                </button>
              </div>
            </div> `;
  });
});

mousse.addEventListener("click", () => {
  console.log("hi!!");

  mousse.classList.add('product_active');
  milkShakes.classList.remove('product_active')
  icecreams.classList.remove('product_active')

  let mousse_list = products_list["mousse"];
  products.innerHTML = "";
  mousse_list.map((element, index) => {
    console.log(element.text_color)
    products.innerHTML += ` <div class="flex items-center justify-center gap-10 ${index % 2 == 0 ? 'flex-row' :  'flex-row-reverse'   } " >
              <div class="w-1/3">
              
                <img
                  src=${ element.p_img}
                  alt="ice-cream img"
                  class="w-80 drop-shadow-2xl "
                />
              </div>
              <div class="w-1/3 ${index % 2 == 0 ? 'text-start' :  'text-end'   }">
                <h2 class="font-winky font-bold text-2xl ${element.text_color} capitalize">
                  ${element.p_name}
                </h2>
                <p class="my-3">
                 ${element.p_descp}
                </p>
                <p class="font-semibold text-xl font-winky">
                  <i class="fa fa-indian-rupee"></i> ${element.p_price}
                </p>
                <button
                  class="px-5 py-2 ${element.bg_color} text-white mt-5 rounded-md shadow-2xl hover:scale-105 duration-300"
                >
                  Buy Now!
                </button>
              </div>
            </div> `;
  });
});

icecreams.addEventListener("click", () => {
  console.log("hi!!");

  icecreams.classList.add('product_active');
  milkShakes.classList.remove('product_active')
  mousse.classList.remove('product_active')

  let icecreams_list = products_list["icecreams"];
  products.innerHTML = "";
  icecreams_list.map((element, index) => {
    console.log(element.text_color)
    products.innerHTML += ` <div class="flex items-center justify-center gap-10 ${index % 2 == 0 ? 'flex-row' :  'flex-row-reverse'   } " >
              <div class="w-1/3">
              
                <img
                  src=${ element.p_img}
                  alt="ice-cream img"
                  class="w-80 drop-shadow-2xl "
                />
              </div>
              <div class="w-1/3 ${index % 2 == 0 ? 'text-start' :  'text-end'   }">
                <h2 class="font-winky font-bold text-2xl ${element.text_color} capitalize">
                  ${element.p_name}
                </h2>
                <p class="my-3">
                 ${element.p_descp}
                </p>
                <p class="font-semibold text-xl font-winky">
                  <i class="fa fa-indian-rupee"></i> ${element.p_price}
                </p>
                <button
                  class="px-5 py-2 ${element.bg_color} text-white mt-5 rounded-md shadow-2xl hover:scale-105 duration-300"
                >
                  Buy Now!
                </button>
              </div>
            </div> `;
  });
});

let testimonial_list = [
  {
    name: 'Utarsh patel',
    descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae hic velit, commodi maiores aliquid?"
  },
  {
    name: 'Raj Parmar',
    descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae hic velit, commodi maiores aliquid?"
  },
  {
    name: 'Himanshu Sharma',
    descp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In molestiae hic velit, commodi maiores aliquid?"
  }
] 

let testimonial  = document.querySelector("#testimonial");

let show_testimonial = (dot)=>{
  console.log(dot)
      testimonial.innerHTML = `<div>
              <div class="flex items-center gap-3 font-winky text-lg">
                <i class="fa fa-user-circle fa-2x text-pink-400"></i>
                <p>${testimonial_list[dot].name}</p>
              </div>
              <p class="py-2 pl-5">
                <i class="fa-solid fa-quote-left text-pink-500"></i>
                <span
                  > ${testimonial_list[dot].descp}  </span
                >
                <i class="fa-solid fa-quote-right text-pink-500"></i>
              </p>
            </div>`;
}