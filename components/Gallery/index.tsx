import React from 'react'

const Gallery = () => {
  return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                      <svg
                          viewBox="0 0 52 24"
                          fill="currentColor"
                          className="absolute top-0 -left-10 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                          <defs>
                              <pattern
                                  id="9a29985a-fc16-419b-ae53-1670f5ca4491"
                                  x="0"
                                  y="0"
                                  width=".135"
                                  height=".30"
                              >
                                  <circle cx="1" cy="1" r=".7" />
                              </pattern>
                          </defs>
                          <rect
                              fill="url(#9a29985a-fc16-419b-ae53-1670f5ca4491)"
                              width="52"
                              height="24"
                          />
                      </svg>
                      <span className="relative">The</span>
                  </span>{' '}
                  quick, brown fox jumps over a lazy dog
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
              </p>
          </div>
          <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
              <img
                  className="object-cover w-full h-120 rounded"
                  src="/icon3.svg"
                  alt=""
              />
              <img
                  className="object-cover w-full h-120 rounded"
                  src="/icon2.svg"
                  alt=""
              /><img
                  className="object-cover w-full h-120 rounded"
                  src="/icon1.svg"
                  alt=""
              /><img
                  className="object-cover w-full h-120 rounded"
                  src="/icon4.svg"
                  alt=""
              />
          </div>
      </div>
  )
}

export default Gallery