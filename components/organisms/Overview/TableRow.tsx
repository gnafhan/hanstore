import Image from "next/image"
import cx from "classnames"
interface TableRowProps {
    icon? : string;
    game? : string;
    device? : string;
    status? : string;
    item? : number;
    nominal? : number;
    
}
export default function TableRow(props: TableRowProps) {
    const {icon, game, device, item, nominal, status} = props;
    const statusClass = cx ({
        "float-start" : true,
        'icon-status' : true,
        "pending" : status === "Pending",
        "success" : status === "Success",
        "failed" : status === "Failed",
    })
    return (
        <tr className="align-middle">
                                    <th scope="row">
                                        <img className="float-start me-3 mb-lg-0 mb-3" src={`/img/${icon}.png`}
                                            width={80} height={60} alt=""/>
                                        <div className="game-title-header">
                                            <p className="game-title fw-medium text-start color-palette-1 m-0">{game}</p>
                                            <p className="text-xs fw-normal text-start color-palette-2 m-0">{device}</p>
                                        </div>
                                    </th>
                                    <td>
                                        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
                                    </td>
                                    <td>
                                        <p className="fw-medium text-start color-palette-1 m-0">Rp {nominal}</p>
                                    </td>
                                    <td>
                                        <div>
                                            <span className={statusClass}></span>
                                            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                                                {status}</p>
                                        </div>
                                    </td>
                                </tr>
    )
}
