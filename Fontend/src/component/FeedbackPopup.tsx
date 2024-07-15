import React, { useState } from 'react';
import axios from 'axios';
import '../css/FeedbackPopup.css';

const FeedbackPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('');

    const togglePopup = () => setIsOpen(!isOpen);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3002/feedback', { name, content });
            setStatus('Phản hồi gửi thành công!');
            setName('');
            setContent('');
        } catch (error) {
            setStatus('Phản hồi gửi thất bại.');
        }
    };

    return (
        <div className="feedback-popup">
            <button className="feedback-button" onClick={togglePopup}>
                Phản hồi
            </button>
            {isOpen && (
                <div className="popup-form">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Tên:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </label>
                        <label>
                            Nội dung:
                            <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                        </label>
                        <button type="submit">Gửi</button>
                        <button type="button" onClick={togglePopup}>Đóng</button>
                    </form>
                    {status && <p>{status}</p>}
                </div>
            )}
        </div>
    );
};

export default FeedbackPopup;
