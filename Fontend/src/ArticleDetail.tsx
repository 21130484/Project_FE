import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ArticleDetailProps {
    title?: string;
    content?: string;
    author?: string;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ title, content, author }) => {
    const [articleTitle, setArticleTitle] = useState(title || 'Untitled Article');
    const [articleContent, setArticleContent] = useState(content || '');
    const [articleAuthor, setArticleAuthor] = useState(author || 'Anonymous');
    const [articleSapo, setArticleSapo] = useState('');
    const [articleImages, setArticleImages] = useState<{ src: string; alt: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await axios.get('http://localhost:3002/scrape');
                const { title, content, author, sapo, images } = response.data;

                setArticleTitle(title || 'Untitled Article');
                setArticleContent(content || '');
                setArticleAuthor(author || 'Anonymous');
                setArticleSapo(sapo || '');
                setArticleImages(images || []);

            } catch (error) {
                console.error('Error fetching the article:', error);
                setError('Failed to fetch article');
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, []);

    if (loading) {
        return <p>Loading...</p>; // You can customize the loading indicator here
    }

    if (error) {
        return <p>Error: {error}</p>; // Display an error message if fetching fails
    }

    return (
        <div className="article-detail">
            <h1>{articleTitle}</h1>
            <p><strong>{articleAuthor}</strong> </p>
            <p><strong>{articleSapo}</strong></p>
            <div className="content" dangerouslySetInnerHTML={{ __html: articleContent }}></div>
            <div className="images">
                {articleImages.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
        </div>
    );
};

ArticleDetail.defaultProps = {
    title: 'Untitled Article',
    content: 'No content available',
    author: 'Anonymous'
};

export default ArticleDetail;
