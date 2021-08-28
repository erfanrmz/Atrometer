import React from 'react';
const NavBar = () => {
  return ( 
    <nav className="w-full h-36  bg-blue-800  navbar relative " >
      <ul className="bottom-0 absolute w-full max-h-12">
      <li><a  href="#" className="pb-4 mx-4 float-right nav-item"  >
         <img  className="max-h-12  inline border-white " src={process.env.PUBLIC_URL + '/atrovan_logo_crop.png'} alt="home" />
         
         </a></li>
        <li><a  className="h-12 text-white text-base flex-1 mx-4 float-right nav-item border-b-3 border-secondary" href="/html/">راهکارها</a></li> 
        <li><a className="h-12 text-white text-base flex-1  pb-4 mx-4 float-right nav-item" href="/css/">محصولات</a></li> 
        <li><a className="h-12 text-white text-base flex-1 pb-4 mx-4 float-right nav-item" href="/js/">تماس با ما</a></li> 
        <li><a className="h-12 text-white text-base flex pb-4 mx-6  float-left nav-item" href="/css/">ورود</a></li> 
        {/* <a className="text-white  flex-1  mx-4 nav-item float-left bg-white rounded-3xl text-blue-700 p-6" href="/js/">ثبت نام</a>  */}
        <button className="w-30 h-10 mx-4 float-left bg-white rounded-2xl text-blue-700 text-base px-6 nav-item">ثبت نام</button>
      </ul>
       
        
    </nav>
   );
}
 
export default NavBar;