import React, {useEffect, useState} from "react";
import fetchRss from "./News";
import {RssFeed} from "./News";


const RssComponent: React.FC<{ url: string }> = ({ url }) => {
    const [feed, setFeed] = useState<RssFeed | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getFeed = async () => {
            try {
                const data = await fetchRss(url);
                setFeed(data);
            } catch (err) {
                setError('Failed to fetch RSS feed.');
                console.error('Error fetching RSS feed:', err);
            }
        };
        getFeed();
    }, [url]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!feed) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {feed.items.map((value, index) => (
                <div key={index}>
                    <h1>{value.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: value.description }} />
                </div>
            ))}
        </div>
    );
};

export default RssComponent;