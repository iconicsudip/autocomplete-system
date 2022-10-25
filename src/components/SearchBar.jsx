import React,{useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Node,add,search} from '../search.js';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

export default function SearchBar({items,setItems}) {
    const [val,setVal] = useState("");
    const [item,setItem] = useState([]);
    const node = new Node('');
    console.log(items)
    useEffect(()=>{
        setItems(items)
    },[items,setItems])
    const setTrie = (data)=>{
        for (let str in data){
            add(data[str],node);
        }
    }
    if(items===null){
        console.log("No data exist in database , Create some data in database section")
    }else{
        setTrie(items);
    }
    const onChangeSearch = (e)=>{
        setVal(e.target.value);
        var s = search(e.target.value,node);
        if(s===false){
            setItem(null)
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
                setItem(null)
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
        <div >
            <h1>Auto complete search-engine</h1>
            {items?(
                <>
                    <TextField fullWidth size="small" label="🌟🌟 Type any word over here and see the magic 🌟🌟"  autoComplete='off' value={val} onChange={onChangeSearch} id="fullWidth" />
                    <List className='item-list'>
                        {item?item.map((item,ind)=>{
                            return(
                                <ListItem disablePadding>
                                    <ListItemButton onClick={getItem}>
                                        <li  key={"item"+ind}><b>{val}</b>{item.substring(val.length)}</li>
                                    </ListItemButton>
                                </ListItem>
                            )
                        }):<li style={{"margin":"auto"}}>Item doesn't exist</li>}
                    </List>
                </>
            ):(
                <h5>Database is empty , please insert some data in database section</h5>
            )}
        </div>
        </>
    )
}
