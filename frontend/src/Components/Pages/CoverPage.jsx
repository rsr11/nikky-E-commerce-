import FeatureProducts from '../FeaturesProduct/FeatureProducts'
import { useContext } from 'react'
import AddRemove from '../../Context/AddRemove/AddRemove'
import CartItem from '../CartAndFav/CartItem'
import FavList from '../CartAndFav/FavList'
import FirstCover from "../../Assets/coverImg/FirstCover.mp4";
import NikeTeeCover from "../../Assets/coverImg/NikeTeeCover.jpg"
import SneakerCover from "../../Assets/coverImg/SneakersCover.jpg"
import FootShoesCover from "../../Assets/coverImg/footballShoesCover.jpg";

import SecondCover from "../../Assets/coverImg/SecondCover.jpg"



const ImgTittle = (props)=>{
  return (
   <div className='bg-black w-80 rounded-b-xl h-12 border-t-2 border-white text-white flex justify-center items-center'>{props.title}</div>
  ) 
}


const ItemBox = ()=>{
   return (
     <section className='flex flex-col items-center gap-10 min-[1276px]:flex-row min-[1276px]:justify-evenly text-xl'>
       <div>
           <img src={NikeTeeCover} className='h-96 rounded-t-xl w-80 min-[1276px]:-mt-3 mt-6' alt="" />
           <ImgTittle title="Hoodies"/>
       </div>
       <div>
           <img src={SneakerCover} className='h-80 rounded-t-xl min-[1276px]:mt-12 w-80' alt="" />
           <ImgTittle title="Sneakers" />
       </div>
       <div>
           <img src={FootShoesCover} className='h-96 rounded-t-xl w-80 min-[1276px]:-mt-3' alt="" />
           <ImgTittle title="Football shoes" />
       </div>
     </section>
   )
}




const CoverPage = () => {


  const context = useContext(AddRemove);
  const {ShowCartBox,showFavBox} = context;


  return (
    <div>

{ShowCartBox  && <CartItem/>}
{showFavBox && <FavList/>}

<video autoPlay loop muted className='mt-6 lg:h-[70vh] w-fit mx-auto rounded-xl'  >
        <source src={FirstCover} />
      </video>


      <section className='mt-16'>
      <section>
<p className='text-center text-3xl'>Shop what you desire most!!</p>
<h1 className='text-center font-extrabold text-5xl sm:text-7xl'>Bring your hands,</h1>
<p className='text-center text-3xl'>shop now!</p>
      </section>

     {/* <Dialogue/>  */}


     <ItemBox/>  
    </section>

{/* <ShowCase/> */}


<img src={SecondCover} className='mt-20 rounded-xl' alt="" /> 
{/* <SeconPoster/> */}
<FeatureProducts/>
    </div>
  )
}

export default CoverPage
