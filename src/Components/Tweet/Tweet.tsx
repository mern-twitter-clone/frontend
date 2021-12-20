import Paper from "@mui/material/Paper";
import {
  AutorenewOutlined,
  FavoriteBorderOutlined,
  CloudUploadOutlined,
  CommentOutlined,
} from "@material-ui/icons";
import { Grid, IconButton, Avatar, Typography } from "@material-ui/core";

export interface User {
  username: string
  displayName: string
  avatar: string
}

interface Comment {
  user: User
  content: string
  likes: User[]
}

export interface TweetProps {
  user: User
  content: string
  likes: User[]
  comments: Comment[]
}

const Tweet: React.FC<TweetProps> = (props) => {
  const { user, content, likes, comments } = props

  return (
    <Paper>
      <Grid container spacing={2} direction="row">
        <Grid item sm={1}>
          <Avatar alt={user.displayName} src={user.avatar} />
        </Grid>
        <Grid item sm={2}>
          <Typography variant="h6">{user.displayName} @{user.username}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h6" align="left">{content}</Typography>
      <Grid container spacing={2} direction="row" >
        <Grid item xs={3}>
          <IconButton>
            <FavoriteBorderOutlined />
            {likes.length > 0 && likes.length}
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <IconButton>
            <CloudUploadOutlined />
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <IconButton>
            <AutorenewOutlined />
          </IconButton>
        </Grid>
        <Grid item xs={3}>
          <IconButton>
            <CommentOutlined />
            {comments.length > 0 && comments.length}
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Tweet;