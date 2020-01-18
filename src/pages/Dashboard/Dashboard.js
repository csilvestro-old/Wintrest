import React, { Component } from 'react';
import DashHeader from '../../components/DashHeader';
// import Data from '../../jsons/Items.json';
import Item from '../../components/item/Item';
import './Dashboard.css'
import CreateBoard from '../../components/modals/CreateBoard';

class Dashboard extends Component{
    state={
        items:[],
        isLoaded:true,
        show:true,
    }
    componentDidMount(){
        const isLoaded=this.state.isLoaded;
        if(isLoaded){
            this.fetchData();
            //shut up chase
        }else{
            console.log("Chase is an error");
        }
    }
    fetchData(){
        this.setState({
            isLoaded:true,
            items:[]
        })
        fetch('https://randomuser.me/api/?results=50')
            .then(res=>res.json())
            .then(data=>data.results.map(user=>({
                fname:`${user.name.first} ${user.name.last}`,
                lname:`${user.name.last}`,
                gender:`${user.gender}`,
                email:`${user.email}`,
                age:`${user.dob.age}`,
                dob:`${user.dob.date}`,
                username:`${user.login.username}`,
                picture:`${user.picture.large}`,
            })))
            .then(items=>this.setState({
                items,
                isLoaded:false,
            }))
            .catch(err=>console.log("Did not load ",err))
    }

    exit=(e)=>{
        e.preventDefault();
        this.setState({
            show:!this.state.show
        })
    }

    render(){
        // let items = Data.map((dataDetail,index)=>{
        //     return <Item title={dataDetail.title} src={dataDetail.src} alt={dataDetail.alt} desc={dataDetail.desc}/>
        // })
        const {isLoaded,items} = this.state;
        const boardModal=this.state.show ? 'show':'closed';
        return(
            <div style={styles.container}>
                <DashHeader />
                <div style={styles.itemsContainer} className="itemsContainer">
                    <div className={`createBoardModal ${boardModal}`}><CreateBoard cancel={this.exit} exit={this.exit}/></div>
                    {!isLoaded && items.length>0 ? items.map(item =>{
                        const {fname,username,picture} = item;
                        return <Item key={username} title={fname} src={picture}  />
                    }):null}
                    {/*{items}*/} 
                </div>
            </div>
        )
    }
}

export default Dashboard;

const styles ={
    container:{
        display:'flex',
        flexDirection:'column',
        height:'100vh',
        overflowY:'hidden',
    },
    itemsContainer:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        margin:'1rem',
        justifyContent:'space-evenly'
    }
}