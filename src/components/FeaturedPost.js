import {
    Button,
    Card,
    CardActions,
    CardContent,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  
  const useStyles = makeStyles({
    cover: {
      backgroundImage: `url(https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      backgroundPosition: "center",
      padding: "45px 45px",
    },
    title: {
      fontSize: 40,
      fontFamily: "Montserrat",
    },
    textContainer: {
      color: "white",
    },
  });
  
  const FeaturedPost = () => {
    const classes = useStyles();
  
    return (
      <Card className={classes.cover}>
        <CardContent className={classes.textContainer}>
          <Typography className={classes.title} gutterBottom>
            Title of a longer featured blog post
          </Typography>
          <Typography variant="h5" component="h2">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" style={{ color: "#90caf9", fontWeight: 700 }}>
            Read More..
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default FeaturedPost;