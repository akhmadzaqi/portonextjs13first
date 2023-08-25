import Image from 'next/image'
export default function About() {
    return (
        <div className="container mx-auto h-screen">
          <div className="grid grid-cols-2 mx-auto">
          <h1 className="font-figtree justify-center font-bold text-blue-950 text-5xl col-span-2 pb-2 flex">About<span className="animate-waving-hand">👋🏻</span></h1>
          <p className="font-figtree text-center font-medium underline  text-blue-950 text-xm col-span-2 pb-10">I hope to find interesting works and information here</p>
            <div><Image className='mx-auto' src="/images/about.png" alt="Gambar" width={200} height={200} /></div>
            <div className='mx-auto translate-y-9 -translate-x-24'>
                <p className='font-figtree text-blue-950'>Hello, I'm Akhmad Zaqi! I'm a passionate <span className='font-bold'>Front-End Developer and Graphic Designer</span>. I love creating beautiful and responsive websites that provide a great user experience. My journey in the world of web development and design has been amazing, and I'm always eager to learn and improve my skills. </p>
            </div>
          </div>
      </div>
    )
  }