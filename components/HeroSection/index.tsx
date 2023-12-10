import React from 'react'
import {
  LogInWithAnonAadhaar,
  useAnonAadhaar,
  AnonAadhaarProof,
} from "anon-aadhaar-react";
import { useEffect } from "react";

const HeroSection = () => {
  const [anonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar);
  }, [anonAadhaar]);
  console.log("anonAadhaar", anonAadhaar)
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-40 lg:flex  lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
        

          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
          >
            
              <p>Do Your KYC here</p>
            <div >
              {/* Render the proof if generated and valid */}
              {anonAadhaar?.status === "logged-in" && (
                <>
                  <p>✅ Proof is valid</p>
                  <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)} />
                </>
              )}
              
            </div>
          </h1>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LogInWithAnonAadhaar />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection