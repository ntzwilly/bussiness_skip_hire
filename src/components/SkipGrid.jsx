import SkipCard from './SkipCard';

function SkipGrid({ skipData, selectedSkipId, onSelectSkip }) {
    return (
        <div id="skip-grid" className="skip-grid">
            {skipData.map(skip => (
                <SkipCard
                    key={skip.id}
                    skip={skip}
                    isSelected={skip.id === selectedSkipId}
                    onSelect={onSelectSkip}
                />
            ))}
        </div>
    );
}

export default SkipGrid;