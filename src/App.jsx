import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './components/Menu/index'


function App() {

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React component library<span className="react-plus">++</span></h1>
      
      <Menu>
        <Menu.Button>Badges</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>A badge</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu>
        <Menu.Button>Banners</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>A Banner</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu>
        <Menu.Button>Testimonials</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>A Testimonial</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu>
        <Menu.Button>Cards</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>A card</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}

export default App
