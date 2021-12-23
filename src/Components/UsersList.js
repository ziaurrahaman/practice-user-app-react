import React from "react";
import UserForm from "./UserForm";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={`${classes["users"]}`}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );

  //   return props.users.map((user) => {
  //     <div className={`${classes["users"]}`}>
  //       <ul>
  //         <li>{user.name}</li>
  //       </ul>
  //       ;
  //     </div>;
  //     console.log(user.name);
  //   });
};

//   return (
//     <ul>
//     {
//             {props.users.map((user)=>(
//               <li>
//                 {user.name} ({user.age} years old)
//               </li>
//               ))
//     }
// </ul>
//   );

export default UsersList;
