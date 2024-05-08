import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export default async function () {
  const session = await getServerSession(authOptions)
  let name = session?.user?.name || "Koi bhi naam"
  name = name[0].toUpperCase() + name.slice(1)
  
  return <div className="w-full flex flex-col gap-5  items-center pt-10 px-5">
    <p className="text-3xl font-bold">Hello, {name}</p>
    <p>Welcome to the home page of the dashboard</p>
    <p>This is a Paytm like money transfer app where you can add money in your wallet and exchange money with other users using transactions</p>
    <ul className="list-disc">
      <li>Click on transfer to transfer money from a dummy bank to your wallet</li>
      <li>Click on transactions to see your past peer to peer transactions</li>
      <li>Click on P2P Transactions to send money to other users</li>
    </ul>
    
  </div>;
}
