import Header from './components/header'
import Features from './components/features'
import Card from './components/card'
import { ButtonWhite } from './components/button'

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <Features />

      <div id="creations">
        <div className="
          container 
          max-w-6xl 
          mx-auto 
          my-32 
          px-6 
          text-gray-900 
          md:px-0
        ">
          <h2>Our creations</h2>

          <div className="
            flex 
            justify-center 
            mb-20 
            md:justify-between
          ">
            <h2 className='text-4xl text-center uppercase md:text-left md:text-5xl'>
              Our Creations
            </h2>

            <ButtonWhite text='See all' hidden='hidden' />
          </div>

          <div className="
            flex 
            flex-col 
            justify-beteween 
            w-full 
            space-y-6 
            text-2xl 
            text-white 
            my-1
            uppercase 
            md:flex-row 
            md:space-y-0 
            md:space-x-1
            cursor-pointer
          ">
            <Card 
              imgDesk='/images/desktop/image-deep-earth.jpg' 
              imgMob='/images/mobile/image-deep-earth.jpg' 
              imgAlt='image desktop' 
              description='Deep Earth'
            />

            <Card 
              imgDesk='/images/desktop/image-night-arcade.jpg' 
              imgMob='/images/mobile/image-night-arcade.jpg' 
              imgAlt='image desktop' 
              description='Night Arcade'
            />

            <Card  
              imgDesk='/images/desktop/image-soccer-team.jpg' 
              imgMob='/images/mobile/image-soccer-team.jpg' 
              imgAlt='image desktop' 
              description='Soccer TEam VI'
            />

            <Card 
              imgDesk='/images/desktop/image-grid.jpg' 
              imgMob='/images/mobile/image-grid.jpg' 
              imgAlt='image desktop' 
              description='The GRid'
            />
          </div>

          <div className="
            flex 
            flex-col 
            justify-beteween 
            w-full 
            space-y-6 
            text-2xl 
            text-white 
            my-1
            uppercase 
            md:flex-row 
            md:space-y-0 
            md:space-x-1
            cursor-pointer
          ">
            <Card 
              imgDesk='/images/desktop/image-from-above.jpg' 
              imgMob='/images/mobile/image-from-above.jpg' 
              imgAlt='image desktop' 
              description='From Above VI'
            />

            <Card 
              imgDesk='/images/desktop/image-pocket-borealis.jpg' 
              imgMob='/images/mobile/image-pocket-borealis.jpg' 
              imgAlt='image desktop' 
              description='Pocket Borealis'
            />

            <Card  
              imgDesk='/images/desktop/image-curiosity.jpg' 
              imgMob='/images/mobile/image-curiosity.jpg' 
              imgAlt='image desktop' 
              description='The Curiosity'
            />

            <Card 
              imgDesk='/images/desktop/image-fisheye.jpg' 
              imgMob='/images/mobile/image-fisheye.jpg' 
              imgAlt='image desktop' 
              description='Make It Fisheye'
            />
          </div>

          <div className="flex justify-center mt-10">
            <ButtonWhite text='See All' mdHidden='hidden' width='w-full' />
          </div>
        </div>
      </div>
    </main>
    </>
  )
}
