// src/ArticleDetail.tsx
import React from 'react';

interface ArticleDetailProps {
    title: string;
    content: string;
    author: string;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ title, content, author }) => {
    return (
        <div className="article-detail">
            <h1>{title}</h1>
            <p><strong>Author:</strong> {author}</p>
            <div className="content">
                {content}
            </div>
        </div>
    );
};

export default ArticleDetail;
