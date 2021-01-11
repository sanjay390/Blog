import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
       const  user  = this.props.users.find((user => user.id === this.props.userId))

        //const user = this.props.users.find((user) =>user.id === this.props.userId );

        if(!user){
            return null;
        }

        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {users: state.users.find(user => user.id === ownProps.userId)};
}
//export default connect(null,{ fetchUser })(UserHeader)
//export default connect(mapStateToProps,{fetchUser}) (UserHeader);

export default connect(
    mapStateToProps,
    { fetchUser }
)(UserHeader)