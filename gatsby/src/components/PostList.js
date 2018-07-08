import React from 'react';
import PropTypes from 'prop-types';

import PostTeaser from '../components/PostTeaser';

class PostList extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.map(({node}) => (
          <PostTeaser
            key={node.id}
            node={node}
          />
        ))}
      </div>
    );
  }
}

PostList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PostList;