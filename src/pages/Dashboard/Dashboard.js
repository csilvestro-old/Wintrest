import React, { Component } from 'react';
import DashHeader from '../../components/DashHeader';
import Data from '../../jsons/Items.json';
import Item from '../../components/item/Item';

class Dashboard extends Component{
    render(){
        let items = Data.map((dataDetail,index)=>{
            return <Item title={dataDetail.title} src={dataDetail.src} alt={dataDetail.alt} desc={dataDetail.desc}/>
        })
        return(
            <div style={styles.container}>
                <DashHeader />
                {items}
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
    }
}