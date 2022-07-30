import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const titles = posts.map((post) => {
    return (
      <>
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
      </>
    );
  });

  return (
    <div className="App">
      <Navbar />
      <h1>Simple React App</h1>
      {titles}
    </div>
  );
}

export default App;
