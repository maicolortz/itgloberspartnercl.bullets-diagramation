import React,{PropsWithChildren}  from "react"
import { BulletSchema } from "./BulletTypes"
import useListContext from "vtex.list-context"
import {useDevice} from "vtex.device-detector"
import { getBulletsAsTSXList } from "./modules/BulletsAsList"
export interface BulletGroupProps{
    bullets:BulletSchema
}
const BulletGroup=({
    bullets,children
}:PropsWithChildren<BulletGroupProps>)=>{
    const {isMobile} =useDevice(); 
    const {list} =useListContext() || []
    console.log("bullets",bullets)
    const bulletsContent=getBulletsAsTSXList(bullets);

    if(false){
        console.log(children,list)
    }
    return (
        isMobile ?<div>
            Aqui tenemos un list context en movil
        </div>
        :<div> {bulletsContent}</div>
    )
}
export default BulletGroup;