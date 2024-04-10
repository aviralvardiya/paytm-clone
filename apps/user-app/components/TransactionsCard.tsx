import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/Center";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/lib/auth";

export async function TransactionsCard({ p2ptransactions }: any) {
  const session = await getServerSession(authOptions);

  if (!p2ptransactions.length) {
    return (
      <div className="h-[90vh]">
        <Center>
          <Card title="P2P transaction history">
            <div className="min-w-72 pt-2">No transactions found</div>
          </Card>
        </Center>
      </div>
    );
  }

  return (
    <div className="h-[90vh]">
      <Center>
        <Card title="P2P transaction history">
          <div className="min-w-72 pt-2">
            {p2ptransactions.map((transaction: any) => {
              if (transaction.fromUserId == session.user.id) {
                return (
                  <div className="text-red-700 flex justify-between border-b border-gray-200 items-center p-2 bg-red-100 my-1 rounded-lg gap-5">
                    <div>
                      <p className=" text-xl">
                        Money sent to {transaction.toUser.name}
                      </p>
                      <p className="text-sm">
                        {transaction.timeStamp
                          .toString()
                          .split(" ")
                          .slice(0, 5)
                          .join(" ")}
                      </p>
                    </div>
                    <div className="font-bold text-2xl">
                      {" "}
                      - {transaction.amount / 100}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="text-green-700 flex justify-between border-b border-gray-200 items-center p-2 bg-green-100 my-1 rounded-lg gap-5">
                    <div>
                      <p className="text-xl">
                        Money recieved from {transaction.fromUser.name}
                      </p>
                      <p className="text-sm">
                        {transaction.timeStamp
                          .toString()
                          .split(" ")
                          .slice(0, 5)
                          .join(" ")}
                      </p>
                    </div>
                    <div className="font-bold text-2xl">
                      {" "}
                      + {transaction.amount / 100}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </Card>
      </Center>
    </div>
  );
}
