import PropTypes from 'prop-types'
const SingleCook = ({ wantToCook, handlePreparing, index }) => {
  const { name, preparing_time, calories } = wantToCook;

  return (
    <div>

      
      <table className="table rounded-none space-x-4 "> 
      <div className='flex justify-between'>
          <tr >
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
          </tr>  
          
     
      
    
        <button onClick={() => handlePreparing(wantToCook)} className='btn rounded-3xl bg-green-500 my-auto flex justify-end'>Preparing</button>

        </div> 
        </table>



    </div >
  );
};

export default SingleCook;

SingleCook.propTypes = {

  wantToCook: PropTypes.object,
  name: PropTypes.object,
  preparing_time: PropTypes.object,
  calories: PropTypes.object,
  handlePreparing: PropTypes.func,
  index: PropTypes.object
}