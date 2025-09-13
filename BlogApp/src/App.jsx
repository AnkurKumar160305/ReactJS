import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import "./App.css";

function App() {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);

  const main = async () => {
    setLoading(true);
    const res = await fetch(
      "https://newsapi.org/v2/everything?q=apple&from=2025-09-12&to=2025-09-12&sortBy=popularity&apiKey=e71d935f77de45dc953bf2f66f617920"
    );
    const data = await res.json();
    setArr(data.articles || []);
    setLoading(false);
  };

  useEffect(() => {
    main();
  }, []);


//   Pages: Home, Posts, Post Detail, Add Post.
// Use react-router-dom for routing.
// Controlled forms + validation.
  return (
    <>
      <h1 className="main-heading">News App</h1>
      <div className="news-container">
        {loading ? (
          <p>Loading articles...</p>
        ) : (
          arr.map((item, index) => (
            <Blog
              key={index}
              title={item.title}
              image={item.urlToImage}
              content={item.content}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
