"use client";

import { Button } from "./button";

interface appBarProps {
  user?: {
    name?: string;
  };
  onSignin: any;
  onSignout: any;
}

export const Appbar = ({ user, onSignin, onSignout }: appBarProps) => {
  return (
    <div className="flex justify-between border-b px-4">
      <div className="text-lg flex flex-col justify-center">PayTM</div>
      <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
  );
};
