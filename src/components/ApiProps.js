import React from 'react'

function ApiProps({ data, handleurlToImage }) {
    return (
        <div>
            <div class="container mt-3">
                <h1>Api Example</h1>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="card" style={{ width: "400px" }}>
                            <img src={item.urlToImage} class="card-img-top" alt="" className="card-image" />
                            <div className="card-content">
                                <h2 class="card-title">{item.title}</h2>
                                <p class="card-text">{item.description}</p>
                                <button class="btn btn-primary" onClick={() => handleurlToImage(item.url)}>See Profile</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ApiProps
