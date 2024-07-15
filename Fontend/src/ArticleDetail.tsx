// src/ArticleDetail.tsx
import React, { useState, useEffect, useCallback } from 'react';
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
    const [currentArticleUrl, setCurrentArticleUrl] = useState(articleUrl || '');
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

    const fetchArticle = useCallback(async (url: string) => {
        if (!url) {
            setError('Article URL is not provided');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3002/scrape?url=${encodeURIComponent(url)}`);
            const {
                title,
                author,
                sapo,
                publishDate,
                detailCmainHtml,
                detailHistory,
                relatedItemsHtml,
                detailTr
            } = response.data;

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
    }, []);

    useEffect(() => {
        if (currentArticleUrl) {
            setLoading(true);
            fetchArticle(currentArticleUrl);
        }
    }, [currentArticleUrl, fetchArticle]);

    const handleRelatedLinkClick = useCallback((event: MouseEvent) => {
        event.preventDefault();
        const target = event.currentTarget as HTMLAnchorElement;
        let newUrl = target.getAttribute('href');
        console.log('Link clicked:', newUrl); // Debugging log
        if (newUrl) {
            if (!newUrl.startsWith('https://nld.com.vn')) {
                newUrl = `https://nld.com.vn${newUrl}`;
            }
            console.log('Updated URL:', newUrl); // Debugging log
            setCurrentArticleUrl(newUrl);
        }
    }, []);

    useEffect(() => {
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
    }, [handleRelatedLinkClick, articleRelatedItemsHtml, articleDetailCmainHtml]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    // Extract video URL from the raw HTML
    const videoSrcMatch = articleDetailCmainHtml?.match(/data-vid="([^"]+)"/);
    const videoSrc = videoSrcMatch ? videoSrcMatch[1] : null;
    const videoCaptionMatch = articleDetailCmainHtml?.match(/<p data-placeholder="nhập chú thích">([^<]+)<\/p>/);
    const videoCaption = videoCaptionMatch ? videoCaptionMatch[1] : null;

    return (
        <div className="article-detail">
            <h1><a href={currentArticleUrl} target="_blank" rel="noopener noreferrer">{articleTitle}</a></h1>
            <p><strong>{articleAuthor}</strong></p>
            <p><strong>{articlePublishDate}</strong></p>
            <p><strong>{articleSapo}</strong></p>
            <div className="detail__cmain-main" dangerouslySetInnerHTML={{__html: articleDetailCmainHtml}}></div>
            {videoSrc && (
                <div className="video-container">
                    <video
                        width="600"
                        height="400"
                        controls
                        src={`https://${videoSrc}`}
                        title="Video"
                    ></video>
                    {videoCaption && <p style={{textAlign: 'center'}}>{videoCaption}</p>}
                </div>
            )}
            <div className="detail__tr" dangerouslySetInnerHTML={{__html: articleDetailTr}}></div>
            <div>
                <div className="detail__history" dangerouslySetInnerHTML={{__html: articleDetailHistory}}></div>
            </div>
            {articleRelatedItemsHtml && (
                <div className="detail__related" dangerouslySetInnerHTML={{__html: articleRelatedItemsHtml}}></div>
            )}
        </div>
    );
}
    ArticleDetail.defaultProps = {
    title: 'Untitled Article',
    author: 'Anonymous',
    sapo: '',
    publishDate: '',
    detailCmainHtml: '',
    articleUrl: 'https://nld.com.vn/nong-giai-de-thi-ngu-van-tot-nghiep-thpt-196240627110816359.htm',
    detailHistory: '',
    relatedItemsHtml: '',
    detailTr: '',
};

export default ArticleDetail;
