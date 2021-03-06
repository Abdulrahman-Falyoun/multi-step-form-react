


export default (props: any) => {
    const { title, width, height, bgColor } = props;
    return (
        <div className='fancy-card' style={{background: bgColor, width: width, height: height}}>
            <p>{title}</p>
        </div>
    )
};