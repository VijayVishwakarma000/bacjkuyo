
import './userBlock.css'
const UserDataBlockView = ( ) => {
    const testArray: any[] = [
        "id",
        "Firstname",
        "Lastname",
        "membershipStatus",
        "validity",
        "phonenumber",
        "age",
        "height",
        "weight",
        "gender",
        "goals",
      ];
  return (
   <>
    <div className="block-card">
        
        <div className='block-flex'>

        <div className="block-data">
                 {testArray.map((elem, id) => {
                     return <div key={id}>{elem}:</div>;
                    })}

        </div>
        <div className="block-values">
        {testArray.map((elem, id) => {
            return <div key={id}>{elem}:</div>;
        })}
        </div>
        </div>
        <div className="drop-btn">
              <button>lorem</button>
              <button>porem</button>
            </div>
    </div>
   </>
  )
}

export default UserDataBlockView