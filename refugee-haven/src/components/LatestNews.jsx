import React, { useEffect, useState } from 'react';

const LatestNews = () => {
    // State for holding news articles
    const [news, setNews] = useState([]);

    useEffect(() => {
        // Fetch news data from an API
        const fetchNews = async () => {
            const response = await fetch(`/news.json`);
            const newsObject = await response.json();
            const newsData = newsObject.data;
            setNews(newsData);
        };

        fetchNews();
    }, []);

    return (
        <>
        { news && (
            <div className="rounded-md shadow-md grid grid-cols-3 gap-4">
                {news.map(article => (
                    <div key={article?.id} className="mb-3">
                        <h3 className="text-lg font-semibold">{article?.title}</h3>
                        <p className="text-sm text-gray-500">{new Date(article?.date).toLocaleDateString()}</p>
                        <p className="text-sm mt-1">{article?.description}</p>
                    </div>
                ))}
            </div>
        )}
        </>
        );

};

export default LatestNews;
