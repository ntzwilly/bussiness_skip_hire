import { useState, useEffect } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';
import PageHeader from './components/PageHeader';
import SkipGrid from './components/SkipGrid';
import PageFooter from './components/PageFooter';

function App() {
    const API_URL = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

    const skipImageMap = {
        4: '/images/skips/4-yarder-skip.jpg',
        6: '/images/skips/6-yarder-skip.jpg',
        8: '/images/skips/8-yarder-skip.jpg',
        10: '/images/skips/10-yarder-skip.jpg',
        12: '/images/skips/12-yarder-skip.jpg',   
        14: '/images/skips/14-yarder-skip.jpg',
        16: '/images/skips/16-yarder-skip.jpg',
        20: '/images/skips/20-yarder-skip.jpg',
        40: '/images/skips/40-yarder-skip.jpg',
    };

    const [skipData, setSkipData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedSkipId, setSelectedSkipId] = useState(null);
    const [selectedSkip, setSelectedSkip] = useState(null);

    useEffect(() => {
        const fetchSkipData = async () => {
            try {
                setLoading(true);
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                const transformedData = data.map(item => ({
                    id: item.id,
                    size: item.size,
                    hirePeriod: item.hire_period_days,
                    price: Math.round(item.price_before_vat * (1 + item.vat / 100)),
                    isAllowedOnRoad: item.allowed_on_road,
                    imageUrl: skipImageMap[item.size] || `https://placehold.co/400x300/cccccc/ffffff?text=${item.size}+Yard+Default`
                }));

                setSkipData(transformedData);
            } catch (err) {
                console.error("Failed to fetch skip data:", err);
                setError("Failed to load skip data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchSkipData();
    }, []);

    useEffect(() => {
        if (selectedSkipId !== null && skipData.length > 0) {
            const currentSelectedSkip = skipData.find(s => s.id === selectedSkipId);
            setSelectedSkip(currentSelectedSkip);
        } else {
            setSelectedSkip(null);
        }
    }, [selectedSkipId, skipData]);

    const handleSelectSkip = (id) => {
        if (selectedSkipId === id) {
            setSelectedSkipId(null);
        } else {
            setSelectedSkipId(id);
        }
    };

    if (loading) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '50px' }}>
                <p>Loading skip sizes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                <p>{error}</p>
            </div>
        );
    }

    if (skipData.length === 0 && !loading && !error) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '50px' }}>
                <p>No skip sizes available for this location.</p>
            </div>
        );
    }

    return (
        <div className="App">
            <div className="container">
                <ProgressBar />
                <main>
                    <PageHeader />
                    <SkipGrid
                        skipData={skipData}
                        selectedSkipId={selectedSkipId}
                        onSelectSkip={handleSelectSkip}
                    />
                </main>
            </div>
            <PageFooter selectedSkip={selectedSkip} isVisible={selectedSkipId !== null} />
        </div>
    );
}

export default App;