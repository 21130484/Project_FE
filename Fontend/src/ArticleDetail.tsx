import React from 'react';

// Define the props interface
interface ArticleDetailProps {
    title: string;
    content: string;
    author: string;
}

// Functional component using React.FC
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

// Add defaultProps in case props are not provided
ArticleDetail.defaultProps = {
    title: 'Untitled Article',
    content: 'No content available',
    author: 'Anonymous'
};

export default ArticleDetail;
