import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import {
  AutorenewOutlined,
  FavoriteBorderOutlined,
  CloudUploadOutlined,
  CommentOutlined,
} from "@material-ui/icons";
import { Grid, IconButton,Avatar } from "@material-ui/core";

//a comp for a single tweet.
function Tweet() {
  return (
    <Paper>
      <Grid container spacing={2} direction="row">
        <Grid item sm={1}>
         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Grid>
        <Grid item sm={2}>
          <Typography variant="h4">
            Username
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h6" align="left">
        content content content content content content content content content
        content content content content content content content
      </Typography>

      <Grid container spacing={2} direction="row" >
        <Grid item xs={3}>
          <IconButton>
            <FavoriteBorderOutlined></FavoriteBorderOutlined>
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <IconButton>
            <CloudUploadOutlined></CloudUploadOutlined>
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <IconButton>
            <AutorenewOutlined></AutorenewOutlined>
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <IconButton>
            <CommentOutlined></CommentOutlined>
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Tweet;
