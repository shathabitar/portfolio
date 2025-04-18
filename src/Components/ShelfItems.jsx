import '../css/Shelf.css';

function ShelfItems({ images = [] }) {
    return (
        <div className="shelf-items">
            
        {images.map((item, index) => (
            <div key={index} className="shelf-item">
            <img
                src={item.src}
                alt={item.alt || item.title}
                className="shelf-img"
                title={item.title}
            />
            <p className="img-title">{item.title}</p>
            </div>
        ))}
        </div>
    );
}

export default ShelfItems;
