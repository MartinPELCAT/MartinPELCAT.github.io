import React from "react";
import Link from "next/link";

export const HeaderSignIn = () => {
  return (
    <Link href="/auth/signin">
      <a>
        <button className="border rounded-lg px-3 py-1">Connexion</button>
      </a>
    </Link>
  );
};
