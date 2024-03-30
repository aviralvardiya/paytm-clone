import { useRecoilValue } from "recoil"
import { balanceAtom } from "../atoms/balance.atom"

export const useBalance = () =>{
    const balance = useRecoilValue(balanceAtom)
    return balance
}