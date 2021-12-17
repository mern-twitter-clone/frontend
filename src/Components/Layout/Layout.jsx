import Grid from "@material-ui/core/Grid";
import Tweet from "../Tweet/Tweet";
//a comp for a single tweet.
function Layout() {
  return (
      
    <Grid container spacing={2} direction="row">
      <Grid item xs={3}>
        <Tweet></Tweet>
      </Grid>

      <Grid container item xs={6} direction="column" spacing={5}>
        <Grid item xs={12}>
          <Tweet></Tweet>
          <Tweet></Tweet>
        </Grid>
      </Grid>

      <Grid item xs={3}>
        <Tweet></Tweet>
      </Grid>
    </Grid>
  );
}
export default Layout;
