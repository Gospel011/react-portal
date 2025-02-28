import { Link, NavLink, Outlet } from "react-router-dom";

function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-2">
      <div className="text-2xl flex flex-col p-4 gap-2">
        {profiles.map((profile) => {
          return (
            <NavLink key={profile} to={`/profiles/${profile}`}>
              Profile {profile}
            </NavLink>
          );
        })}
      </div>

      <Outlet />
    </div>
  );
}

export default ProfilesPage;
