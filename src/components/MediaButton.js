import React from 'react'

const MediaButton = props => {
    return (
        <>
            <button style={{ width: '100%', backgroundColor: props.backgroundColor, color: 'white', padding: '5px 7px', borderRadius: '4px', textAlign: 'center', margin: 'auto', marginBottom: '10px' }}>
                {/* This should be a Link component */}
                <a style={{ color: 'white', fontWeight: 'bold' }} href="https://facebook.com/login">
                    {props.text}
                </a>
            </button>
        </>
    )
}
export default MediaButton