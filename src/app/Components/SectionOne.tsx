import Card from "./Card"



const SectionOne = () => {

  const Cards = [
    { src: "/image/per.jpg", perfumeName: "Jimmy choo", price: "Price(30$)" },
    { src: "/image/purpleline.jpg", perfumeName: "Thirey mugler", price: "Price(35$)" },
    { src: "/image/purple.jpg", perfumeName: "Hugo boss ink", price: "Price(25$)" },
    { src: "/image/greenbottle.jpg",perfumeName: "Paco rabanoo", price: "Price(28$)" },
    { src: "/image/blackper.jpg", perfumeName: "Calvien Kalien", price: "Price(53$)" },
    { src: "/image/perfumesssss.jpg", perfumeName: "Britni spears", price: "Price(36$)" },
    { src:"/image/arabic.jpg" ,perfumeName:"darham-2",price:"price(40$)"},
  ];
  
  return (
    <>
    <div className='Section-one'>

<h1 className='secOne-h1'>What we offer to you</h1>

<div className="Cards-Div">

{Cards.map((card,index)=> <Card props={card} key={index}/> )}

</div>




    </div>
    
    
    
    </>
  )
}

export default SectionOne