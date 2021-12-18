import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";

//a comp for a single tweet.
function Sidebar() {
  return (
    <TextField
    placeholder="Search"
    sx={{
        color: 'success.main',
        width: '10%'
      }}
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
