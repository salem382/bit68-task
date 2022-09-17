

const TextComponent = ({it1, it2, clr, brClr, img, colo}) => {

    return (   
        <div className="justify-content-center d-flex align-items-center me-2" 
        style={{color:clr, width:'92px', height:'82px',border: `1px solid ${brClr}`,borderRadius:'10px',flexDirection:'column'}}>
            {img ? (
                <img className="w-100" src={img} alt='item'/>
            ) : (
                <>
                    <p className="m-0">{it1}</p>
                    {colo ? (
                        <p style={{width:'35px', height:'50px',background:colo}} className='mt-1 rounded-circle border border-secondary'>
                            
                        </p>
                    ) : (
                        <p className="m-0 mt-2">{it2}</p>
                    )} 
                </>
            )}
        </div>
         
    )
}

export default TextComponent;

//c3c3c3