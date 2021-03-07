


export default (props: any) => {
    const { title, width, height, bgColor, txtStyle, periodText, headerColor } = props;
    const period = periodText &&  <span style={{fontSize: '.6rem', fontWeight: 'normal', letterSpacing: '0rem'}}>{periodText}</span>;
    return (
        <div className='fancy-card' style={{background: bgColor, width: width, height: height, position: 'relative'}}>
            <p style={{color: txtStyle.color, fontSize: '.5rem', position: 'absolute', top: 0, right: 0, paddingTop: '.2rem', paddingRight: '.5rem'}}>{headerColor}</p>
            <p style={txtStyle}>{title}{period}</p>
        </div>
    )
};