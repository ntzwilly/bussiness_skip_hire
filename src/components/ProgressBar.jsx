function ProgressBar() {
    return (
        <header>
            <div className="progress-bar">
                <div className="progress-step completed"><div className="step-circle">✓</div><p className="step-label">Postcode</p></div>
                <div className="progress-line completed"></div>
                <div className="progress-step completed"><div className="step-circle">✓</div><p className="step-label">Waste Type</p></div>
                <div className="progress-line"></div>
                <div className="progress-step active"><div className="step-circle">3</div><p className="step-label">Select Skip</p></div>
                <div className="progress-line"></div>
                <div className="progress-step incomplete"><div className="step-circle">4</div><p className="step-label">Permit Check</p></div>
                <div className="progress-line"></div>
                <div className="progress-step incomplete"><div className="step-circle">5</div><p className="step-label">Choose Date</p></div>
                <div className="progress-line"></div>
                <div className="progress-step incomplete"><div className="step-circle">6</div><p className="step-label">Payment</p></div>
            </div>
        </header>
    );
}

export default ProgressBar;