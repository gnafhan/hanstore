interface ReachedItemProps{
    item?: string;
    size?:string;
}
export default function ReachedItem(props: ReachedItemProps) {
    const {item, size} = props;
    return (
        <div className="me-lg-35">
        <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{size}</p>
        <p className="text-lg text-lg-start text-center color-palette-2 m-0">{item}</p>
    </div>
    )
}
