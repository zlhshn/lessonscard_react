import { useState } from "react"
import CardStyled from  "../scss/card.module.scss"




const Card = ({data}) => {
const [click,setClick] = useState(false)
if(click){

  return (
<main>
 
{data.map((less)=>(

  <p>{less.hour}</p>
  

))}

</main>
  


  )
}



  return (
    <main>
{data.map((lesson,index)=>(


<div key={lesson.id} className={CardStyled.container}>

<img src={lesson.image} alt=""  className= {CardStyled.img}/>

<button className={CardStyled["btn"]} >{lesson.name}

</button>


</div>



))}


    </main>
  )
}

export default Card