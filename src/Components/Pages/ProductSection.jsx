import { CartState } from "../Context/Context"
import Cards from "./Cards"
import "../Styles/ProductSection.scss"


function ProductSection() {

const {state:{data}} = CartState();
  return (
    <div className="wrapper">
        {
            data.map((element)=>(
                <Cards element={element} key={element.id}/>
            ))
        }
    </div>
  )
}

export default ProductSection