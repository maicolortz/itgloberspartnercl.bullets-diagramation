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
    return <div key={index}>
        <a href={bullet?.link?.url ?bullet?.link?.url:""}>
        <p>{bullet?.titleBullet} </p>
        <p>{bullet?.image}
        </a>
    </div>
    })
)