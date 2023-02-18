import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from './DropdovnItem';

import './style.css'



function DropdownComponent({title,listItems}) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
    className='toggle'
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <i class="fa fa-angle-down" aria-hidden="true"></i>


    </a>
  ));
  return (
    <Dropdown>

      <Dropdown.Toggle className='dropdown' as={CustomToggle} id="dropdown-custom-components">
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