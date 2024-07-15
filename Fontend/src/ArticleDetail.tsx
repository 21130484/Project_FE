// src/ArticleDetail.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ArticleDetailProps {
    title?: string;
    author?: string;
    sapo?: string;
    publishDate?: string;
    detailCmainHtml?: string;
    detailHistory?: string;
    articleUrl?: string;
    relatedItemsHtml?: string;
    detailTr?: string;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({
                                                         title,
                                                         author,
                                                         sapo,
                                                         publishDate,
                                                         detailCmainHtml,
                                                         articleUrl,
                                                         detailHistory,
                                                         relatedItemsHtml,
                                                         detailTr
                                                     }) => {
    const [currentArticleUrl, setCurrentArticleUrl] = useState(articleUrl);
    const [articleTitle, setArticleTitle] = useState(title || 'Untitled Article');
    const [articleAuthor, setArticleAuthor] = useState(author || 'Anonymous');
    const [articleSapo, setArticleSapo] = useState(sapo || '');
    const [articlePublishDate, setArticlePublishDate] = useState(publishDate || '');
    const [articleDetailCmainHtml, setArticleDetailCmainHtml] = useState(detailCmainHtml || '');
    const [articleDetailHistory, setDetailHistory] = useState(detailHistory || '');
    const [articleRelatedItemsHtml, setArticleRelatedItemsHtml] = useState(relatedItemsHtml || '');
    const [articleDetailTr, setArticleDetailTr] = useState(detailTr || '');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!currentArticleUrl) {
                setError('Article URL is not provided');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3002/scrape?url=${encodeURIComponent(currentArticleUrl)}`);
                const { title, author, sapo, publishDate, detailCmainHtml, detailHistory, relatedItemsHtml, detailTr } = response.data;

                setArticleTitle(title || 'Untitled Article');
                setArticleAuthor(author || 'Anonymous');
                setArticleSapo(sapo || '');
                setArticlePublishDate(publishDate || '');
                setArticleDetailCmainHtml(detailCmainHtml || '');
                setDetailHistory(detailHistory || '');
                setArticleRelatedItemsHtml(relatedItemsHtml || '');
                setArticleDetailTr(detailTr || '');
            } catch (error) {
                console.error('Error fetching the article:', error);
                setError('Failed to fetch article');
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [currentArticleUrl]);

    useEffect(() => {
        const handleRelatedLinkClick = (event: MouseEvent) => {
            event.preventDefault();
            const target = event.currentTarget as HTMLAnchorElement;
            const newUrl = target.getAttribute('href');
            if (newUrl) {
                setCurrentArticleUrl(newUrl);
            }
        };

        const relatedLinks = document.querySelectorAll<HTMLAnchorElement>('.detail__related a, .detail__cmain-main a');

        relatedLinks.forEach(link => {
            link.addEventListener('click', handleRelatedLinkClick);
        });

        // Cleanup function to remove event listeners
        return () => {
            relatedLinks.forEach(link => {
                link.removeEventListener('click', handleRelatedLinkClick);
            });
        };
    }, [articleRelatedItemsHtml, articleDetailCmainHtml]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    // Extract video URL from the raw HTML
    const videoSrc = articleDetailCmainHtml?.match(/data-vid="([^"]+)"/)?.[1];
    const videoCaption = articleDetailCmainHtml?.match(/<p class="" data-placeholder="nhập chú thích" style="text-align: center;">([^<]+)<\/p>/)?.[1];

    return (
        <div className="article-detail">
            <h1><a href={currentArticleUrl} target="_blank" rel="noopener noreferrer">{articleTitle}</a></h1>
            <p><strong>{articleAuthor}</strong></p>
            <p><strong>{articleSapo}</strong></p>
            <p><strong>{articlePublishDate}</strong></p>
            <div className="detail__cmain-main" dangerouslySetInnerHTML={{ __html: articleDetailCmainHtml }}></div>
            {videoSrc && (
                <div className="video-container">
                    <iframe
                        width="600"
                        height="400"
                        src={`https://nld.mediacdn.vn/${videoSrc}`}
                        frameBorder="0"
                        allowFullScreen
                        title="Video"
                    ></iframe>
                    {videoCaption && <p style={{ textAlign: 'center' }}>{videoCaption}</p>}
                </div>
            )}
            <div className="detail__tr" dangerouslySetInnerHTML={{ __html: articleDetailTr }}></div>
            <div>
                <div className="detail__history" dangerouslySetInnerHTML={{ __html: articleDetailHistory }}></div>
            </div>
            <div className="detail__related" dangerouslySetInnerHTML={{ __html: articleRelatedItemsHtml }}></div>
        </div>
    );
};

ArticleDetail.defaultProps = {
    title: 'Untitled Article',
    author: 'Anonymous',
    sapo: '',
    publishDate: '',
    detailCmainHtml: '',
    articleUrl: '',
    detailHistory: '',
    relatedItemsHtml: '',
    detailTr: '',
};

export default ArticleDetail;
