import React from 'react';
const NavBar = () => {
  return ( 
    <nav className="w-full h-36 flex-initial bg-blue-800   navbar " >
       <a  href="#" className=" flex-1 pb-4 mx-4 nav-item"  >
         <img  className="max-h-10 max-w-8 inline border-white " src={process.env.PUBLIC_URL + '/atrovan_logo_crop.png'} alt="home" />
         
         </a>
       <a  className="text-white  flex-1 pb-4  mx-4 mt-20 " href="/html/">راهکارها</a> 
        <a className="text-white flex-1 pb-4 mx-4 mt-20 " href="/css/">محصولات</a> 
        <a className="text-white  flex-1 pb-4 mx-4 mt-20 " href="/js/">تماس با ما</a> 

        <a className="text-white flex-1 pb-4 mx-4 mt-20  float-left" href="/css/">ورود</a> 
        {/* <a className="text-white  flex-1  mx-4 nav-item float-left bg-white rounded-3xl text-blue-700 p-6" href="/js/">ثبت نام</a>  */}
        <button className="text-white  flex-1  mx-4 mt-20  float-left bg-white rounded-3xl text-blue-700 px-6">ثبت نام</button>
        
    </nav>
   );
}
 
export default NavBar;