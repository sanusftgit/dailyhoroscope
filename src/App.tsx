import React from 'react';
import { BrowserRouter as Router } from './components/Router';
import Layout from './components/Layout/Layout';
import HoroscopePage from './pages/HoroscopePage';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Router.Route path="/" component={HoroscopePage} />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;