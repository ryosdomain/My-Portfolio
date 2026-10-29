import React from 'react'

const Marquee = () => {
  return (
    <div>
        <div className="border-y border-black/20 bg-[#17141f] py-4 text-[#f8f7fc] overflow-hidden flex ">
        <div className='animate-marquee flex'>
            
        <div className="marquee flex text-nowrap w-max items-center ms-10 gap-10 text-sm font-bold tracking-[0.18em] ">
          {[...Array(3)].flatMap((_, i) =>
            ['WORDPRESS', 'REACT.JS', 'TAILWIND CSS', 'CUSTOM DEVELOPMENT'].map((item) => (
              <span key={`${i}-${item}`} className="flex items-center gap-10">
                {item} <span className="text-[#a78bfa]">✦</span>
              </span>
            )),
          )}
        </div>
        <div className="marquee flex text-nowrap  w-max items-center ms-10 gap-10 text-sm font-bold tracking-[0.18em] ">
          {[...Array(3)].flatMap((_, i) =>
            ['WORDPRESS', 'REACT.JS', 'TAILWIND CSS', 'CUSTOM DEVELOPMENT'].map((item) => (
              <span key={`${i}-${item}`} className="flex items-center gap-10">
                {item} <span className="text-[#a78bfa]">✦</span>
              </span>
            )),
          )}
        </div>
        </div>
      </div>

    </div>
  )
}

export default Marquee