import React from 'react';

export default function Video() {
    return (
        <div>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/sMbq6ekGwTY?start=2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video"
            ></iframe>
        </div>
    );
}
