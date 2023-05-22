import { useAddress, useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import React, { ReactNode, createContext, useState } from "react";



export const ContractContext = createContext({});


interface ChildrenType {
    children: ReactNode
}

export const ContractContextProvider = ({ children }: ChildrenType) => {
    const _owner = useAddress();

    const address = process.env.NEXT_PUBLIC_CONTRACT_KEY;
    const { contract } = useContract(address);


    // const { data, isLoading } = useContractRead(contract, "numberOfCampains", [{{ args }}])



    //create campain
    const { mutateAsync: createCampain, isLoading: isCreatCamapinLoading } = useContractWrite(contract, "createCampain")
    const createCampainCall = async (_title: String, _description: String, _deadline: any, _target: number, _image: String) => {
        try {
            const date = new Date(_deadline).getTime();
            const data = await createCampain({ args: [_owner, _title, _description, _target, date, _image] });
            console.info("Number of campains", data);
        } catch (error) {
            console.error("contract Create Campain failure", error);
        }
    }



    //donate to campain
    const { mutateAsync: donateToCampain, isLoading: isDonateLoading } = useContractWrite(contract, "donateToCampain")
    const donateCampainCall = async (_id: string) => {
        try {
            const data = await donateToCampain({ args: [_id] });
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }



    //get campain donors
    // const [donors, setDonors] = useState({});
    // const getDonors = async (_id: String) => {
    //     try{

    //     }
    //     const { data, isLoading } = useContractRead(contract, "getDonors", [_id])
    //     if (!isLoading && data) {
    //         setDonors(data);
    //     }
    // }



    return <ContractContext.Provider value={{
        createCampainCall,
        isCreatCamapinLoading,
        donateCampainCall,
        isDonateLoading,
    }}>
        {children}
    </ContractContext.Provider>
}




