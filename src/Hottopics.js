import React, { useState, useEffect } from 'react';

export default function Hottopics() {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/tags')
            .then(response => response.json())
            .then(data => {
                setTags(data.tags);
            })
            .catch(error => console.error('Error fetching tags:', error));
    }, []);

    function handleKeyDown(e) {
        if (e.key !== 'Enter') return;
        const value = e.target.value;
        if (!value.trim()) return;
        setTags([...tags, value]);
        e.target.value = '';
    }

    function removeTag(index) {
        setTags(tags.filter((_, i) => i !== index));
    }

    return (
        <div className="tags-input-container">
            {tags.map((tag, index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{tag}</span>
                    <span className="close" onClick={() => removeTag(index)}>&times;</span>
                </div>
            ))}
            <input
                onKeyDown={handleKeyDown}
                type="text"
                className="tags-input"
                placeholder="Hot Topics"
            />
        </div>
    );
}
