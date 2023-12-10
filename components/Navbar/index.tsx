import React from 'react'

const Navbar = () => {
  return (
    <section className="mb-1">
      <nav
        className="relative flex w-full items-center justify-between bg-gray-100 py-2 shadow-sm shadow-neutral-700/10  lg:flex-wrap lg:justify-start"
        data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-6">
          <div className="flex items-center">
            {/* <button
              className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
              <span className="[&>svg]:w-7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <path fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </button> */}
            <a
              className="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
              href="#">
              <img
                src="/logo-icon.png"
                className='h-14'
                alt="TE Logo"
                loading="lazy" />
              <span className="font-bold text-lg text-neutral-600"
              >DIGI-PAY</span>
            </a>
          </div>
          <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContentY" data-te-collapse-item>
            <ul className="ml-auto lg:flex lg:flex-row" data-te-navbar-nav-ref>
              <li data-te-nav-item-ref>
                <a className="block py-2 pr-2 text-neutral-800 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30  [&.active]:text-black/80"
                  href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light"
                >Home</a>
              </li>
              <li data-te-nav-item-ref>
                <a className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30  dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80"
                  href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">About</a>
              </li>
              <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
                <a className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30  dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80"
                  href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">CtaSection</a>
              </li>
            </ul>
          </div>
          {/* <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
            <button type="button"
              className="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              data-te-ripple-init data-te-ripple-color="light">
              Login
            </button>
          </div> */}
        </div>
      </nav>
      <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:hidden [&>svg]:h-[560px] [&>svg]:w-full [&>svg]:lg:block">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"
          className="absolute top-[60px] hidden h-[580px] w-full transition-opacity duration-300 dark:opacity-0 lg:block">
          <defs>
            <linearGradient id="sw-gradient-light" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="#f4f4f4" offset="0%"></stop>
              <stop stop-color="#f4f4f4" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#sw-gradient-light)"
            d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z">
          </path>
        </svg>
        <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none"
          className="absolute top-[60px] hidden h-[580px] w-full opacity-0 transition-opacity duration-300 dark:opacity-100 lg:block">
          <defs>
            <linearGradient id="sw-gradient-dark" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="#f4f4f4" offset="0%"></stop>
              <stop stop-color="#f4f4f4" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#sw-gradient-dark)"
            d="M -0.664 3.46 C -0.664 3.46 405.288 15.475 461.728 21.285 C 601.037 35.625 672.268 76.086 701.056 97.646 C 756.056 138.838 797.267 216.257 857.745 245.156 C 885.704 258.516 980.334 280.547 1048.511 268.826 C 1121.622 256.256 1199.864 226.267 1214.176 220.176 C 1241.273 208.643 1280.201 191.509 1343.494 179.436 C 1434.325 162.111 1439.504 196.099 1439.503 183.204 C 1439.502 161.288 1440 0 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L -0.664 3.46 Z">
          </path>
        </svg>
      </span>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              {/* <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Brand new</p>
              </div> */}
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Your Trusted Companinon 
                <br className="hidden md:block" />
                crypto wallet that’ll take {' '}
                <span className="inline-block text-deep-purple-accent-400">you places</span>
              </h2>
              <p className="text-gray-700 text-base md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.</p>
            </div>
            <div className="flex items-center space-x-3">
              <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </a>
              <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
              </a>
              
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div className="w-2/5">
              <img className="object-cover" src="icon1.svg" alt="" />
            </div>
            <div className="w-5/12 -ml-16 lg:-ml-32">
              <img className="object-cover" src="icon2.svg" alt="" />
            </div>
          </div>
        </div>
        <a
          href="/"
          aria-label="Scroll down"
          className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
          </svg>
        </a>
      </div>
      {/* <div className="px-6 py-12 text-center md:px-12 lg:my-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <h1 className="mb-16 text-3xl font-bold tracking-tight md:text-6xl xl:text-5xl">
                Your Trusted Companinon <br /><span className="text-gray-500">crypto wallet that’ll take you places</span>
              </h1>
              <a className="mb-2 inline-block rounded bg-black px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Download from Mobile</a>
              <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60"
                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
            </div>
            <div className="mb-12 lg:mb-0">
              <img src="https://imgs.search.brave.com/YVmJX7QEFxS95LMW75eBBhuQJQsTTEXmiOriXgvCnXA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/NTMzNzc1NC9waG90/by9tb2JpbGUtcGhv/bmUtb24taXNvbGF0/ZS13aGl0ZS1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1xLTNt/cTE1cnpRcW5idVlS/cEd0ZXJ0LWg0bGVM/OTNSamFDZks1aVRo/SXRvPQ"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default Navbar