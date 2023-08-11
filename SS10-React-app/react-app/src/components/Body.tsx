import '../index.css';

function Body() {
  const users = [
    {
      id: 1,
      name: "CaoTV",
      age: 30,
      address: {
        street: "162 Phan Đăng Lưu",
        city: "Đà Nẵng",
      },
    },
    {
      id: 2,
      name: "Steve",
      age: 40,
      address: {
        street: "60 Main St",
        city: "New York",
      },
    },
    {
      id: 3,
      name: "Jane",
      age: 20,
      address: {
        street: "70 Main St",
        city: "Los Angeles",
      },
    },
  ];

  const element = users.map((user) =>{
    return user.name + " " + user.address.street
  })
  console.log(element);
  
  return (
    <div className="card">
      {users.map((user) => {
        return (
          <div style={{margin: "10px"}}>
            <h3>  User ID:{user.id}  </h3>
            <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg" alt="" style={{ width: "200px" }} />
         
              <p>
                Name: {user.name} - Age: {user.age} 
              </p>
              <p>Address:{" "}
                {user.address.street}, {user.address.city}{" "}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Body;
