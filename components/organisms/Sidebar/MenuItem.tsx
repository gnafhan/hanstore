import Image from "next/image"
import cx from "classnames"
interface MenuItemProps{
    title: string;
    icon: string;
}
export default function MenuItem(props: MenuItemProps) {
    const {title, icon} = props;

    const classTitle = cx({
        "item" : true
    });
    return (
        <div className="item active mb-30">
            <div className="me-3">
                   <Image src={`/icon/${icon}.svg`} width = {25} height = {25}/>
            </div>
                    <p className="item-title m-0">
                        <a href="" className="text-lg text-decoration-none">{title}</a>
                    </p>
                </div>
    );
}
