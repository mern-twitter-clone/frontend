import React from 'react'
import Grid from "@material-ui/core/Grid";
import Sidebar from "../Sidebar/Sidebar";
import Tweet, { TweetProps, User } from "../Tweet/Tweet";

const Ofek: User = {
  avatar: 'Ofek',
  displayName: 'Ofek Izhaki',
  username: 'ofek_izhaki'
}

const Ilia: User = {
  avatar: 'Ilia',
  displayName: 'Ilia Kamilov',
  username: 'ilia_kamilov'
}

const fakeTweets: TweetProps[] = [
  {
    user: Ilia,
    content: 'Hello, This is my first tweet.',
    comments: [
      {
        user: Ofek,
        content: `This is my comment to ilia's tweet`,
        likes: [Ilia],
      }
    ],
    likes: [Ofek]
  },
  {
    user: Ofek,
    content: 'Testing tweet',
    comments: [
      {
        user: Ilia,
        content: 'Cool!',
        likes: []
      }
    ],
    likes: []
  }
]

const Layout: React.FC = () => { // Migrate to es6 function component
  return (
    <Grid
      container
      spacing={5}
      direction="row"
      justifyContent="center"
    >
      <Grid item xs={10} sm={3} alignItems="center">
        <Sidebar />
      </Grid>

      <Grid container item xs={11} sm={6} direction="row" spacing={5}>
        {
          fakeTweets.map((tweet, index) => (
            <Grid item xs={12} sm={12} key={index}>
              <Tweet {...tweet} />
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  )
}

export default Layout;
