export default function Display(props) {
    return (
        <div style={{
            borderRadius: '50%',
            backgroundColor: '#F78764',
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 30
        }}>
            {props.number}
        </div>
    )
}
