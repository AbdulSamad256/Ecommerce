import {useState , useEffect} from "react"
import axios from "axios"
import ProductCard from "../Component/ProductCard";
import CategoryChip from "../Component/CategoryChip";
// import { InfinitySpin } from 'react-loader-spinner'
import Footer from "../Component/Footer";




function Products(){

  const [products , setProducts] = useState([]);
  const [category , setcategory] = useState([]);
  const [loading , setLoading] = useState(true);
  const [chosenCategory , setChosenCategory] = useState("All");
  


   useEffect (()=>{
    const url = 
      chosenCategory === "All" ?
      "https://dummyjson.com/products" :
      `https://dummyjson.com/products/category/${chosenCategory}`



     axios.
     get(url)
     .then((res)=>{
    // console.log(res.data.products)
    setProducts(res.data.products)
    setLoading (false)

     })
    .catch((err)=>{ console.log(err) 
    setLoading (false)
    })


    },[chosenCategory])

    useEffect (()=>{
      axios.
      get('https://dummyjson.com/products/categories')
      .then((res)=>{
     setcategory(res.data)
   //   console.log("category=>" , res)
     setLoading (false)
 
      })
     .catch((err)=>{ console.log(err) 
     setLoading (false)
     })
 
 
     },[])
    
   //  console.log("products=>>" ,products)

    return(
        <div className="container mx-auto">

          
         {loading ? (
                       
            <h1 className="text-center text-3xl">Loading....</h1>
         ) : (
          <div>


            <div className="flex flex-wrap">
             <CategoryChip 
             onClick = {()=> setChosenCategory("All")}
             isChosen ={chosenCategory === "All"}
             category ={{
               slug:"All",
               name:"All",
               
              }}  />

            {category.map((category) => 
             <CategoryChip 
             onClick = {()=> setChosenCategory(category.slug)}
             isChosen = {category.slug === chosenCategory}
             category ={category} 
             key={category.slug}  />)} 

            </div>
            <div className="flex flex-wrap -m-4" >
               {products.map((item) =>( < ProductCard item={item} key= {item.id}/>
               ))}

               </div>
            </div>
         )}
        <Footer/>
        </div>

    );
}

export default Products;


