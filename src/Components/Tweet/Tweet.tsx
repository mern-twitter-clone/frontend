import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

//a comp for a single tweet.
function Tweet() {
  return (
    <Paper>
      <Typography variant="h4" align="left">
        Username
      </Typography>
      <Typography variant="h5" align="left" noWrap>
        content content content content content content content content content
        content content content content content content content
      </Typography>
    </Paper>
  );
}
export default Tweet;
