import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles((them)=>(
    {
        gambar:{
            backgroundImage:`url(${them.url})`,
        }
    }
))

export default function Idflix(props){
    const classes=useStyles(props)
    return(
                <>
                <div className={classes.gambar}/>
                </>
            )
};