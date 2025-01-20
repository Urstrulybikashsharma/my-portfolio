import React,{useState} from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'


const SocialLinks = () => {

    //here i add alert msg for starting and complete of download
    const [showMessage, setShowMessage] = useState('');
    const handleDownload = () =>{
        setShowMessage('Your download is starting...');
        setTimeout(()=>{
            setShowMessage('Download completed!');

            setTimeout(()=> setShowMessage(''),3000);
        },2000);

    };

    const links = [
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/urstrulybikashsharma',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/Urstrulybikashsharma',
            
        },
        {
            id:3,
            child:(
                <>
                mail <HiOutlineMail size={30}/>
                </>
            ),
            href:'mailto:sharmabikash221@gmail.com',
            
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'/Resume.pdf',
            style:'rounded-br-md',
            download:true,
            onClick:handleDownload,
        },
    ];

  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>

            {links.map(({id,child,href,style,download,onClick})=>(
                <li 
                key={id} 
                className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500" +
                " " +
                 style}
                 >
                <a 
                  href={href}
                  className=" flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                   rel="noreferrer"
                >
                {child}
                </a>
            </li>
            ))}
        </ul>
        {/* alert message*/}
        {showMessage && (
            <div className="fixed bottom-4 left-4 bg-gray-800 text-white p-3 rounded-md shadow-md">
                {showMessage}
            </div>
        )}
      
    </div>
  );
};

export default SocialLinks
