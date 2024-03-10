import React from 'react';

const HeaderBar = ({ title }) => {
    return (
        <div style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '30px 20px',
            textAlign: 'center',
            fontSize: '24px'
        }}>
            {title}
        </div>
    );
};

export default HeaderBar;
