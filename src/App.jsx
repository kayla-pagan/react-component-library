import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './components/Menu/index'
import Button from './components/Button/Button'
import Banner from './components/Banner/Banner'
import Testimonial from './components/Testimonial/Testimonial'
import sampleImage from './assets/sample-testimonial-img.jpg'

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
        <Menu.Dropdown className="button-grid">
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
            <Banner status="success" title="Congratulations!"></Banner>
          </Menu.Item>
          <Menu.Item>
            <Banner status="warning" title="Attention">
              Random info about this warning.
            </Banner>
          </Menu.Item>
          <Menu.Item>
            <Banner status="error" title="There is a problem with your application"></Banner>
          </Menu.Item>
          <Menu.Item>
            <Banner status="update" title="Update available">
              Information about the update that is available
            </Banner>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <Menu>
        <Menu.Button>Testimonials</Menu.Button>
        <Menu.Dropdown className="testimonial">
          <Menu.Item>
            <Testimonial name="May Andersons" company="Workcation" position="CTO">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nemo expedita voluptas culpa sapiente alias molestiae. 
              Numquam corrupti in laborum sed rerum et corporis.”
            </Testimonial>

            <Testimonial 
              name="May Andersons" 
              company="Workcation" 
              position="CTO"
              src={sampleImage}
              alt="May Anderson smiling at the camera"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed urna nulla vitae laoreet augue. Amet feugiat est integer 
              dolor auctor adipiscing nunc urna, sit. 
            </Testimonial>
          </Menu.Item>
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
