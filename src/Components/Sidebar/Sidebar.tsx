import React from 'react'
import { TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const Sidebar: React.FC = () => {
  return (
    <TextField
      label="Search"
      fullWidth
      variant="outlined"
      InputProps={{
        endAdornment: <Search />
      }}
    />
  )
}

//a comp for a single tweet.
// function Sidebar() {
//   return (
//     <TextField
//       placeholder="Search"
//       fullWidth
//       variant="outlined"
//       InputProps={{
//         endAdornment: (
//           <InputAdornment>
//             <Search />
//           </InputAdornment>
//         )
//       }}
//     />

//   );
// }

export default Sidebar;
