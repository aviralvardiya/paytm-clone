import prisma from "@repo/db/client";
import { TransactionsCard } from "../../../components/TransactionsCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

const getP2PTransactions = async () => {
  const session = await getServerSession(authOptions);

  const transactions = await prisma.p2PTransaction.findMany({
    where: {
      OR: [
        {
          fromUserId: Number(session.user.id),
        },
        {
          toUserId: Number(session.user.id),
        },
      ],
    },
    select: {
      toUser: {
        select: {
          name: true,
        },
      },
      amount: true,
      timeStamp: true,
      fromUser: {
        select: {
          name: true,
        },
      },
      toUserId: true,
      fromUserId: true,
    },
  });
  // console.log(transactions)

  return transactions;
};

export default async function () {
  const transactions = await getP2PTransactions();
  return (
    <div className="w-full">
      <TransactionsCard p2ptransactions={transactions} />
    </div>
  );
}
