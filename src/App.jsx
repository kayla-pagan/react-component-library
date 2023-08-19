import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './components/Menu/index'
import Button from './components/Button/Button'
import Banner from './components/Banner/Banner'

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
          <Menu.Item>
            <Button className="button-default">Badge</Button>
          </Menu.Item>
          <Menu.Item>
          <Button className="button-default" shape="pill" variant="red">Badge</Button>
          </Menu.Item>
          <Menu.Item>
          <Button className="button-default" variant="yellow">Badge</Button>
          </Menu.Item>
          <Menu.Item>
            <Button className="button-default" variant="blue" shape="pill">Badge</Button>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu>
        <Menu.Button>Banners</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>
            <Banner variant="success"></Banner>
          </Menu.Item>
          <Menu.Item>
            <Banner variant="warning"></Banner>
          </Menu.Item>
          <Menu.Item>
            <Banner variant="error"></Banner>
          </Menu.Item>
          <Menu.Item>
            <Banner variant="update"></Banner>
          </Menu.Item>
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
