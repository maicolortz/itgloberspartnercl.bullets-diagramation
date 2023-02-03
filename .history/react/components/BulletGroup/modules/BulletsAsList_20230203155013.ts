import React from "react";
import { BulletSchema, Link } from "../BulletTypes";

type Bullet ={
link?:Link
image:string
titleBullet?:string}
export const getBulletsAsTSXList=(
    bullets: BulletsSchema
)=>(
    bullets.map((bullet:Bullet, index)=>{
    return <div>
        <a href={bullet?.link?.url}>
    </div>
    })
)