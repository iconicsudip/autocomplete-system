import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import {Node,add,search} from '../search.js';
import items from '../database';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

export default function SearchBar() {
    const [val,setVal] = useState("");
    const [item,setItem] = useState([]);
    const node = new Node('');
    for (let str in items){
        add(items[str],node);
    }
    const onChangeSearch = (e)=>{
        setVal(e.target.value);
        var s = search(e.target.value,node);
        if(s===false){
            setItem([])
        }
        if(s || e.target.value!==''){
            setItem(s);
        }
    }
    const getItem = (e)=>{
        try{
            const text = e.target.innerHTML.split('</li>')[0].split('<li>')[1].split('<b>')[1].split('</b>').join("");
            setVal(text);
            var s = search(text,node);
            if(s===false){
                setItem([])
            }
            if(s ){
                setItem(s);
            }
        }catch{
            console.log("AUTO")
        }
    }
    return (
        <>
        <div className='flexSearch'>
            <TextField fullWidth label="🌟🌟 Type any word over here and see the magic 🌟🌟"  autoComplete='off' value={val} onChange={onChangeSearch} id="fullWidth" />
            <List className='item-list'>
                {item?item.map((item)=>{
                    return(
                        <ListItem disablePadding>
                            <ListItemButton onClick={getItem}>
                                <li  ><b>{val}</b>{item.substring(val.length)}</li>
                            </ListItemButton>
                        </ListItem>
                    )
                }):<li style={{"margin":"auto"}}>Item doesn't exist</li>}
            </List>
        </div>
        </>
    )
}
