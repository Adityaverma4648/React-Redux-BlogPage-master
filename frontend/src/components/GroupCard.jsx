/* eslint-disable react/prop-types */
const GroupCard = (props) => {
  return (
    <div
                  key={props.id}
                  className="container d-flex justify-content-between align-items-center p-2 text-black my-2"
                  style={{height : "60px"}}
                >
                  <div className="col-sm-8 d-flex justify-content-center align-items-center">
                    <img
                      src={props.image}
                      className="rounded-circle me-2"
                      style={{ height: "50px", width: "50px" }}
                      alt="groupAvatar"
                    />
                    <div className="ms-1 fw-light" style={{width : '150px'}}>{props.name}</div>
                  </div>
                  <div className="d-flex">
                    <button
                      type="button"
                      className="btn btn-ouline-secondary bg-light rounded-5 fw-normal"
                    >
                      Follow
                    </button>
                  </div>
                </div>
  )
}

export default GroupCard