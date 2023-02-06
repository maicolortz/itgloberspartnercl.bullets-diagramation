import React, { PropsWithChildren } from 'react'
import { useDevice } from 'vtex.device-detector';
import { useListContext, ListContextProvider } from "vtex.list-context";
/* import { useCssHandles } from "vtex.css-handles" */
import { BulletSchema } from './BulletTypes';
import {useCssHandles} from "vtex.css-handles";
import { getBulletsAsTSXList} from "./modules/BulletsAsList"

export interface BulletGroupProps {
  bullets: BulletSchema;
}

const BulletGroup = ({
  bullets,
  children
}: PropsWithChildren<BulletGroupProps>) => {

 /*  const handles = useCssHandles(['bullet_container']); */
  const { isMobile } = useDevice();
  const { list } = useListContext() || []
console.log("Bullets",bullets)
const bulletsGroup =getBulletsAsTSXList(bullets)
const newListContextValue = list.concat(bulletsGroup)
const CSS_HANDLES=["bullet__container"]

const handles=useCssHandles(CSS_HANDLES)
return(
  <ListContextProvider list={newListContextValue}>
{

  isMobile
  ?
  <div className={handles.bullet__container}>{bulletsGroup}</div>
  :
  children
}
  </ListContextProvider>
)

/*const newListContextValue = list.concat(bullets)
  
   return (
    <ListContextProvider list={newListContextValue}>
      {
        isMobile
          ?
          <div className={handles.bullet_container}>
            {
              bullets
            }
          </div>
          :
          <div>
            {children}
          </div>
      }
    </ListContextProvider>
  ) */
}

export default BulletGroup