const hasil = document.getElementById("hasil");

// async function ambilData() {
//   const res = await fetch("https://dummyjson.com/products");
//   const data = await res.json();

//   hasil.innerHTML = data.products.map((product) => `
//       <div>
//       <img src="${product.thumbnail}" alt="${product.title}" />
//         <h3>${product.title}</h3>
//         <p>${product.description}</p>
//       </div>
//     `)
//     .join("");
// }

// ambilData();



const data = async () =>{
  try {
    const res =await fetch("https://dummyjson.com/products");
    const data = await res.json();
  hasil.innerHTML=data.map((testing)=>{
    `<div>
      <img src="${testing.thumbnail}" alt="${testing.title}" />
      <h3>${testing.title}</h3>
      <p>${testing.description}</p>
    </div>`
  })
  }
    catch(error){
      console.log(error)
    }
  }
