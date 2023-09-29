
import  { FunctionComponent, ReactNode } from 'react'
interface ILoadingProps{
    loading:boolean;
    children:ReactNode
}

const Loading:FunctionComponent<ILoadingProps> = (props) => {
    const {loading} =props;

    if(loading){
        return <>Loading...</>;
    }
  return   <> {props.children} </>
  
}

export default Loading;