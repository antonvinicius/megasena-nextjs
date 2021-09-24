export default function Card(props) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '20px 0 20px 0'
        }}>
            {props.numbers}
        </div>
    )
}
