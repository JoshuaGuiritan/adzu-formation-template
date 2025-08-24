import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  const [sidebar, setSideBar] = useState(false);

  const hoverSideBar = () => {
    setSideBar(sidebar => sidebar ? false : true);
  }

  return (
      <div className="d-flex flex-column vh-100">
        <div className="row g-0">
          <div className={`${sidebar ? "col-1" : "col-2"} sidebar-animation bg-darkblue text-white py-3 fs-4 fw-bold d-flex justify-content-center align-items-center`}>
            { sidebar ? <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className="fs-2"/> : <img src="./Images/adzu-header-final.png" style={{height: '30px'}}/>}
          </div>
          <div className={`${sidebar ? "col-11" : "col-10"} sidebar-animation bg-blue d-flex justify-content-between align-items-center`}>
            <a className="bar-hover h-100 px-3 d-flex justify-content-between align-items-center" role="button" onClick={hoverSideBar}>
              <FontAwesomeIcon icon="fa-solid fa-bars" className="text-white1 fs-6" />
            </a>
          </div>
        </div>
        <div className="row flex-grow-1 g-0">
          <div className={`${sidebar ? "col-1" : "col-2"} sidebar-animation bg-gray3 text-white2 p-3`}>
            
          </div>
          <div className={`${sidebar ? "col-11" : "col-10"} sidebar-animation bg-white2`}>
          </div>
        </div>
      </div>
  )
}

export default App
