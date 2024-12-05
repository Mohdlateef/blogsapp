import userContext from "./userIdContext";

const UserProvider = (props: any) => {
  const storedUserData = JSON.parse(localStorage.getItem("isLogin"));
  console.log(storedUserData.userId);
  const userId = storedUserData.userId;

  return (
    <userContext.Provider value={{ userId }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserProvider;
