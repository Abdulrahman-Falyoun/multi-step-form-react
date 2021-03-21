


export default ({
    title,
    width,
    height,
    bgColor,
    txtStyle,
    periodText,
    headerColor,
    borderStyle,
    borderWidth,
    borderColor,
    value,
    onFancyCardClicked = () => { },
    cardSelected = false
}: any) => {
    const period = periodText && <span style={{ fontSize: '.6rem', fontWeight: 'normal', letterSpacing: '0rem' }}>{periodText}</span>;
    return (
        <div className={'fancy-card ' + (cardSelected ? 'fancy-card-selected' : '')}
            onClick={() => {
                onFancyCardClicked(value);
            }}
            style={{
                background: bgColor,
                width: width,
                height: height,
                position: 'relative',
                borderStyle: borderStyle,
                borderWidth: borderWidth,
                borderColor: borderColor
            }}>
            <p style={{ 
                color: txtStyle?.color, 
                fontSize: '.5rem', 
                position: 'absolute', 
                top: 0, 
                right: 0, 
                paddingTop: '.2rem', 
                paddingRight: '.5rem' }}>{headerColor}</p>
            <p style={txtStyle}>{title}{period}</p>
        </div>
    )
};