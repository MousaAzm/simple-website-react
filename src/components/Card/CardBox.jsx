import "./CardBox.css"

const styleColor = [
    "box-blue",
    "box-red",
    "box-orange",
    "box-pink",
    "box-purple",
    "box-green",
]

export const CardBox = ({children, boxColor}) => {
    const checkBoxColor = styleColor.includes(boxColor) ? boxColor : styleColor[0];
    
    return (
       <>   
        <div className={`service-box ${checkBoxColor}`} >
          {children}
        </div>
      </>
    )
}
