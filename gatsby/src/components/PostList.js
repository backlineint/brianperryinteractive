import React from 'react';
import PropTypes from 'prop-types';

import PostTeaser from '../components/PostTeaser';

class PostList extends React.Component {
  render() {
    if (this.props.postType === 'all') {
      return (
        <div>
          {this.props.data.allNodePost.edges.map(({node}) => (
            <PostTeaser
              key={node.id}
              slug={node.fields.slug}
              title={node.title}
              link={node.link}
              date={node.created}
              body={node.body.value}
              postType={node.post_type}
            />
          ))}
        </div>
      );
    }
    else if (this.props.postType === 'posts') {
      return (
        <div>
          {this.props.data.posts.edges.map(({node}) => (
            <PostTeaser
              key={node.id}
              slug={node.fields.slug}
              title={node.title}
              link={node.link}
              date={node.created}
              body={node.body.value}
              postType={node.post_type}
            />
          ))}
        </div>
      );
    }
    else if (this.props.postType === 'links') {
      return (
        <div>
          {this.props.data.links.edges.map(({node}) => (
            <PostTeaser
              key={node.id}
              slug={node.fields.slug}
              title={node.title}
              link={node.link}
              date={node.created}
              body={node.body.value}
              postType={node.post_type}
            />
          ))}
        </div>
      );
    }
    else if (this.props.postType === 'notes') {
      return (
        <div>
          {this.props.data.notes.edges.map(({node}) => (
            <PostTeaser
              key={node.id}
              slug={node.fields.slug}
              title={node.title}
              link={node.link}
              date={node.created}
              body={node.body.value}
              postType={node.post_type}
            />
          ))}
        </div>
      );
    }
  }
}

PostList.propTypes = {
  data: PropTypes.object.isRequired,
  postType: PropTypes.string.isRequired
};

export default PostList;