import './Slider.scss' 

export function Slider() {
    console.log('slider')
    return (
        <div className="slider-container">
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Está ativo?</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Possui vagas?</span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-sm" />
                </label>
            </div>
        </div>
    )
}