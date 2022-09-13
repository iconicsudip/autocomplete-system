import React,{useState,useEffect} from 'react'
import {Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

export default function Database() {
    const [val,setVal] = useState("");
    let Items;
    if (localStorage.getItem("database") === null) {
        Items = [];
    } else {
        Items = JSON.parse(localStorage.getItem("database"));
    }
    const onChangedata = (e)=>{
        e.preventDefault();
        setVal(e.target.value);
    }
    
    const addItem = () => {
        if(val === ""){
            alert("Type any item to add into database")
        }else{
            items = items.concat(val);
            setItems(items);
            setVal("");
        }
    };
    let [items, setItems] = useState(Items);
    useEffect(() => {
        localStorage.setItem("database", JSON.stringify(items));
    }, [items]);
    const Delete = (e)=>{
        e.preventDefault()
        var id = e.target.value;
        let updateItmes = items.filter((e) => {
            return e !== items[id];
        });
        setItems(updateItmes);
        localStorage.setItem("database", JSON.stringify(updateItmes));
    }
    return (
        <>
        <div className='database'>
            <TextField label="Type item to add into database" size="small" style={{"width":"70%"}} autoComplete='off' value={val} onChange={onChangedata} id="fullWidth" />
            <Button className='add-item' onClick={addItem} type='submit' variant="contained" color="secondary">Add Item</Button>
            <List className='item-list'>
                {items.length!==0?items.map((item,index)=>{
                    return(
                        <ListItem disablePadding>
                            <ListItemButton className='database-item'>
                                <li key={item} >{item}</li>
                                <Button className='add-item' value={index} onClick={Delete} size="small" type='submit' variant="contained" color="error">Delete Item</Button>
                            </ListItemButton>
                        </ListItem>
                    )
                }):<li style={{"margin":"auto"}}>Item doesn't exist</li>}
            </List>
        </div>
        </>
    )
}
