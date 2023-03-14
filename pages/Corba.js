import Menu from "./Menu";
import { MenuList } from "./MenuList";


export default function Corba(props) {
    return (<>
        <div>
            <div className="row mt-5 mb-5">
                <div className="col-md-4 offset-md-4" style={{}}>
                    <div className="card">
                        <div className="card-header">
                            Çorbalar
                        </div>
                        <div className="card-body align-items-center">
                            {MenuList.filter(p => p.type == 'corba').map(menuItem => {
                                return <div className="menuItem" key={menuItem.name}>
                                    <div><img src={menuItem.image} style={{ marginBottom: "10px" }} alt="Mçorba" /></div>
                                    <h3 style={{ marginTop: "10", justifyContent: "space-between" }}>{menuItem.name}</h3>
                                    <p>{menuItem.price} TL <button className="btn btn-success btn-sm" style={{marginLeft:"15px"}} onClick={() => props.handleAddToCart(menuItem)}>Sepete Ekle</button></p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </>)
}