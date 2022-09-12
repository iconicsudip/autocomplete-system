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
            console.log([s,e.target.value])
            setItem(s);
        }
    }
    const getItem = (e)=>{
        console.log(e.target)
        const text = e.target.innerHTML.split("<b>").join("").split("</b>").join("");
        setVal(text);
        var s = search(e.target.innerText,node);
        if(s===false){
            setItem([])
        }
        if(s || e.target.innerText!==''){
            setItem(s);
        }
    }
    return (
        <>
        <div className='flexSearch'>
            <TextField fullWidth label="Search" value={val} onChange={onChangeSearch} id="fullWidth" />
            <List className='item-list'>
                {item?item.map((item)=>{
                    return(
                        <ListItem disablePadding>
                            <ListItemButton>
                                <li  onClick={getItem}><b>{val}</b>{item.substring(val.length)}</li>
                            </ListItemButton>
                        </ListItem>
                    )
                }):<li style={{"margin":"auto"}}>Item doesn't exist</li>}
            </List>
        </div>
        </>
    )
}
