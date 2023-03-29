
import "../Styles/Cards.scss";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import { CartState } from "../Context/Context";


function Cards({element}) {

const {state:{cart},dispatch} =CartState();

  return (
    <div className="cards">
      <div className="cards-wrapper">
       
       
            <Card
            style={{
              width: "18rem",
            }}
            className="individual-card"
          key={element.id}>
            <img alt="Sample" src={element.img} />
            {element.sale &&
                <div className="sale-tag">Sale</div>
                }
            <CardBody>
              <CardTitle tag="h5">{element.title}</CardTitle>
                {
                  element.stars ? (<CardSubtitle className="mb-2 text-muted" tag="h6">⭐⭐⭐⭐⭐</CardSubtitle>):null
                  
                }
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                <span className="oldprice">{element.oldPrice}</span>
                <span className="newprice">{element.NewPrice}</span>
              </CardSubtitle>

              {
                cart.some((p)=>p.id ===element.id) ? 
                (  <Button outline color="danger" onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:element})}}>Remove from Cart</Button>): 
                ( <Button outline color="primary" onClick={()=>{dispatch({type:"ADD_TO_CART",payload:element})}}>Add to Cart</Button>)
              }
             
            
            </CardBody>
          </Card>
      </div>
    </div>
  );
}

export default Cards;
