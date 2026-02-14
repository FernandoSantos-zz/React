import React, { useState } from 'react';
import newsData from './db.json';
import Header from './components/header'
import NewsList from './components/news_list';

const App = () => {
    const [filtered, setFiltered] = useState(newsData);

    const getKeywords = (event) => {
        let keyword = event.target.value;
        let filteredNews = newsData.filter((item) => {
            return item.title.indexOf(keyword) > -1
        });
        setFiltered(filteredNews);
    }

    return (
        <div>
            <Header keywords={getKeywords} />
            <NewsList news={filtered}>
                <h3>The news are:</h3>
            </NewsList>
        </div>
    )
}

export default App;
