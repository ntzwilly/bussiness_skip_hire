function PageFooter({ selectedSkip, isVisible }) {
    return (
        <footer className={`page-footer ${isVisible ? '' : 'hidden'}`}>
            <div className="disclaimer-note">
                <div className="disclaimer-note-content">
                    Imagery and information shown throughout this website may not reflect the exact shape or size specification,
                    colours may vary, options and/or accessories may be featured at additional cost.
                </div>
            </div>

            <div className="footer-content">
                <div id="footer-details" className="footer-details">
                    {selectedSkip ? (
                        <>
                            <span className="detail-size">{selectedSkip.size} Yard Skip</span>
                            <span className="detail-price">£{selectedSkip.price}</span>
                            <span className="detail-hire-period">{selectedSkip.hirePeriod} day hire</span>
                        </>
                    ) : (
                        <span>No skip selected</span>
                    )}
                </div>
                <div className="footer-buttons">
                    <button className="back-button">Back</button>
                    <button className="continue-button">Continue</button>
                </div>
            </div>
        </footer>
    );
}

export default PageFooter;