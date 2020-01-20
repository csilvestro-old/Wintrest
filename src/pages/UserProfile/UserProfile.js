import React, { Component } from 'react';
import DashHeader from '../../components/DashHeader';
import StinkyScotty from '../../images/scott.png'
// import UserForm from './UserForm';
import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import NavPin from '../../components/nav/NavPin'
import CreateBoard from '../../components/modals/CreateBoard';
import Board from '../../components/board/Board';
import EditModal from '../../components/modals/EditModal';

class UserProfile extends Component{
    state = {
        user: {
            avatar: require('../../images/scott.png'),
            name: 'StinkyScotty',
            boards:[{
                title:'Stinky Scotty',
                img:'../../images/scott.png',
                pinTag:'345,342',
            },{
                title:'Stink Scotty v3',
                img:'../../images/scott.png',
                pinTag:'123,343,343,000',
            },
        ]
        },
        inputs:'',
        show:false,
        showEdit:false,

    }
    onChange = (e) => {
        this.setState({inputs: [e.target.value]})
    }
    submitBoard = (e) => {
        console.log('Briffon is an ERROR!')
    }

    createBoard=(e)=>{
        e.preventDefault();

        this.setState({
            show:!this.state.show
        })
        
    }

    exit=(e)=>{
        e.preventDefault();
        this.setState({
            show:!this.state.show
        })
    }

    delete=(index)=>{
        // e.preventDefault();
        this.state.user.boards.splice(index,1);
        this.setState({
            boards:[...this.state.user.boards]
        })
    }

    edit=()=>{
        this.setState({
            showEdit:!this.state.show
        })
    }

    render(){
        const boardModal=this.state.show ? 'show':'closed';
        const editModal=this.state.showEdit ? 'show':'closed';
        let boards = this.state.user.boards.map((el,index)=>{
            return <Board edit={this.edit} delete={this.delete} key={index} title={el.title} pin={el.pinTag}/>
        })
        return(
            <div style={styles.container}>
                <div className={`createBoardModal ${boardModal}`}><CreateBoard cancel={this.exit} exit={this.exit}/></div>
                <div className={`createeditModal ${editModal}`}><EditModal/></div>
                <DashHeader avatar={StinkyScotty}/>
                <div style={styles.btns}>
                    <IoMdAdd onClick={this.createBoard} />
                    <MdEdit />
                    <FiShare />
                </div>
                <div style={styles.userInfo}>
                    <div>
                        <h1>PRW Lecture</h1>
                        <h2>0 Followers • 11 Following</h2>
                    </div>
                    <div style={styles.userAvatar}>
                        <img style={{borderRadius: '50%'}} src={StinkyScotty} alt='' />
                    </div>
                </div>
                <section>
                    <NavPin />
                </section>
                <div style={styles.boardContainer}>
                    {boards}
                </div>
            </div>
        )
    }
}

export default UserProfile;

const styles ={
    container:{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '10%'
    }, 
    btns:{
        fontSize: '2em',
        marginLeft: '10%',
        paddingTop: '2%'
    },
    userAvatar: {
        
    },
    boardContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
    }
}