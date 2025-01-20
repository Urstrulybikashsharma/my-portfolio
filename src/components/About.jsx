import React from 'react'

const About = () => {
  return (
    <div name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            <p className="text-6xl mt-20">LET ME INTRODUCE MYSELF
            </p>
        </div>

            <br />

            <p className="text-xl">
            "I am an engineering student with a strong background in web development and programming, driven by a deep passion for technology. Proficient in C++, C, Python, JavaScript, React, Next.js, HTML, CSS, and SQL, I specialize in database management and developing responsive applications. Recently, I created a portfolio website using React.js and Tailwind CSS, showcasing my commitment to continuous learning, collaboration, and delivering meaningful solutions. 🚀"</p>
      </div>
    </div>
  )
}

export default About
