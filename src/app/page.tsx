import Image from 'next/image'
import About from './about/page'

export default function Home() {
  return (
    <div>
          <div className="container m-5 p-5 mx-auto grid lg:grid-cols-2 md:grid-cols-1 justify-center items-center h-screen -mb-20">
      <div className="mx-auto -translate-y-14 text-center lg:text-left">
      <h2 className="font-figtree font-bold lg:text-4xl text-3xl text-blue-950 text-center lg:text-left ">Akhmad Zaqi Noor.</h2>
      <h1 className="pb-2 font-figtree font-bold text-transparent lg:text-5xl text-4xl bg-clip-text bg-gradient-to-r from-[#FF35C6] to-[#FF8049]">Front-End Developer &<br />Graphic designer</h1>
      <p className="font-figtree font-normal text-slate-800">I <span className="font-bold">Graphic Designer & Code Web</span>, it such a happiness for me. so, let me to help you!</p>
      </div>
      <div className="lg:m-10 md:m-5 -mt-44 grid grid-cols-4 lg:-translate-x-12">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Image className='-translate-x-2 -translate-y-4 scale-75 hover:-rotate-45 transition' src="/images/linkedin.png" alt="Gambar" width={200} height={200} />
        </div>
        <div className="col-span-2">
          <Image className='scale-150' src="/images/hero.png" alt="Gambar" width={600} height={600} />
        </div>
        <div>
          <Image className='translate-x-8 -translate-y-6 scale-75 hover:rotate-45 transition' src="/images/tik.png" alt="Gambar" width={200} height={200} />
        </div>
        <div><Image className='translate-x-4 -translate-y-16 scale-75 hover:-rotate-45 transition' src="/images/instagram.png" alt="Gambar" width={200} height={200} /></div>
        <div className='col-span-2'></div>
        <div><Image className='translate-x-8 -translate-y-20 scale-75 hover:rotate-45 transition' src="/images/youtube.png" alt="Gambar" width={200} height={200} /></div>
        </div>
    </div>
    <div><About/></div>
    </div>
  )
}
