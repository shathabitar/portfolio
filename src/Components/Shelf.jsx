import '../css/Shelf.css';
import ShelfItems from './ShelfItems';

    function Shelf({ title, numberOfShelves, shelfData, link }) {
    return (
        <div className="shelf-container">
        <h2 className="shelf-title">{title}</h2>

        {shelfData.map((items, index) => (
            <div className="shelf-row" key={index}>
            <div className="shelf-items">
                {items.map((item, i) => (
                    <div className="shelf-item" key={i}>
                        <a href={item.link}>
                            <img src={item.src} alt={item.title} className="shelf-img" />
                            <div className="img-title">{item.title}</div>
                        </a>
                </div>
                ))}
            </div>
            <div className="shelf"></div>
            </div>
        ))}
        </div>
    );
    }



export default Shelf;
