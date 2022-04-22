import './Fonts.css'

function Fonts() {
    return (
        <>
            <div className='noto-sans-sc'>Noto Sans SC 字体样式</div>
            <div className='noto-serif-sc'>Noto Serif SC 字体样式</div>
            <div style={{fontFamily:'Noto Sans SC'}}>Noto Sans SC 字体样式</div>
            <div style={{fontFamily:'Noto Serif SC'}}>Noto Serif SC 字体样式</div>
        </>
    );
}

export default Fonts;