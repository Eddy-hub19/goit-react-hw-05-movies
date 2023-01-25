// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";

// export const SearchBox = ({ value, onChange }) => {
//   const [user, setUser] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const username = searchParams.get("username");

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     setSearchParams({ username: form.elements.username.value });
//     form.reset();
//   };

//   return (
//     <div>
//        <form onSubmit={handleSubmit}>
//         <input type="text" name="username" />
//         <button type="submit">Search</button>
//       </form>
//     </div>
//   );
// };
