import './App.css'
import Blog from './Components/Blog/Blog'
import BlogContainer from './Components/BlogContainer/BlogContainer'
import Header from './Components/Header/Header'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <BlogContainer></BlogContainer>
      <Blog></Blog>
    </div>
  )
}

export default App
