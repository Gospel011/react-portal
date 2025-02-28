import { useParams } from "react-router-dom";

function ProfilePage() {
  const params = useParams();

  return <div className="p-4 text-2xl">Profile Page for {params.profileId}</div>;
}

export default ProfilePage;
