const Profile = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl text-white font-bold pt-7">Fred Santos</h1>
      <img
        className="rounded-full object-scale-down h-36 w-36 p-3 "
        src={require('./FredPFP.png')}
        alt="Fred Santos Profile Image"
      ></img>
    </div>
  )
}

export default Profile
