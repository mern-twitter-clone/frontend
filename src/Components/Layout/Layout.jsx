import Grid from "@material-ui/core/Grid";
import Sidebar from "../Sidebar/Sidebar";
import Tweet from "../Tweet/Tweet";
//a comp for a single tweet.
function Layout() {
  return (
      
    <Grid container spacing={5} direction="row">
      <Grid item xs={3}>
        <Sidebar></Sidebar>
      </Grid>

      <Grid container item xs={6} direction="row" spacing={5}>
        <Grid item xs={12}>
          <Tweet></Tweet>
        </Grid>
        <Grid item xs={12}>
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
