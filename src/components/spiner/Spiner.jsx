import Spinner from 'react-bootstrap/Spinner';

function spin() {
  return (
    <div className='text-center my-5 py-5'>
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  );
}

export default spin;