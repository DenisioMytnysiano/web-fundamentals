import './catalogueItem.css';

export default function CatalogueItem({image, name, price}){
    
    return (
        <div className="CatalogueItem">
            <div className="ImageWrapper">
                <img className="CatalogueItemImage" src={image}/>
            </div>
            <div className="NameLabel">{name}</div>
            <div className="PriceLabel">Price:{price}</div>
        </div>
    )
}