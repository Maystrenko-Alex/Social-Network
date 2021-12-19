import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src='data:image/png;base64,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' alt='images' />
      </header>
      <nav className='nav'>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Message</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img alt='images' src='https://images.ctfassets.net/hrltx12pl8hq/3BkYwz5RAnnN1Q2k7FYMir/5bc8172b8597e5c3d7fe02daa15dd371/Flex_lite_CMS_LIHP.jpg?fit=fill&w=840&h=350' />
        </div>
        <div>
          Ava+description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post1
            </div>
            <div>
              post2
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
