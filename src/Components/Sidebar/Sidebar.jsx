import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

//a comp for a single tweet.
function Sidebar() {
  return (
    <TextField
    placeholder="Search"
   fullWidth
    variant="outlined"
    InputProps={{
      endAdornment: (
        <InputAdornment>
            <Search />
        </InputAdornment>
      )
    }}
  />

  );
}
export default Sidebar;
