import cx from 'classnames'

interface RowProps {
    label: string
    value: string|number;
    bold?: boolean
}
export default function Row(props: Partial<RowProps>) {
    const {label, value, bold} = props;
    const total = cx({
        "purchase-details" : true,
        'color-palette-4' : bold
    })
    return (
        <p className="text-lg color-palette-1 mb-20">{label}
         <span className={total}>{value}</span>
        </p>
    )
}
