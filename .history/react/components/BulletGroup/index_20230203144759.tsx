import React,{PropsWithChildren}  from "react"
import { BulletSchema } from "./BulletTypes"

export interface BulletGroupProps{
    bullet:BulletSchema
}
const BulletGroup=({
    bullets,children
}:PropsWithChildren<BulletGroupProps>)=>{
    console.log(bullets)
    if(false){
        children
    }
    return(
        <div>
            Aqui tenemos un list context
        </div>
    )
}
export default BulletGroup;