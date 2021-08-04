import React, { useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const user = {
    displayName: "Makis",
    photoURL: "/images/users/1.png",
  };

  return profile.displayName ? (
    <>
      <p>Browse Container</p>;
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
