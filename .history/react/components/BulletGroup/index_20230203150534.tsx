import React,{PropsWithChildren}  from "react"
import { BulletSchema } from "./BulletTypes"
import {useDevice} from "vtex.device-detector"
export interface BulletGroupProps{
    bullets:BulletSchema
}
const BulletGroup=({
    bullets,children
}:PropsWithChildren<BulletGroupProps>)=>{
    const {isMobile} =useDevice(); 
    console.log(bullets)
    if(false){
        children
    }
    return isMobile ?(
        <div>
            Aqui tenemos un list context
        </div>
    )
}
export default BulletGroup;