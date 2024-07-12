import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface RelatedItem {
    relatedTitle: string;
    relatedLink: string;
    relatedSapo: string;
    relatedImgSrc: string;
}

interface ArticleDetailProps {
    title?: string;
    author?: string;
    sapo?: string;
    publishDate?: string;
    detailCmainHtml?: string;
    detailHistory?: string;
    videoUrl?: string;
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
                                                         videoUrl,
                                                         articleUrl,
                                                         detailHistory,
                                                         relatedItemsHtml,
                                                         detailTr
                                                     }) => {
    const [articleTitle, setArticleTitle] = useState(title || 'Untitled Article');
    const [articleAuthor, setArticleAuthor] = useState(author || 'Anonymous');
    const [articleSapo, setArticleSapo] = useState(sapo || '');
    const [articlePublishDate, setArticlePublishDate] = useState(publishDate || '');
    const [articleDetailCmainHtml, setArticleDetailCmainHtml] = useState(detailCmainHtml || '');
    const [articleVideoUrl, setArticleVideoUrl] = useState(videoUrl || '');
    const [articleDetailHistory, setDetailHistory] = useState(detailHistory || '');
    const [articleRelatedItemsHtml, setArticleRelatedItemsHtml] = useState(relatedItemsHtml || '');
    const [articleDetailTr, setArticleDetailTr] = useState(detailTr || '');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!articleUrl) {
                setError('Article URL is not provided');
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`http://localhost:3002/scrape?url=${articleUrl}`);
                const { title, author, sapo, publishDate, detailCmainHtml, videoUrl, detailHistory, relatedItemsHtml, detailTr } = response.data;

                setArticleTitle(title || 'Untitled Article');
                setArticleAuthor(author || 'Anonymous');
                setArticleSapo(sapo || '');
                setArticlePublishDate(publishDate || '');
                setArticleDetailCmainHtml(detailCmainHtml || '');
                setArticleVideoUrl(videoUrl || '');
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
    }, [articleUrl]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="article-detail">
            <h1><a href={articleUrl} target="_blank" rel="noopener noreferrer">{articleTitle}</a></h1>
            <p><strong>{articleAuthor}</strong></p>
            <p><strong>{articleSapo}</strong></p>
            <p><strong>{articlePublishDate}</strong></p>
            {articleVideoUrl && (
                <div className="video-container">
                    <video controls>
                        <source src={articleVideoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
            <div className="detail__cmain-main" dangerouslySetInnerHTML={{ __html: articleDetailCmainHtml }}></div>
            <div className="detail__tr" dangerouslySetInnerHTML={{ __html: articleDetailTr }}></div>
            <div>
                <div className="detail__history" dangerouslySetInnerHTML={{ __html: articleDetailHistory }}></div>
            </div>
            <div>
                <div className="detail__related" dangerouslySetInnerHTML={{ __html: articleRelatedItemsHtml }}></div>
            </div>
        </div>
    );
};

ArticleDetail.defaultProps = {
    title: 'Untitled Article',
    author: 'Anonymous',
    sapo: '',
    publishDate: '',
    detailCmainHtml: '',
    videoUrl: '',
    articleUrl: 'https://nld.com.vn/diem-nong-xung-dot-ngay-9-7-nga-dung-chien-thuat-ten-lua-moi-ukraine-nhan-hang-nong-tu-anh-196240709072409048.htm',
    detailHistory: '',
    relatedItemsHtml: '',
    detailTr: ''
};

export default ArticleDetail;
