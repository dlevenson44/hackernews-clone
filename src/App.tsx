import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ArticleDetails } from './components/ArticleDetails'
import { NewsFeed } from './components/NewsFeed'
import { NotFound } from './components/Shared'

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsFeed />} />
        <Route path="/article/:slug" element={<ArticleDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
