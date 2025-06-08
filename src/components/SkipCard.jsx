function SkipCard({ skip, isSelected, onSelect }) {
    const warningBadge = !skip.isAllowedOnRoad
        ? `<div class="badge warning-badge">⚠️ Not Allowed On The Road</div>`
        : '';

    const handleImageError = (e) => {
        e.target.onerror = null; 
        e.target.src = 'https://placehold.co/400x300/cccccc/ffffff?text=Image+Error';
    };

    return (
        <div
            className={`skip-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(skip.id)} 
        >
            <div className="card-image-container">
                <img
                    src={skip.imageUrl}
                    alt={`${skip.size} Yard Skip`}
                    className="card-image"
                    onError={handleImageError}
                />
                <div className="badge size-badge">{skip.size} Yards</div>
                <div dangerouslySetInnerHTML={{ __html: warningBadge }} />
            </div>
            <div className="card-details">
                <h3>{skip.size} Yard Skip</h3>
                <p className="hire-period">{skip.hirePeriod} day hire period</p>
                <p className="price">£{skip.price}</p>
                <button
                    className="select-button"
                    onClick={(e) => {
                        e.stopPropagation();
                        onSelect(skip.id);
                    }}
                >
                    {isSelected ? 'Selected' : 'Select This Skip'}
                </button>
            </div>
        </div>
    );
}

export default SkipCard;