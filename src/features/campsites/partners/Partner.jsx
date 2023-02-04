const Partner = ({partner}) => {
   if (partner) {
      const { image, name, description } = partner
      return (
         <>
            <img className="OFC" style={{ width: '150px' }} src={image} alt={name} />

            <div className="m-4">
            <h5 className='fw-bold'>{name}</h5>
                    {description}
            </div>
         </>
      );
   }

   return null;
}





export default Partner