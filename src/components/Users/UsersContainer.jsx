import React from 'react'
import {connect} from "react-redux";
import {followAc, setCurrentPageAc, setTotalUsersCountAc, setUsersAc, unfollowAc} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

export class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                // this.props.setTotalUsersCount(response.data.totalCount) тут все 4800 пользователей - верствка тупит
                this.props.setTotalUsersCount(30)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })

    }


    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
        />
    }
}

let mapStateToProps = (state) =>{
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        follow:(userId)=>{
            dispatch(followAc(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAc(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAc(users))
        },
        setTotalUsersCount:(totalCount)=>{

            dispatch(setTotalUsersCountAc(totalCount))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAc(pageNumber))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)