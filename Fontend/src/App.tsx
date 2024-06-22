// src/App.tsx
import React from 'react';
import './App.css';
import ArticleDetail from './ArticleDetail';

const App: React.FC = () => {
    const article = {
        title: "Exploring the Beauty of React and TypeScript",
        content: "React and TypeScript is a powerful combination for building scalable and maintainable web applications...",
        author: "Jane Doe",
    };

    return (
        <div className="App">
            <ArticleDetail
                title={article.title}
                content={article.content}
                author={article.author}
            />
        </div>
    );
};

export default App;
