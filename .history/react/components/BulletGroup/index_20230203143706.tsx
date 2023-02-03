import React,{PropsWithChildren}  from "react"

import { BulletSchema } from "./BulletTypes"
export interface BulletGroupProps{
    bullet:BulletSchema
}
const BulletGroup=()=>{
    return(
        <div>
            Aqui tenemos un list context
        </div>
    )
}
export default BulletGroup;