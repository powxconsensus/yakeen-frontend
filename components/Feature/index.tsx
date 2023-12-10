import React from 'react'

const Feature = () => {
  return (
      <div className="relative px-4 sm:px-0 mb-40">
          <div className="absolute inset-0 bg-gray-100 py-40 my-auto" />
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
              <div className="inline-block p-8 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                      <svg
                          className="w-10 h-10 text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                      >
                          <polygon
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                              points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                      </svg>
                  </div>
                  <p className="font-bold tracking-wide text-gray-800">
                      Make it better
                  </p>
              </div>
              <div className="inline-block p-8 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                      <svg
                          className="w-10 h-10 text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                      >
                          <polygon
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                              points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                      </svg>
                  </div>
                  <p className="font-bold tracking-wide text-gray-800">
                      Do it faster
                  </p>
              </div>
              <div className="inline-block p-8 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                      <svg
                          className="w-10 h-10 text-deep-purple-accent-400"
                          stroke="currentColor"
                          viewBox="0 0 52 52"
                      >
                          <polygon
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                              points="29 13 14 29 25 29 23 39 38 23 27 23"
                          />
                      </svg>
                  </div>
                  <p className="font-bold tracking-wide text-gray-800">
                      Working harder
                  </p>
              </div>
          </div>
      </div>
  )
}

export default Feature