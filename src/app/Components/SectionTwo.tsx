import Image from "next/image"

const Section2 = () => {
  return (
    <>
  
    <h1 className="Section2-h1">Our Gallery View</h1>

    <div className='SectionTwo'>



    <div className="image1">
      <Image src="/image/arabic.jpg" alt="images" width={490} height={495}></Image>
    </div>



    <div className="images4">
      <div>
      <Image src="/image/brown.jpg" alt="images" width={350} height={240}></Image>
      <Image src="/image/white.jpg" alt="images" width={350} height={240}></Image>
      </div>

      <div>
      <Image src="/image/smoke.jpg" alt="images" width={350} height={240}></Image>
     
      </div>

    </div>




  </div>
    
    
    
    </>
  )
}

export default Section2