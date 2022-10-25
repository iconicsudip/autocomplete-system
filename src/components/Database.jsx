import React,{useState,useEffect} from 'react'
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

export default function Database({items,setItems}) {
    const [val,setVal] = useState("");
    useEffect(() => {
        localStorage.setItem("database", JSON.stringify(items));
    }, [items]);
    const onChangedata = (e)=>{
        e.preventDefault();
        setVal(e.target.value);
    }
    
    const addItem = (e) => {
        e.preventDefault();
        if(val === ""){
            alert("Type any item to add into database")
        }else{
            if(items===null){
                items = []
            }
            items = items.concat(val);
            setItems(items);
            setVal("");
        }
    };
    
    const Delete = (e)=>{
        e.preventDefault()
        var id = e.target.value;
        let updateItmes = items.filter((e) => {
            return e !== items[id];
        });
        if(updateItmes.length===0){
            setItems(null)
        }else{
            setItems(updateItmes);
        }
        localStorage.setItem("database", JSON.stringify(updateItmes));
    }
    return (
        <>
        <div >
            <h1>Database</h1>
            <form className='formadd' onSubmit={addItem}>
                <TextField fullWidth label="Type item to add into database" size="small" style={{"width":"70%"}} autoComplete='off' value={val} onChange={onChangedata} id="fullWidth" />
                <Button className='add-item' onClick={addItem} type='submit' variant="contained" color="secondary">Add Item</Button>
            </form>
            <List className='item-list'>
                {items?items.map((item,index)=>{
                    return(
                        <ListItem disablePadding>
                            <ListItemButton className='database-item'>
                                <li key={"database"+item} >{item}</li>
                                <Button key={"databasebutton"+item} className='add-item' value={index} onClick={Delete} size="small" type='submit' variant="contained" color="error">Delete Item</Button>
                            </ListItemButton>
                        </ListItem>
                    )
                }):<li style={{"margin":"auto"}}>Item doesn't exist</li>}
            </List>
        </div>
        </>
    )
}
