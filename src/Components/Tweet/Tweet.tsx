import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import {
  AutorenewOutlined,
  FavoriteBorderOutlined,
  FavoriteBorderSharp,
  CloudUploadOutlined,
  CommentOutlined
} from "@material-ui/icons";
import { Grid } from "@material-ui/core";

//a comp for a single tweet.
function Tweet() {
  return (
    <Paper>
      <Typography variant="h4" align="left">
        Username
      </Typography>
      <Typography variant="h5" align="left">
        content content content content content content content content content
        content content content content content content content
      </Typography>

      <Grid container spacing={6} direction="row">
        <Grid item xs={3}>
          <FavoriteBorderOutlined></FavoriteBorderOutlined>
        </Grid>
        <Grid item xs={3}>
         <CloudUploadOutlined></CloudUploadOutlined>
        </Grid>
        <Grid item xs={3}>
          <AutorenewOutlined></AutorenewOutlined>
        </Grid>
        <Grid item xs={3}>
          <CommentOutlined></CommentOutlined>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Tweet;
