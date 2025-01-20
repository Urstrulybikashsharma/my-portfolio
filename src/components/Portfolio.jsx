import React from "react";
import Todo from "../assets/portfolio/Todo.jpg.png";



const Portfolio = () => {

    const portfolios = [
        
        {
            id:4,
            src:Todo
        },
        {
            id:5,
            src:Todo
        },
        {
            id:6,
            src:Todo
        },
        
    ];
  return (
    <div 
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Portfolio
                    </p>
                <p className="py-6">Check out some of my work right here</p>
                </div>

               

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {
                    portfolios.map(({id,src,demo,code})=>(
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} 
                     alt=""
                     className="rounded-md duration-200 hover:scale-105" 
                    />
                    <div className="flex items-center justify-center">
                        {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button> */}
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center text-white rounded"
                            >Demo</a>
                        <a
                            href={code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center text-white rounded"
                            >Code</a>
                    </div>
                </div>
                    ))
                }
                
            </div>
        </div>
     </div>
  );
};

export default Portfolio
