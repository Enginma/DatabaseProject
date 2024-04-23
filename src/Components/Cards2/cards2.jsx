import React, { useState } from 'react';

const ResultList = (props) => {
    const [storeContents, setStoreContents] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const onClick = async () => {
        try {
            const response = await fetch(`http://localhost:3001/data/storeitems/${props.game.id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setStoreContents(data);
            setShowPopup(true);
        } catch (error) {
            console.error('Failed to fetch data:', error);
            setStoreContents([]);  
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <button className="BotGameButtons" onClick={onClick}>
                {props.game.title}
            </button>
            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <h2>Store Contents</h2>
                        {storeContents.length > 0 ? (
                            <ul>
                                {storeContents.map((item, index) => (
                                    <li key={index}>{item.item_name}</li>  
                                ))}
                            </ul>
                        ) : (
                            <p>No items found.</p>
                        )}
                        <button onClick={handleClosePopup} className="close-button">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResultList;
