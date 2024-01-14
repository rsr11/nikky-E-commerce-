import FirstPoster from '../Posters/FirstPoster'
import ShowCase from '../Layout/ShowCase'
import SeconPoster from '../Posters/SeconPoster'
import FeatureProducts from '../FeaturesProduct/FeatureProducts'
import { useContext } from 'react'
import AddRemove from '../../Context/AddRemove/AddRemove'
import CartItem from '../CartAndFav/CartItem'
import FavList from '../CartAndFav/FavList'


const CoverPage = () => {


  const context = useContext(AddRemove);
  const {ShowCartBox,showFavBox} = context;


  return (
    <div>
{ShowCartBox  && <CartItem/>}
{showFavBox && <FavList/>}
<FirstPoster/>
<ShowCase/>
<SeconPoster/>
<FeatureProducts/>
    </div>
  )
}

export default CoverPage
