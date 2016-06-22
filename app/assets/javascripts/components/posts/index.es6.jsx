class PostsIndex extends React.Component {
  constructor(props) {
    super(props);
    var { posts } = this.props;
    this.state = { posts: posts };
  }

  render() {
    let posts = this.state.posts.map((post) => {
      return <Post post={post} key={post.id} />;
    });

    return (
      <div>
        <h1>All Posts</h1>
        <ul>
          {posts}
        </ul>
        <br/>
      </div>
    );
  }

}

class Post extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.post.url}>{this.props.post.title}</a>
      </li>
    );
  }

}
