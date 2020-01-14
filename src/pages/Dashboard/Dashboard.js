import React, { Component } from 'react';
import DashHeader from '../../components/DashHeader';
// import Data from '../../jsons/Items.json';
import Item from '../../components/item/Item';

class Dashboard extends Component{
    state={
        items:[],
        isLoaded:true,
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
        fetch('https://randomuser.me/api/')
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
    
    render(){
        // let items = Data.map((dataDetail,index)=>{
        //     return <Item title={dataDetail.title} src={dataDetail.src} alt={dataDetail.alt} desc={dataDetail.desc}/>
        // })
        const {isLoaded,items} = this.state;
        return(
            <div style={styles.container}>
                <DashHeader />
                <div style={styles.itemsContainer}>
                    {!isLoaded && items.length>0 ? items.map(item =>{
                        const {fname,lname,username,picture} = item;
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
    },
    itemsContainer:{
        display:'flex',
        flexDirection:'row'
    }
}