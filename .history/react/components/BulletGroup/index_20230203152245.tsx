import React,{PropsWithChildren}  from "react"
import { BulletSchema } from "./BulletTypes"
import useListContext from "vtex.list-context"
import {useDevice} from "vtex.device-detector"
export interface BulletGroupProps{
    bullets:BulletSchema
}
const BulletGroup=({
    bullets,children
}:PropsWithChildren<BulletGroupProps>)=>{
    const {isMobile} =useDevice(); 
    const {list} =useListContext() || []
    console.log("bullets",list)
    if(false){
        console.log(children,bullets)
    }
    return (
        isMobile ?<div>
            Aqui tenemos un list context en movil
        </div>
        :<div> No estamos en movil</div>
    )
}
export default BulletGroup;