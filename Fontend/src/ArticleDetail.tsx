// src/ArticleDetail.tsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './css/RelatedItem.css';
import './css/App.css';
import { useLocation } from 'react-router-dom';

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
    const [articleTitle, setArticleTitle] = useState(title || 'Tiêu đề');
    const [articleAuthor, setArticleAuthor] = useState(author || 'Tác giả');
    const [articleSapo, setArticleSapo] = useState(sapo || '');
    const [articlePublishDate, setArticlePublishDate] = useState(publishDate || '');
    const [articleDetailCmainHtml, setArticleDetailCmainHtml] = useState(detailCmainHtml || '');
    const [articleDetailHistory, setArticleDetailHistory] = useState(detailHistory || '');
    const [articleRelatedItemsHtml, setArticleRelatedItemsHtml] = useState(relatedItemsHtml || '');
    const [articleDetailTr, setArticleDetailTr] = useState(detailTr || '');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const location = useLocation();
    const { state } = location;

    const fetchArticle = useCallback(async () => {
        if (!currentArticleUrl) {
            setError('Article URL is not provided');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3002/scrape?url=${encodeURIComponent(currentArticleUrl)}`);
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

            setArticleTitle(title || 'Tiêu đề');
            setArticleAuthor(author || 'Tác giả');
            setArticleSapo(sapo || '');
            setArticlePublishDate(publishDate || '');
            setArticleDetailCmainHtml(detailCmainHtml || '');
            setArticleDetailHistory(detailHistory || '');
            setArticleRelatedItemsHtml(relatedItemsHtml || '');
            setArticleDetailTr(detailTr || '');
        } catch (error) {
            console.error('Không thể lấy dữ liệu...:', error);
            setError('Không thể lấy dữ liệu');
        } finally {
            setLoading(false);
        }
    }, [currentArticleUrl]);

    useEffect(() => {
        if (state && state.url) {
            setCurrentArticleUrl(state.url);
        }
    }, [state]);

    useEffect(() => {
        if (currentArticleUrl) {
            setLoading(true);
            fetchArticle();
        }
    }, [currentArticleUrl, fetchArticle]);

    const handleRelatedLinkClick = useCallback((event: MouseEvent) => {
        event.preventDefault();
        const target = event.currentTarget as HTMLAnchorElement;
        let newUrl = target.getAttribute('href');
        if (newUrl && !newUrl.startsWith('https://nld.com.vn')) {
            newUrl = `https://nld.com.vn${newUrl}`;
        }
        setCurrentArticleUrl(newUrl || '');
    }, []);

    useEffect(() => {
        const relatedLinks = document.querySelectorAll<HTMLAnchorElement>('.detail__related a, .detail__cmain-main a');
        relatedLinks.forEach(link => {
            link.addEventListener('click', handleRelatedLinkClick);
        });

        return () => {
            relatedLinks.forEach(link => {
                link.removeEventListener('click', handleRelatedLinkClick);
            });
        };
    }, [handleRelatedLinkClick]);

    if (loading) {
        return <p>Đang tải...</p>;
    }

    if (error) {
        return <p>Lỗi: {error}</p>;
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
            <div className="detail__history" dangerouslySetInnerHTML={{__html: articleDetailHistory}}></div>
            {articleRelatedItemsHtml && (
                <div className="detail__related" dangerouslySetInnerHTML={{__html: articleRelatedItemsHtml}}></div>
            )}
        </div>
    );
};

ArticleDetail.defaultProps = {
    title: 'Tiêu đề',
    author: 'Tác giả',
    sapo: '',
    publishDate: '',
    detailCmainHtml: '',
    articleUrl: '',
    detailHistory: '',
    relatedItemsHtml: '',
    detailTr: '',
};

export default ArticleDetail;
