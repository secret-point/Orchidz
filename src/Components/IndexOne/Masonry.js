import React  from "react";
export default function Masonry(props){
    console.log(props);
    return(

    <>
            <div style={{columns: props.columnCount, columnGap:0}}>
            {props.imageUrls.map((img, i) =>
                <img src={img} key={i} className="image" style={{ padding: props.gap/2}}/>
            )}
           
        </div>
       
    </>
    )
}