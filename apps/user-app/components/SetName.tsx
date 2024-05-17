"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/Center";
import { TextInput } from "@repo/ui/TextInput";
import { useState } from "react";
import { setNameAction } from "../app/lib/actions/setName";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SetName() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div className="h-[90vh]">
      <Center>
        <Card title="Set Name">
          <div className="min-w-72 pt-2">
            <TextInput
              placeholder={"Name"}
              label="Full name"
              onChange={(value) => {
                setName(value);
              }}
            />
            <div className="pt-4 flex justify-center">
              <Button
                onClick={async () => {
                  await setNameAction(name);
                  router.push("/dashboard");
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </Card>
      </Center>
    </div>
  );
}
