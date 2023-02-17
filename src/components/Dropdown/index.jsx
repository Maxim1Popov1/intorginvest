// import React, { useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import Form from 'react-bootstrap/Form';

// // The forwardRef is important!!
// // Dropdown needs access to the DOM node in order to position the Menu
// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <a
//     href=""
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick(e);
//     }}
//   >
//     {children}
//     &#x25bc;
//   </a>
// ));

// render(
//   <Dropdown>
//     <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
//       Custom toggle
//     </Dropdown.Toggle>

//     <Dropdown.Menu>
//       <Dropdown.Item eventKey="1">Red</Dropdown.Item>
//       <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
//       <Dropdown.Item eventKey="3" active>
//         Orange
//       </Dropdown.Item>
//       <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>,
// );



import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from './DropdovnItem';
import './style.css'



function DropdownComponent({title,listItems}) {
 
  return (
    <Dropdown>
      <Dropdown.Toggle className='dropdown' variant="success" id="dropdown-basic"  >
      {title} 
      </Dropdown.Toggle>
        
      <Dropdown.Menu>
        
        {listItems.map((item,index)=>{
           
          return <DropdownItem key={index} title={item.title} icon={item.icon} />
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownComponent;























// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownItem from './DropdovnItem';
// import './style.css'



// function DropdownComponent({title,listItems}) {
   
//   return (
//     <Dropdown>
//       <Dropdown.Toggle className='dropdown' variant="success" id="dropdown-basic"  >
//       {title} 
//       </Dropdown.Toggle>
        
//       <Dropdown.Menu>
        
//         {listItems.map((item,index)=>{
           
//           return <DropdownItem key={index} title={item.title} icon={item.icon} />
//         })}
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

// export default DropdownComponent;