export type BulletSchema = Array<BulletType>

export type BulletType={
  image: string;
  titleBullet:string;
  link?:LinkProps;
  price:number;
}
export interface LinkProps{
  url: string;
  attributeNofollow?:boolean;
  attributeTitle?:string;
  openNewTab?: boolean;
  newTab?: boolean;
}