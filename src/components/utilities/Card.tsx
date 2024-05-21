import {Props as ButtonProps} from "./Button"
import Button from "./Button"

export type Props = {
    title: string,
    description: string,
    align: 'left'|'center'|'right',
    background: string,
    buttonConfig: ButtonProps[],
    size: [number, number],
    image: string,
}

const Card: React.FC<Props> = ( props: Props ): JSX.Element => {

    
    return (
        <section className=" h-24 w-16 inset-4 "
         style={{background: `${props.background} url(${props.background}) center no-repeat cover`,
         width: props.size[0] + 'px', height: props.size[1] + 'px' }}>
            <p className=" font-sans flex flex-col justify-end gap-y-2 "
            style={{textAlign: props.align}}>

                {props.image ? <img className= " block " src={props.image} /> : null}
                <h4 className={` overflow-hidden text-ellipsis ${props.image ? " opacity-45 uppercase " : "  capitalize bold text-lg "}`}>
                    {props.title}</h4>
                <div>{props.description}</div>
                <div className={`flex justify-start gap-x-4 ${props.image ? ' text-sm ' : ' text-lg '}`}>
                    {props.buttonConfig.map((button, index) => {
                        return <Button key={index} {...button} />
                    })}</div>
            </p>
       </section>
    )
}

export default Card