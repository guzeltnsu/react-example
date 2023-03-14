import { MenuList } from "./MenuList";


export default function AnaYemek(props) {
    return (<>
        <div>
            <div className="row mt-5">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-header">
                            Ara Sıcaklar
                        </div>
                        <div className="card-body">
                            {MenuList.filter(p => p.type == 'anaYemek').map(menuItem => {
                                return <div className="menuItem">
                                    <div><img src={menuItem.image} /></div>
                                    <h3>{menuItem.name}</h3>
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
