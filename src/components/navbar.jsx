import React from 'react';
const NavBar = () => {
  return ( 
    <nav className="w-full h-36  bg-blue-800  navbar relative " >
      <div className="bottom-0 absolute w-full">
      <a  href="#" className="pb-4 mx-4 nav-item"  >
         <img  className="max-h-10 max-w-8 inline border-white " src={process.env.PUBLIC_URL + '/atrovan_logo_crop.png'} alt="home" />
         
         </a>
       <a  className="text-white flex-1 pb-4  mx-4 nav-item" href="/html/">راهکارها</a> 
        <a className="text-white flex-1  pb-4 mx-4 nav-item" href="/css/">محصولات</a> 
        <a className="text-white flex-1 pb-4 mx-4 nav-item" href="/js/">تماس با ما</a> 
        <a className="text-white flex pb-4 mx-4  float-left nav-item" href="/css/">ورود</a> 
        {/* <a className="text-white  flex-1  mx-4 nav-item float-left bg-white rounded-3xl text-blue-700 p-6" href="/js/">ثبت نام</a>  */}
        <button className="  mx-4  float-left bg-white rounded-3xl text-blue-700 px-6 nav-item">ثبت نام</button>
      </div>
       
        
    </nav>
   );
}
 
export default NavBar;