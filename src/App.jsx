// import { useState } from 'react'
import Header from './Components/Header.jsx'
import Shelf from './Components/Shelf.jsx'
import About from './Components/About.jsx'
import './css/App.css'

function App() {

  return (
    <div>
      <Header/>
      <About />
      <div id='graphic'></div>
      <Shelf 
          title="Graphic Design"
          numberOfShelves={2}
          shelfData={[
            [
              { src: "design/Coming soon.jpg", title: "Coming Soon", link:"/portfolio/design/Coming soon.jpg" },
              { src: "design/eid.jpeg", title: "Eid Poster", link:"https://www.instagram.com/p/C5jSkvjopMt/?igsh=dDZjbWJtY3hmeGY1" },
              { src: "design/invitation.jpg", title: "Invitation Poster" , link:"https://www.instagram.com/p/Cyg6jscowjc/?igsh=Nm11d3lzMmplcmFr"},
              { src: "design/REMINDER!.jpg", title: "Reminder Poster", link:"/portfolio/design/REMINDER!.jpg" },
              { src: "design/FemPreneur Brochure.jpg", title: "FemPreneur Brochure", link:"/portfolio/design/FemPreneur Brochure.jpg" }
            ],
            [
              { src: "design/emc poster.png", title: "EMC Poster", link:"/portfolio/design/emc poster.png" },
              { src: "design/GDSC Lead.jpg", title: "GDSC Lead Poster", link:"https://www.instagram.com/p/C7TmqiuoR0A/?igsh=MTJ6dGg4cXRjdHI0Mg==" },
              { src: "design/SCI FELLOWS.jpg", title: "SCI Fellows Poster", link:"/portfolio/design/SCI FELLOWS.jpg" }
            ]
          ]}
      />
    
      <div id='website'></div>
    <Shelf 
          title="Websites"
          numberOfShelves={1}
          shelfData={[
            [
              { src: "website/LibLend.png", title: "LibLend Website", link:"http://liblend.great-site.net/" },
              { src: "website/MedBridge Doc.png", title: "MedBridge Doctors Website", link:""},
              { src: "website/MedBridge.png", title: "MedBridge Patients Website", link:"" },
            ]
          ]}
      />

      <div id='games'></div>
      <Shelf 
        title="Games"
        numberOfShelves={1}
        shelfData={[
          [
            { src: "application/flappy bird.png", title: "Flappy Bird", link: "https://play.unity.com/en/games/9c437a62-7e47-4a4e-9f3b-71eb7a53623e/flappy-bird" },
            { src: "application/snake game.png", title: "Snake Game", link: "https://play.unity.com/en/games/fb2b0de3-5dea-497d-8d05-219aca1bd3db/snake-game" },
            { src: "application/abtal.png", title: "أبطال الوقاية", link: "https://play.unity.com/en/games/323038b2-c265-4c11-9cde-9526a950403c/abtal-alokaya"}
          ]
        ]}
      />

      <div id='mobile'></div>
      <Shelf 
        title="Mobile Applications"
        numberOfShelves={1}
        shelfData={[
          [
            { src: "application/Children police.png", title: "Children Police App", link: "/portfolio/application/children police.mp4"}
          ]
        ]}
      />

      <div id='research'></div> 
      <Shelf 
        title="Research"
        numberOfShelves={1}
        shelfData={[
          [
            { src: "research/fraud detection.png", title: "Enhancing Fraud Detection with AI", link: "https://drive.google.com/file/d/1Gvh6O6PpyJqL0uHt7ZgAzG7QHZH0xRk_/view?usp=sharing"}
          ]
        ]}
      />


      {/* <iframe src="https://drive.google.com/file/d/1Gvh6O6PpyJqL0uHt7ZgAzG7QHZH0xRk_/preview" width="100%" height="600px"></iframe> */}
      
    </div>

  )
}

export default App
