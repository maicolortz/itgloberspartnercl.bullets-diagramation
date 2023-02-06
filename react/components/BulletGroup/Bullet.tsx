import React from 'react';
import { Link } from 'vtex.render-runtime';
import { LinkProps } from './BulletTypes';
import { useCssHandles } from "vtex.css-handles";
import "./styles.css"
/* 
import { BulletType } from './BulletGroup/BulletTypes';
import './BulletGroup/index.css' */
type Props = {
  src:string
  titleBullet:string
  link:LinkProps
/*   bullet: BulletType,
  isMobile: boolean; */
}
const Bullet = ({ src,titleBullet,link }: Props) => {
const CSS_HANDLES = [
  'bullet__item--link',
 'bullet__item',
  'bullet__item--image',
   'bullet__item--title'];
  const handles = useCssHandles(CSS_HANDLES)
   
return <div className={` pt1 pl5 ${handles.bullet__item}`}>
  <Link to={link.url}
  className={handles["bullet__item--link"]}
  >
    <img className={`${handles['bullet__item--image']}  externalClass`} src={src} alt={titleBullet} />
    <p>Mi imagen {src}</p>
    <p>{titleBullet}</p>
  </Link>
  Mi propio bullet</div>
}
Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "Imagen de Bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}
export default Bullet
/* const CSS_HANDLES = ['bullet__link', 'bullet__item', 'bullet__image', 'bullet__title'];

const Bullet = ({ bullet, isMobile }: prop) => {


  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles["bullet__item"]} >
      <Link 
      to={bullet.link.url}
       target={bullet.link.newTab ? '_blank' : ''} className={handles.bullet__link} >
        <img src={bullet.image} alt={bullet.image} className={handles.bullet_image} />
        {
          isMobile && <h3 className={handles.bullet__title}>{bullet.titleBullet}</h3>
        }
      </Link>
    </div>
  )
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "Imagen de Bullet",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    }
  }
}

export  default Bullet  */